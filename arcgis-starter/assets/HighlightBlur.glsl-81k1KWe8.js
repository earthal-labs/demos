import{o as e}from"./vec2f64-BwQYG_9S.js";import{r as t}from"./Uniform-DbW1Stte.js";import{t as n}from"./HighlightCellGridScreenSpacePass.glsl-TcDASehJ.js";import{t as r}from"./NoParameters-ZDc3QXO4.js";import{t as i}from"./ShaderBuilder-CGRMmuSM.js";import{t as a}from"./Float2DrawUniform-DEClVRpY.js";import{t as o}from"./Texture2DDrawUniform-2kcPCOxd.js";var s=class extends r{constructor(){super(...arguments),this.blurSize=e()}};function c(){let e=new i;return e.include(n),e.outputs.add(`fragHighlight`,`vec2`,0),e.fragment.uniforms.add(new a(`blurSize`,e=>e.blurSize),new o(`blurInput`,e=>e.blurInput)).main.add(t`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 center = texture(blurInput, sUV).rg;
if (vOutlinePossible == 0.0) {
fragHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, sUV + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, sUV - blurSize * 3.294215).rg * 0.093913;
fragHighlight = sum;
}`),e}var l=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:s,build:c},Symbol.toStringTag,{value:`Module`}));export{c as n,s as r,l as t};