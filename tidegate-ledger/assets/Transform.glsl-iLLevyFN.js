import{t as e}from"./mat3f64-0nIg8LsN.js";import{s as t}from"./vec3f64-CkQiQSMN.js";import{n,r}from"./Uniform-DbW1Stte.js";import{t as i}from"./NoParameters-ZDc3QXO4.js";import{t as a}from"./FloatBindUniform-DuYdEJ-p.js";import{t as o}from"./Float2BindUniform-D0I--N8s.js";function s(e){e.varyings.add(`linearDepth`,`float`,{invariant:!0})}function c(e,t){t&&s(e),e.vertex.code.add(r`
    void forwardLinearDepth(float _linearDepth) { ${n(t,`linearDepth = _linearDepth;`)} }
  `)}function l(e){e.uniforms.add(new a(`dpDummy`,()=>1)).code.add(r`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}var u=class extends i{constructor(){super(...arguments),this.transformWorldFromViewTH=t(),this.transformWorldFromViewTL=t(),this.transformViewFromCameraRelativeRS=e()}},d=class extends i{constructor(){super(...arguments),this.transformWorldFromModelRS=e(),this.transformWorldFromModelTH=t(),this.transformWorldFromModelTL=t(),this.transformationDrawId=0}};function f(e){e.vertex.uniforms.add(new o(`nearFar`,e=>e.camera.nearFar))}function p(e){e.vertex.code.add(r`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function m(e){p(e),e.vertex.code.add(r`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(r`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}export{l as a,u as i,f as n,c as o,d as r,m as t};