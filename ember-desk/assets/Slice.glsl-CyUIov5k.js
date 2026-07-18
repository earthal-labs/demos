import{i as e}from"./tslib.es6-CR8o2qfQ.js";import{r as t,s as n}from"./vec3f64-CkQiQSMN.js";import{x as r}from"./mat4-cuGiot_V.js";import{M as i,S as a,b as o,f as s}from"./vec3-BD0ipM_y.js";import{t as c}from"./mat4f64-E_FXCKxO.js";import{r as l}from"./Uniform-DbW1Stte.js";import"./NoParameters-ZDc3QXO4.js";import{i as u}from"./Emissions.glsl-O9E5T9G1.js";import{i as d,r as f}from"./oitResolution.glsl-DK3fgwtq.js";var p=class extends f{constructor(){super(...arguments),this.output=0,this.hasEmission=!1,this.useFloatBlend=!0}};e([d({count:12})],p.prototype,`output`,void 0),e([d()],p.prototype,`hasEmission`,void 0),e([d()],p.prototype,`useFloatBlend`,void 0);var m=class extends p{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}},h=class extends m{constructor(){super(...arguments),this.hasSlicePlane=!1,this.hasSliceTranslatedView=!1}};e([d()],h.prototype,`hasSlicePlane`,void 0);function g(e,t){b(e,t,...x(t))}function _(e,t){y(e,t,...x(t))}var v=l`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool rejectBySlice(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}`;function y(e,t,...n){t.hasSlicePlane?(e.uniforms.add(...n),e.code.add(v)):e.code.add(`bool rejectBySlice(vec3 pos) { return false; }`)}function b(e,t,...n){e.constants.add(`groundSliceOpacity`,`float`,.2),y(e,t,...n),t.hasSlicePlane?e.code.add(`
    void discardBySlice(vec3 pos) {
      if (rejectBySlice(pos)) {
        discard;
      }
    }

    vec4 applySliceOutline(vec4 color, vec3 pos) {
      SliceFactors factors = calculateSliceFactors(pos);

      factors.front /= 2.0 * fwidth(factors.front);
      factors.side0 /= 2.0 * fwidth(factors.side0);
      factors.side1 /= 2.0 * fwidth(factors.side1);
      factors.side2 /= 2.0 * fwidth(factors.side2);
      factors.side3 /= 2.0 * fwidth(factors.side3);

      // return after calling fwidth, to avoid aliasing caused by discontinuities in the input to fwidth
      if (sliceByFactors(factors)) {
        return color;
      }

      float outlineFactor = (1.0 - step(0.5, factors.front))
        * (1.0 - step(0.5, factors.side0))
        * (1.0 - step(0.5, factors.side1))
        * (1.0 - step(0.5, factors.side2))
        * (1.0 - step(0.5, factors.side3));

      return mix(color, vec4(vec3(0.0), color.a), outlineFactor * 0.3);
    }

    vec4 applySlice(vec4 color, vec3 pos) {
      return sliceEnabled() ? applySliceOutline(color, pos) : color;
    }
  `):e.code.add(l`void discardBySlice(vec3 pos) { }
vec4 applySlice(vec4 color, vec3 pos) { return color; }`)}function x(e){return[new u(`slicePlaneOrigin`,(t,n)=>T(e,t,n)),new u(`slicePlaneBasis1`,(t,n)=>E(e,t,n,n.slicePlane?.basis1)),new u(`slicePlaneBasis2`,(t,n)=>E(e,t,n,n.slicePlane?.basis2))]}function S(e,t,n){return e.instancedDoublePrecision?i(D,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function C(e,t){return e==null?t.origin:o(O,t.origin,e)}function w(e,t,n){return e.hasSliceTranslatedView?t==null?n.camera.viewMatrix:r(A,n.camera.viewMatrix,t):null}function T(e,n,r){if(r.slicePlane==null)return t;let i=S(e,n,r),a=C(i,r.slicePlane),o=w(e,i,r);return o==null?a:s(O,a,o)}function E(e,n,r,i){if(i==null||r.slicePlane==null)return t;let c=S(e,n,r),l=C(c,r.slicePlane),u=w(e,c,r);return u==null?i:(a(k,i,l),s(O,l,u),s(k,k,u),o(k,k,O))}var D=n(),O=n(),k=n(),A=c();export{_ as n,g as r,h as t};