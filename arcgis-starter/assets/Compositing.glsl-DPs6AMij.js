import{n as e,r as t}from"./Uniform-DbW1Stte.js";import{t as n}from"./ScreenSpacePass.glsl-D44B-ma7.js";import{t as r}from"./NoParameters-ZDc3QXO4.js";import{t as i}from"./ShaderBuilder-CGRMmuSM.js";import{t as a}from"./FloatPassUniform-BgZa4F-S.js";import{t as o}from"./Texture2DPassUniform-BH3IXb0x.js";import{t as s}from"./Float2BindUniform-D0I--N8s.js";import{t as c}from"./ReadDepth.glsl-CLTK5zoe.js";function l(e){e.code.add(t`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 floatToRgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),e.code.add(t`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaToFloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`)}var u=class extends r{constructor(){super(...arguments),this.opacity=1,this.mipmapLevel=0}};function d(r){let u=new i,{blendEmissive:d,mode:f}=r;u.include(n),u.fragment.uniforms.add(new o(`tex`,({texture:e})=>e));let p=f===3;return p?(u.fragment.include(c),u.fragment.include(l),u.fragment.uniforms.add(new s(`nearFar`,e=>e.camera.nearFar))):u.fragment.uniforms.add(new a(`opacity`,e=>e.opacity),new a(`level`,({mipmapLevel:e})=>e)),d&&(u.outputs.add(`fragColor`,`vec4`,0),u.outputs.add(`fragEmission`,`vec4`,1)),u.fragment.main.add(t`
    ${p?t`
          float normalizedLinearDepth = (-linearDepthFromTexture(tex, uv) - nearFar[0]) / (nearFar[1] - nearFar[0]);
          fragColor = floatToRgba(normalizedLinearDepth);`:t`fragColor = textureLod(tex, uv, level) * opacity;`}
    ${e(d,`fragEmission = vec4(0.0, 0.0, 0.0, fragColor.a);`)}`),u}var f=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:u,build:d},Symbol.toStringTag,{value:`Module`}));export{d as n,u as r,f as t};