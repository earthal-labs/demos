import{t as e}from"./signal-DfK_iP7G.js";import{r as t}from"./Uniform-DbW1Stte.js";import{t as n}from"./IntegerPassUniform-CDHAMczN.js";import{t as r}from"./ScreenSpacePass.glsl-D44B-ma7.js";import{t as i}from"./NoParameters-ZDc3QXO4.js";import{t as a}from"./ShaderBuilder-CGRMmuSM.js";import{t as o}from"./FloatPassUniform-BgZa4F-S.js";import{t as s}from"./Texture2DPassUniform-BH3IXb0x.js";var c=class extends i{constructor(){super(...arguments),this.effect=0,this.fadeFactor=e(1)}};function l(){let e=new a;return e.include(r),e.outputs.add(`fragColor`,`vec4`,0),e.fragment.uniforms.add(new s(`colorTexture`,e=>e.color),new s(`focusArea`,e=>e.focusArea),new n(`focusAreaEffectMode`,e=>e.effect),new o(`fadeFactor`,e=>e.fadeFactor.value)).main.add(t`
      float mask = texture( focusArea, uv, 0.0 ).r;
      vec4 color = texture( colorTexture, uv, 0.0 );
      vec4 colorDeSaturate = vec4(color.r * 0.25 + color.g * 0.5 + color.b * 0.25);
      if (focusAreaEffectMode == ${t.int(0)}) {
        fragColor = mask > 0.0 ? color : mix(color, 0.55 * colorDeSaturate + 0.45, fadeFactor);
      } else {
        fragColor = mask > 0.0 ? color : mix(color, 0.33 * color, fadeFactor);
      }
  `),e}var u=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaColorPassParameters:c,build:l},Symbol.toStringTag,{value:`Module`}));export{l as n,u as r,c as t};