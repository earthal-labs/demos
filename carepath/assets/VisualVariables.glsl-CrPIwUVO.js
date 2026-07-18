import{i as e,n as t,t as n}from"./FloatsPassUniform-BQgAUzKh.js";import{r,t as i}from"./Uniform-DbW1Stte.js";import{t as a}from"./Float3PassUniform-DwdjRl2l.js";import{t as o}from"./Float4PassUniform-BK2Jlamx.js";function s(e){e.code.add(r`struct MaskedColor {
vec4 color;
bvec4 mask;
};`)}function c(e){e.include(s),e.code.add(r`
    MaskedColor createMaskedFromUInt8NaNColor(vec4 color) {
      return MaskedColor(color * ${r.float(1/254)}, equal(color, vec4(255)));
    }
  `)}function l(e){e.include(s),e.code.add(r`vec4 maskedColorSelectOrOne(MaskedColor color) {
return vec4(
color.mask.r ? 1.0 : color.color.r,
color.mask.g ? 1.0 : color.color.g,
color.mask.b ? 1.0 : color.color.b,
color.mask.a ? 1.0 : color.color.a
);
}
MaskedColor multiplyMaskedColors(MaskedColor color1, MaskedColor color2) {
vec4 masked1 = maskedColorSelectOrOne(color1);
vec4 masked2 = maskedColorSelectOrOne(color2);
return MaskedColor(masked1 * masked2, bvec4(ivec4(color1.mask) & ivec4(color2.mask)));
}`)}function u(e){e.include(s),e.code.add(r`MaskedColor createMaskedFromNaNColor(vec4 color) {
return MaskedColor(color, isnan(color));
}`)}var d=class extends i{constructor(e,t,n){super(e,`mat3`,1,(r,i,a)=>r.setUniformMatrix3fv(e,t(i,a),n))}};function f(i,c){let{vertex:f,attributes:p}=i;c.hasVVInstancing&&(c.hasVVSize||c.hasVVColor)&&p.add(`instanceFeatureAttribute`,`vec4`),c.hasVVSize?(f.uniforms.add(new a(`vvSizeMinSize`,e=>e.vvSize.minSize)),f.uniforms.add(new a(`vvSizeMaxSize`,e=>e.vvSize.maxSize)),f.uniforms.add(new a(`vvSizeOffset`,e=>e.vvSize.offset)),f.uniforms.add(new a(`vvSizeFactor`,e=>e.vvSize.factor)),f.uniforms.add(new a(`vvSizeFallback`,e=>e.vvSize.fallback)),f.uniforms.add(new d(`vvSymbolRotationMatrix`,e=>e.vvSize.symbolRotationMatrix)),f.uniforms.add(new a(`vvSymbolAnchor`,e=>e.vvSize.symbolAnchor)),f.code.add(r`vec3 vvScale(vec4 _featureAttribute) {
if (isnan(_featureAttribute.x)) {
return vvSizeFallback;
}
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),f.code.add(r`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 scale = max(vvScale(_featureAttribute), eps);
        return vec4(vvSymbolRotationMatrix * _normal / scale, 1.0);
      }

      ${c.hasVVInstancing?r`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(${f.inputs.get(`position`)}, instanceFeatureAttribute);
      }`:``}
    `)):f.code.add(r`
      vec4 localPosition() { return vec4(${f.inputs.get(`position`)}, 1.0); }
      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),i.vertex.include(s),c.hasVVColor?(f.constants.add(`vvColorNumber`,`int`,e),f.uniforms.add(new n(`vvColorValues`,e,e=>e.vvColor.values),new t(`vvColorColors`,e,e=>e.vvColor.colors),new o(`vvColorFallback`,e=>e.vvColor.fallback,{supportsNaN:!0})),c.hasVVInstancing&&(i.vertex.include(l),i.vertex.include(u)),f.code.add(r`
      vec4 interpolateVVColor(float value) {
        if (isnan(value)) {
          return vvColorFallback;
        }

        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${c.hasVVInstancing?r`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }

            MaskedColor applyVVColor(MaskedColor color) {
              return multiplyMaskedColors(color, createMaskedFromNaNColor(vvColor()));
            }
            `:r`
            vec4 vvColor() {
              return vec4(1.0);
            }

            MaskedColor applyVVColor(MaskedColor color) {
              return color;
            }
            `}
    `)):f.code.add(r`vec4 vvColor() {
return vec4(1.0);
}
MaskedColor applyVVColor(MaskedColor color) {
return color;
}`)}export{u as a,c as i,d as n,s as o,l as r,f as t};