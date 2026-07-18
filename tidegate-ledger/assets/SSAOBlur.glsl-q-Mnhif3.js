import{r as e}from"./Uniform-DbW1Stte.js";import{t}from"./ScreenSpacePass.glsl-D44B-ma7.js";import{t as n}from"./ShaderBuilder-CGRMmuSM.js";import{t as r}from"./Float2DrawUniform-DEClVRpY.js";import{t as i}from"./FloatPassUniform-BgZa4F-S.js";import{t as a}from"./Texture2DPassUniform-BH3IXb0x.js";import{t as o}from"./Texture2DDrawUniform-2kcPCOxd.js";import{t as s}from"./ReadDepth.glsl-CLTK5zoe.js";var c=4;function l(){let l=new n,u=l.fragment;return l.include(t),u.include(s),u.uniforms.add(new a(`depthMap`,e=>e.depthTexture),new o(`tex`,e=>e.colorTexture),new r(`blurSize`,e=>e.blurSize),new i(`projScale`,(e,t)=>{let n=t.camera.distance;return n>5e4?Math.max(0,e.projScale-(n-5e4)):e.projScale})),u.code.add(e`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${e.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),l.outputs.add(`fragBlur`,`float`),u.main.add(e`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${e.int(c)}; r <= ${e.int(c)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),l}var u=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:`Module`}));export{l as n,u as t};