import{m as e}from"./mathUtils-fmnFRE85.js";import{E as t}from"./vec2-CRDTdDt5.js";import{s as n}from"./vec3f64-CkQiQSMN.js";import{A as r,S as i,b as a,f as o,k as s,u as c,v as l,y as u}from"./vec3-BD0ipM_y.js";import{o as d}from"./vec2f64-BwQYG_9S.js";import{g as f}from"./vec4-B-G2J025.js";import{i as p}from"./vec4f64-BiwnP2yY.js";import{b as m,p as h}from"./plane-DFUA7X4q.js";import{t as g}from"./lineSegment-eLNWuTed.js";import{r as _}from"./Uniform-DbW1Stte.js";import{t as v}from"./ScreenSpacePass.glsl-D44B-ma7.js";import{t as y}from"./ShaderBuilder-CGRMmuSM.js";import{t as b}from"./FloatPassUniform-BgZa4F-S.js";import{t as x}from"./Float3PassUniform-DwdjRl2l.js";import{t as S}from"./Float4PassUniform-BK2Jlamx.js";import{t as C}from"./Float3BindUniform-pvPYdztI.js";import{t as w}from"./FloatBindUniform-DuYdEJ-p.js";import{t as T}from"./Float2PassUniform-Csu8tFSt.js";import{t as E}from"./Laserline.glsl-CTA4tCSq.js";var D=e(6);function O(e){let t=new y;t.include(v),t.include(E,e);let n=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(n.uniforms.add(new b(`maxPixelDistance`,(t,n)=>e.heightManifoldEnabled?2*n.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*n.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin))),n.code.add(_`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){let e=(e,t,n)=>o(e,t.heightManifoldTarget,n.camera.viewMatrix),t=(e,t)=>o(e,[0,0,0],t.camera.viewMatrix);n.uniforms.add(new S(`heightManifoldOrigin`,(n,r)=>(e(I,n,r),t(z,r),a(z,z,I),l(L,z),L[3]=u(z),L)),new C(`globalOrigin`,e=>t(I,e)),new b(`cosSphericalAngleThreshold`,(e,t)=>1-Math.max(2,r(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/u(e.heightManifoldTarget))),n.code.add(_`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else n.code.add(_`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(n.uniforms.add(new b(`maxPixelDistance`,(e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget))),n.code.add(_`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&n.uniforms.add(new w(`perScreenPixelRatio`,e=>e.camera.perScreenPixelRatio)).code.add(_`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&n.code.add(_`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),n.main.add(_`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),e.heightManifoldEnabled){n.uniforms.add(new T(`angleCutoff`,e=>k(e)),new S(`heightPlane`,(e,t)=>P(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,I),t.camera.viewMatrix)));let t=e.spherical?_`normalize(globalOrigin - pos)`:_`heightPlane.xyz`;n.main.add(_`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${t})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return e.pointDistanceEnabled&&(n.uniforms.add(new T(`angleCutoff`,e=>k(e)),new S(`pointDistanceSphere`,(e,t)=>A(e,t))),n.main.add(_`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),e.lineVerticalPlaneEnabled&&(n.uniforms.add(new T(`angleCutoff`,e=>k(e)),new S(`lineVerticalPlane`,(e,t)=>j(e,t)),new x(`lineVerticalStart`,(e,t)=>M(e,t)),new x(`lineVerticalEnd`,(e,t)=>N(e,t))),n.main.add(_`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),e.intersectsLineEnabled&&(n.uniforms.add(new T(`angleCutoff`,e=>k(e)),new x(`intersectsLineStart`,(e,t)=>o(I,e.lineStartWorld,t.camera.viewMatrix)),new x(`intersectsLineEnd`,(e,t)=>o(I,e.lineEndWorld,t.camera.viewMatrix)),new x(`intersectsLineDirection`,(e,t)=>(s(L,e.intersectsLineSegment.vector),L[3]=0,l(I,f(L,L,t.camera.viewMatrix)))),new b(`intersectsLineRadius`,e=>e.intersectsLineRadius)),n.main.add(_`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),n.main.add(_`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),t}function k(n){return t(F,Math.cos(n.angleCutoff),Math.cos(Math.max(0,n.angleCutoff-e(2))))}function A(e,t){return o(H,e.pointDistanceOrigin,t.camera.viewMatrix),H[3]=r(e.pointDistanceOrigin,e.pointDistanceTarget),H}function j(e,t){let n=g(e.lineVerticalPlaneSegment,.5,I),r=c(I,e.renderCoordsHelper.worldUpAtPosition(n,R),l(z,e.lineVerticalPlaneSegment.vector));return l(r,r),P(e.lineVerticalPlaneSegment.origin,r,t.camera.viewMatrix)}function M(e,t){let n=s(I,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(n,0),o(n,n,t.camera.viewMatrix)}function N(e,t){let n=i(I,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(n,0),o(n,n,t.camera.viewMatrix)}function P(e,t,n){return o(B,e,n),s(L,t),L[3]=0,f(L,L,n),h(B,L,V)}var F=d(),I=n(),L=p(),R=n(),z=n(),B=n(),V=m(),H=p(),U=Object.freeze(Object.defineProperty({__proto__:null,build:O,defaultAngleCutoff:D},Symbol.toStringTag,{value:`Module`}));export{U as n,O as r,D as t};