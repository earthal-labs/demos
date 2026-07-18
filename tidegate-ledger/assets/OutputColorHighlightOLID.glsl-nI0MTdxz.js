import{r as e,s as t}from"./vec3f64-CkQiQSMN.js";import{x as n}from"./mat4-cuGiot_V.js";import{M as r}from"./vec3-BD0ipM_y.js";import{t as i}from"./mat4f64-E_FXCKxO.js";import{n as a,r as o,t as s}from"./Uniform-DbW1Stte.js";import{t as c}from"./HighlightReadBitmap.glsl-2KM2uAu0.js";import{i as l,m as u,s as d,t as f,u as p}from"./Emissions.glsl-O9E5T9G1.js";import{n as m}from"./oitResolution.glsl-DK3fgwtq.js";import{t as h}from"./Float3BindUniform-pvPYdztI.js";import{t as g}from"./FloatBindUniform-DuYdEJ-p.js";import{t as _}from"./Matrix4BindUniform-B8qaJVmk.js";import{t as v}from"./Texture2DBindUniform-CKLq3hU-.js";import{t as y}from"./ditherNoise.glsl-UOpZ2vbN.js";var b=class extends s{constructor(e,t,n){super(e,`mat4`,2,(r,i,a)=>r.setUniformMatrix4fv(e,t(i,a),n))}};function x(t,n){n.instancedDoublePrecision?t.constants.add(`cameraPosition`,`vec3`,e):t.uniforms.add(new l(`cameraPosition`,(e,t)=>r(w,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2])))}function S(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new _(`proj`,e=>e.camera.projectionMatrix),new b(`view`,(e,t)=>n(C,t.camera.viewMatrix,e.origin)),new l(`localOrigin`,e=>e.origin));let i=({camera:e})=>r(w,e.viewInverseTransposeMatrix[3],e.viewInverseTransposeMatrix[7],e.viewInverseTransposeMatrix[11]);e.uniforms.add(new _(`proj`,e=>e.camera.projectionMatrix),new _(`view`,e=>n(C,e.camera.viewMatrix,i(e))),new h(`localOrigin`,e=>i(e)))}var C=i(),w=t();function T(e){e.uniforms.add(new _(`viewNormal`,e=>e.camera.viewInverseTransposeMatrix))}function E(e){e.uniforms.add(new g(`pixelRatio`,e=>e.camera.pixelRatio/e.overlayStretch))}function D(e){e.code.add(o`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}var O=1/255.5,k=1-O;function A(e){e.constants.add(`alphaCutoff`,`float`,O),e.constants.add(`opacityCutoff`,`float`,k)}var j=class extends s{constructor(e,t){super(e,`ivec2`,0,(n,r)=>n.setUniform2iv(e,t(r)))}},M=class extends s{constructor(e,t){super(e,`int`,0,(n,r)=>n.setUniform1i(e,t(r)))}},N=class extends s{constructor(e,t){super(e,`usampler2D`,0,(n,r)=>n.bindTexture(e,t(r)))}};function P(e,t){let{fragment:n}=e,{output:r,draped:i,hasHighlightMixTexture:a}=t;r===10?(n.uniforms.add(new M(`highlightLevel`,e=>e.highlightLevel??0),new j(`highlightMixOrigin`,e=>e.highlightMixOrigin)),e.outputs.add(`fragHighlight`,`uvec2`,0),e.include(c),a?n.uniforms.add(new N(`highlightMixTexture`,e=>e.highlightMixTexture)).code.add(o`uvec2 getAccumulatedHighlight() {
return texelFetch(highlightMixTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
uvec2 combinedHighlight = getAccumulatedHighlight();
combinedHighlight[li] |= bits;
fragHighlight = combinedHighlight;
}
}`):n.code.add(o`void outputHighlight(bool occluded) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
}`),i?n.code.add(o`bool isHighlightOccluded() {
return false;
}`):n.uniforms.add(new v(`depthTexture`,e=>e.mainDepth)).code.add(o`bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}`),n.code.add(o`void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`)):n.code.add(o`void calculateOcclusionAndOutputHighlight() {}`)}function F(e,t){e.include(D),e.include(m,t),e.code.add(`
    vec3 emissionDimming(in vec3 srcColor, float srcAlpha) {
      srcColor = rgb2hsv(srcColor);
      srcColor.g = srcAlpha;
      srcColor.b = 1.0;
      return hsv2rgb(srcColor);
    }
  `)}function I(e,t){e.include(P,t),e.include(f,t);let{fragment:n,outputs:r}=e,{output:i,hasEmission:s,discardInvisibleFragments:c,oitPremultipliedAlpha:l,snowCover:h,useFloatBlend:g,emissionDimmingPass:_}=t,v=i===11,b=d(i),x=p(i),S=u(i)&&!b,C=0;(S||b)&&r.add(`fragColor`,`vec4`,C++),b&&r.add(`fragAlpha`,`float`,C++),s&&r.add(`fragEmission`,`vec4`,C++),n.include(D),n.include(A),n.include(m,t),n.include(y,t),_&&n.include(F,t),n.code.add(o`
    void outputColorHighlightOLID(vec4 finalColor, vec3 emissiveSymbolColor ${a(h,`, float snow`)}) {
      ${a(v,`finalColor.a = 1.0;`)}
      ${a(c,`if (finalColor.a < alphaCutoff) { discard; }`)}

      ${a(b,`float noise = ditherNoise(finalColor);\n         fragColor = ${a(l,`finalColor`,`premultiplyAlpha(finalColor)`)};\n         fragColor = vec4(fragColor.rgb * floatBlendOutputScale + noise, fragColor.a);\n         float scaledAlpha = finalColor.a * floatBlendOutputScale;\n         fragAlpha = scaledAlpha + noise;\n         ${a(!g,`fragAlpha = fragAlpha < alphaCutoff ? scaledAlpha : fragAlpha;`)}`)}
      ${a(x&&l&&c,`finalColor.rgb /= finalColor.a;`)}
      ${a(S,`fragColor = finalColor;`)}
      ${a(s,_?`fragEmission = vec4(emissionDimming(premultiplyAlpha(finalColor).rgb, finalColor.a), 0.0);`:`fragEmission = ${a(h,`mix(finalColor.a * getEmissions(emissiveSymbolColor), vec4(0.0), snow);`,`finalColor.a * getEmissions(emissiveSymbolColor);`)}\n            float emissionNoise = ditherNoise(fragEmission);\n            fragEmission.rgb = fragEmission.rgb * floatBlendOutputScale + emissionNoise;\n            fragEmission.a = finalColor.a;\n            `)}
      calculateOcclusionAndOutputHighlight();
      ${a(v,`outputObjectAndLayerIdColor();`)}
    }
  `)}export{O as a,S as c,b as d,A as i,T as l,P as n,D as o,M as r,x as s,I as t,E as u};