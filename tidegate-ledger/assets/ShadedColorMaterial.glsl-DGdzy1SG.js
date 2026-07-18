import{i as e}from"./vec4f64-BiwnP2yY.js";import{n as t,r as n}from"./Uniform-DbW1Stte.js";import{t as r}from"./ShaderBuilder-CGRMmuSM.js";import{t as i}from"./FloatPassUniform-BgZa4F-S.js";import{r as a}from"./Slice.glsl-CyUIov5k.js";import{t as o}from"./Float3PassUniform-DwdjRl2l.js";import{t as s}from"./Float4PassUniform-BK2Jlamx.js";import{t as c}from"./FloatBindUniform-DuYdEJ-p.js";import{c as l,l as u,o as d,s as f,t as p}from"./OutputColorHighlightOLID.glsl-nI0MTdxz.js";import{t as m}from"./Transform.glsl-iLLevyFN.js";function h(e,t){if(!t.screenSizeEnabled)return;let r=e.vertex;f(r,t),r.uniforms.add(new c(`perScreenPixelRatio`,e=>e.camera.perScreenPixelRatio),new i(`screenSizeScale`,e=>e.screenSizeScale)).code.add(n`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function g(e){let i=new r;i.include(m),i.include(h,e),i.fragment.include(a,e),i.include(p,e);let{vertex:c,fragment:f}=i;return f.include(d),l(c,e),f.uniforms.add(new s(`uColor`,e=>e.color)),i.attributes.add(`position`,`vec3`),i.varyings.add(`vWorldPosition`,`vec3`),e.screenSizeEnabled&&i.attributes.add(`offset`,`vec3`),e.shadingEnabled&&(u(c),i.attributes.add(`normal`,`vec3`),i.varyings.add(`vViewNormal`,`vec3`),f.uniforms.add(new o(`shadingDirection`,e=>e.shadingDirection)),f.uniforms.add(new s(`shadedColor`,e=>_(e.shadingTint,e.color)))),c.main.add(n`
    vWorldPosition = ${e.screenSizeEnabled?n`screenSizeScaling(offset, position)`:n`position`};
    ${t(e.shadingEnabled,n`vec3 worldNormal = normal;
           vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`)}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  `),f.main.add(n`
      discardBySlice(vWorldPosition);

      ${e.shadingEnabled?n`vec3 viewNormalNorm = normalize(vViewNormal);
             float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
             vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`:n`vec4 finalColor = uColor;`}
      outputColorHighlightOLID(applySlice(finalColor, vWorldPosition), finalColor.rgb);`),i}function _(e,t){let n=1-e[3],r=e[3]+t[3]*n;return r===0?(v[3]=r,v):(v[0]=(e[0]*e[3]+t[0]*t[3]*n)/r,v[1]=(e[1]*e[3]+t[1]*t[3]*n)/r,v[2]=(e[2]*e[3]+t[2]*t[3]*n)/r,v[3]=t[3],v)}var v=e(),y=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:`Module`}));export{g as n,y as t};