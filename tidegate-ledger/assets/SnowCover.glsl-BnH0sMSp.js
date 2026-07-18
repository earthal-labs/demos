const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SSAOBlur.glsl-C_JiSANG.js","assets/Uniform-DbW1Stte.js","assets/ScreenSpacePass.glsl-D44B-ma7.js","assets/ShaderBuilder-CGRMmuSM.js","assets/Error-DAqfkxrX.js","assets/typedArrayUtil-BMlH2gQr.js","assets/arrayUtils-Drsbwk3M.js","assets/ReadDepth.glsl-CLTK5zoe.js","assets/vec2-CRDTdDt5.js","assets/mathUtils-fmnFRE85.js","assets/common-DhvcAEWc.js","assets/vec2f64-BwQYG_9S.js","assets/Float2BindUniform-D0I--N8s.js","assets/SSAOBlur.glsl-q-Mnhif3.js","assets/Float2DrawUniform-DEClVRpY.js","assets/FloatPassUniform-BgZa4F-S.js","assets/Texture2DPassUniform-BH3IXb0x.js","assets/Texture2DDrawUniform-2kcPCOxd.js","assets/SSAO.glsl-BRIfSmyi.js","assets/Gamma.glsl-CGeucRMX.js","assets/colorUtils-DZZ966ow.js","assets/CameraSpace.glsl-CKENT-VX.js","assets/vec4-B-G2J025.js","assets/vec4f64-BiwnP2yY.js","assets/Float4BindUniform-7ierNxkJ.js","assets/SSAO.glsl-BxJBwxJg.js","assets/FloatBindUniform-DuYdEJ-p.js","assets/Float2PassUniform-Csu8tFSt.js","assets/GlobalIlluminationBlur2.glsl-D68AMQ4u.js","assets/NoParameters-ZDc3QXO4.js","assets/oitResolution.glsl-DK3fgwtq.js","assets/tslib.es6-CR8o2qfQ.js","assets/GlobalIlluminationColorQuantization.glsl-Dve6--_N.js","assets/GlobalIlluminationWeights.glsl-BGBgn-p0.js","assets/GlobalIlluminationBlur.glsl-ChknJ68k.js","assets/ditherNoise.glsl-UOpZ2vbN.js","assets/BooleanBindUniform-tL3xlh7_.js","assets/GlobalIllumination.glsl-BkcxMJkp.js","assets/enums-CsvnPRfA.js","assets/ScreenSpaceRayMarching.glsl-Bltk7nXU.js","assets/Float3BindUniform-pvPYdztI.js","assets/Matrix4BindUniform-B8qaJVmk.js","assets/Texture2DBindUniform-CKLq3hU-.js","assets/GlobalIllumination.glsl-DYA5INar.js","assets/GlobalIlluminationUpscale2.glsl-C6g0yI2a.js","assets/GlobalIlluminationUpscale.glsl-BWq3t0Pq.js"])))=>i.map(i=>d[i]);
import{i as e}from"./tslib.es6-CR8o2qfQ.js";import{r as t}from"./request-DJ6oKtYC.js";import{O as n,k as r}from"./promiseUtils-BakOwM2J.js";import{n as i,t as a}from"./decorators-C4awV8Sp.js";import{n as o}from"./time-BzYz5R50.js";import{c as s,s as c}from"./reactiveUtils-DTBlUWE-.js";import{S as l}from"./mathUtils-fmnFRE85.js";import{E as u}from"./vec2-CRDTdDt5.js";import{a as d,r as f}from"./vec3f64-CkQiQSMN.js";import{r as p}from"./vec3-BD0ipM_y.js";import{o as m}from"./vec2f64-BwQYG_9S.js";import{g as h,n as g}from"./enums-CsvnPRfA.js";import{s as _,t as v}from"./Texture-Bbo1vZZ1.js";import{r as y,t as b}from"./ShaderTechnique-CHy6Qmyf.js";import{n as x,t as S}from"./RenderNode-BAFgCH4T.js";import{n as C,o as w}from"./renderState-BS8_M1m_.js";import{n as T,r as E}from"./Uniform-DbW1Stte.js";import{t as D}from"./NoParameters-ZDc3QXO4.js";import{t as O}from"./Texture2DPassUniform-BH3IXb0x.js";import{t as k}from"./Texture2DDrawUniform-2kcPCOxd.js";import{i as ee,n as te}from"./Emissions.glsl-O9E5T9G1.js";import{i as A,r as ne}from"./oitResolution.glsl-DK3fgwtq.js";import{t as re}from"./Float3PassUniform-DwdjRl2l.js";import{t as j}from"./FloatBindUniform-DuYdEJ-p.js";import{t as ie}from"./PiUtils.glsl-CpyVHJCx.js";import{t as ae}from"./Gamma.glsl-CGeucRMX.js";import{t as M}from"./Texture2DBindUniform-CKLq3hU-.js";import{t as oe}from"./SceneLighting-7Ruwxfg1.js";import{t as N}from"./BooleanBindUniform-tL3xlh7_.js";import{c as P,i as se,o as F,r as ce,s as le}from"./ReadShadowMap.glsl-Ca-4EFk-.js";import{n as ue,t as de}from"./SSAO.glsl-BxJBwxJg.js";import{t as fe}from"./SSAOBlur.glsl-q-Mnhif3.js";import{i as I,n as L,r as R}from"./ScreenSpaceRayMarching.glsl-Bltk7nXU.js";import{a as z,c as B,s as V}from"./GlobalIllumination.glsl-DYA5INar.js";import{n as pe,r as me}from"./GlobalIlluminationBlur.glsl-ChknJ68k.js";import{n as he,t as ge}from"./GlobalIlluminationUpscale.glsl-BWq3t0Pq.js";function _e({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:n,roughnessFactor:r,emissiveTexture:i,emissiveFactor:a,occlusionTexture:o}){return e==null&&t==null&&i==null&&(a==null||p(a,f))&&o==null&&(r==null||r===1)&&(n==null||n===1)}var ve=d(1,1,.5),ye=d(0,.6,.2),be=d(0,1,.2);function xe(e){e.vertex.code.add(E`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Se(e,t){switch(t.output){case 5:case 6:case 7:case 8:e.fragment.code.add(E`float _calculateFragDepth(const in float depth) {
const float slope_scale = 2.0;
const float bias = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + slope_scale * m + bias;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 9:e.fragment.code.add(E`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}var H=class extends b{constructor(){super(...arguments),this.shader=new y(fe,()=>t(()=>import(`./SSAOBlur.glsl-C_JiSANG.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])))}initializePipeline(){return C({colorWrite:w})}};H=e([i(`esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique`)],H);var Ce=`eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM`,we=class extends D{constructor(){super(...arguments),this.projScale=1}},Te=class extends we{constructor(){super(...arguments),this.intensity=1}},Ee=class extends D{},De=class extends Ee{constructor(){super(...arguments),this.blurSize=m()}},U=class extends b{constructor(){super(...arguments),this.shader=new y(de,()=>t(()=>import(`./SSAO.glsl-BRIfSmyi.js`),__vite__mapDeps([18,8,9,10,11,1,2,3,4,5,6,19,20,7,12,21,22,23,24,25,15,16,26,27])))}initializePipeline(){return C({colorWrite:w})}};U=e([i(`esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique`)],U);var W=class extends S{constructor(e){super(e),this.consumes={required:[`normals`]},this.produces=x.AMBIENT_ILLUMINATION,this._enableTime=o(0),this._passParameters=new Te,this._drawParameters=new De}initialize(){let e=Uint8Array.from(atob(Ce),e=>e.charCodeAt(0)),t=new _(32);t.wrapMode=33071,t.pixelFormat=6407,t.wrapMode=10497,t.hasMipmap=!0,this._passParameters.noiseTexture=new v(this.renderingContext,t,e),this.addHandles(c(()=>this.view.stage.renderer.hasAmbientIllumination,()=>this._enableTime=o(0)))}destroy(){this._passParameters.noiseTexture=n(this._passParameters.noiseTexture)}render(e){let t=e.find(({name:e})=>e===`normals`),n=t?.getTexture(),r=t?.getTexture(h);if(!n||!r)return;let i=this.techniques.getCompiled(U),a=this.techniques.getCompiled(H);if(!i||!a)return this._enableTime=o(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=o(performance.now()));let s=this.renderingContext,c=this.view.qualitySettings.fadeDuration,d=this.bindParameters,f=d.camera,p=f.relativeElevation,m=l((P-p)/(P-le),0,1),g=c>0?Math.min(c,performance.now()-this._enableTime)/c:1,_=g*m;this._passParameters.normalTexture=n,this._passParameters.depthTexture=r,this._passParameters.projScale=1/f.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Oe/ue(f)**6*_;let v=f.fullViewport[2],y=f.fullViewport[3],b=this.fboCache.acquire(v,y,`ssao input`,2);s.bindFramebuffer(b.fbo),s.setViewport(0,0,v,y),s.bindTechnique(i,d,this._passParameters,this._drawParameters),s.screen.draw();let S=Math.round(v/2),C=Math.round(y/2),w=this.fboCache.acquire(S,C,`ssao blur`,0);s.bindFramebuffer(w.fbo),this._drawParameters.colorTexture=b.getTexture(),u(this._drawParameters.blurSize,0,2/y),s.bindTechnique(a,d,this._passParameters,this._drawParameters),s.setViewport(0,0,S,C),s.screen.draw(),b.release();let T=this.fboCache.acquire(S,C,x.AMBIENT_ILLUMINATION,0);return s.bindFramebuffer(T.fbo),s.setViewport(0,0,v,y),s.setClearColor(1,1,1,0),s.clear(16384),this._drawParameters.colorTexture=w.getTexture(),u(this._drawParameters.blurSize,2/v,0),s.bindTechnique(a,d,this._passParameters,this._drawParameters),s.setViewport(0,0,S,C),s.screen.draw(),s.setViewport4fv(f.fullViewport),w.release(),g<1&&this.requestRender(2),T}};e([a()],W.prototype,`consumes`,void 0),e([a()],W.prototype,`produces`,void 0),W=e([i(`esri.views.3d.webgl-engine.effects.ssao.SSAO`)],W);var Oe=.5;function G(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new M(`ssaoTex`,e=>e.ssao?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/2),e.code.add(E`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(E`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}var K=class extends b{constructor(){super(...arguments),this.shader=new y(me,()=>t(()=>import(`./GlobalIlluminationBlur2.glsl-D68AMQ4u.js`),__vite__mapDeps([28,11,1,2,29,3,4,5,6,30,31,7,8,9,10,12,21,22,23,24,32,33,34,14,15,16,17,35,36])))}initializePipeline(){return C({colorWrite:w})}};K=e([i(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationBlurTechnique`)],K);var q=class extends b{constructor(){super(...arguments),this.shader=new y(B,()=>t(()=>import(`./GlobalIllumination.glsl-BkcxMJkp.js`),__vite__mapDeps([37,38,1,2,29,3,4,5,6,19,20,21,8,9,10,11,22,23,12,24,39,40,26,41,42,7,43,15,16,32])))}initializePipeline(){return C({colorWrite:w})}};q=e([i(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationTechnique`)],q);var J=class extends ne{constructor(){super(...arguments),this.hasColor=!0,this.hasEmission=!1,this.rayMarchMaxReach=V,this.rayMarchMaxSteps=16,this.useProjectedRayLength=!0,this.clampRayToScreen=!1}};e([A()],J.prototype,`hasColor`,void 0),e([A()],J.prototype,`hasEmission`,void 0);var Y=class extends b{constructor(){super(...arguments),this.shader=new y(ge,()=>t(()=>import(`./GlobalIlluminationUpscale2.glsl-C6g0yI2a.js`),__vite__mapDeps([44,1,2,29,3,4,5,6,7,8,9,10,11,12,21,22,23,24,32,33,45,15,16,17])))}initializePipeline(){return C({colorWrite:w})}};Y=e([i(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationUpscaleTechnique`)],Y);var X=class extends S{constructor(e){super(e),this.consumes={required:[`normals`]},this.produces=x.AMBIENT_ILLUMINATION,this._passParameters=new z,this._drawParameters=new pe,this._drawParametersUpscale=new he,this._maxFrames=256,this._lowQualityResolutionScale=.25,this._configuration=new J,this._globalIllumination=null,this._isGlobalIlluminationUpdate=!1,this._resetBuffer=!1}initialize(){this.addHandles(c(()=>this.view.stage.renderer.hasGlobalIllumination,()=>{this._resetAccumulatedFrames(),this._requestRender()},s))}destroy(){this._globalIllumination=r(this._globalIllumination)}resetAccumulatedFrames(){this._isGlobalIlluminationUpdate||this._resetAccumulatedFrames()}render(e){if(this._passParameters.accumulatedFrames>=this._maxFrames)return this._globalIllumination?.retain(),this._globalIllumination;let t=e.find(({name:e})=>e===`normals`),n=t?.getTexture(),r=t?.getTexture(h),i=this._mode;if(!n||!r)return this._emptyOutput;if(i===0)return this._resetBuffer=!1,this._emptyOutput;if(!this._canRender)return this._resetBuffer=!1,this._requestRender(),this._emptyOutput;let a=this.bindParameters;this._configuration.hasEmission=!!a.reprojection.lastFrameEmission;let o=this.techniques.getCompiled(q,this._configuration),s=this.techniques.getCompiled(K),c=i===1,l=c?this._lowQualityResolutionScale:1,d=c?this.techniques.getCompiled(Y):null;if(!o||!s||c&&!d)return this._requestRender(),this._emptyOutput;let f=this.renderingContext,{camera:p}=a;this._passParameters.normalTexture=n,this._passParameters.depthTexture=r,this._passParameters.projScale=1/p.computeScreenPixelSizeAtDist(1),this._passParameters.scaleGlobalIllumination=l;let{fullWidth:m,fullHeight:_}=p,v=Math.max(1,Math.floor(m*l)),y=Math.max(1,Math.floor(_*l)),b=this.fboCache.acquire(v,y,`global illumination input`).acquireColor(g,0);f.bindFramebuffer(b.fbo),f.setViewport(0,0,v,y),f.bindTechnique(o,a,this._passParameters,this._drawParameters),f.screen.draw();let S=b.obtainAttachment(g),C=Math.max(1,Math.round(v/1)),w=Math.max(1,Math.round(y/1)),T=this.fboCache.acquire(C,w,`global illumination blur horizontal`);f.bindFramebuffer(T.fbo),this._drawParameters.texture=b.getTexture(),this._drawParameters.weightTexture=S.attachment,u(this._drawParameters.blurSize,0,1/y),f.bindTechnique(s,a,this._passParameters,this._drawParameters),f.setViewport(0,0,C,w),f.screen.draw(),b.release();let E=c?`global illumination blur vertical`:x.AMBIENT_ILLUMINATION,D=this.fboCache.acquire(C,w,E);f.bindFramebuffer(D.fbo),f.setViewport(0,0,C,w),f.setClearColor(1,1,1,0),f.clear(16384),this._drawParameters.texture=T.getTexture(),this._drawParameters.weightTexture=S.attachment,u(this._drawParameters.blurSize,1/C,0),f.bindTechnique(s,a,this._passParameters,this._drawParameters),f.setViewport(0,0,C,w),f.screen.draw(),T.release(),D.attachColor(S,g),S.release();let O=D;return d&&(O=this.fboCache.acquire(m,_,x.AMBIENT_ILLUMINATION).acquireColor(36065,0),f.bindFramebuffer(O.fbo),f.setViewport(0,0,m,_),f.setClearColor(1,1,1,0),f.clear(16384),this._drawParametersUpscale.colorTexture=D.getTexture(),this._drawParametersUpscale.weightTexture=D.getTexture(36065),f.bindTechnique(d,a,this._passParameters,this._drawParametersUpscale),f.screen.draw(),D.release()),f.setViewport4fv(p.fullViewport),this._passParameters.temporalSampleFrame=(this._passParameters.temporalSampleFrame+1)%64,++this._passParameters.accumulatedFrames,this._cacheGlobalIllumination(O),this._passParameters.accumulatedFrames<this._maxFrames&&this._requestRender(),O}_requestRender(){this._isGlobalIlluminationUpdate=!0,this.requestRender(1),this._isGlobalIlluminationUpdate=!1}_cacheGlobalIllumination(e){this._globalIllumination!==e&&(this._globalIllumination=r(this._globalIllumination),this._globalIllumination=e,this._globalIllumination.retain())}get _emptyOutput(){let e=this.renderingContext,{fullWidth:t,fullHeight:n}=this.bindParameters.camera,r=this.fboCache.acquire(t,n,x.AMBIENT_ILLUMINATION).acquireColor(g,0);return e.bindFramebuffer(r.fbo),e.setViewport(0,0,t,n),e.clearBuffer(0,[0,0,0,1]),e.clearBuffer(1,[0,0,0,0]),r}get _canRender(){let{reprojection:e,hasEmission:t,globalIllumination:n}=this.bindParameters;return!(!e.lastFrameColor||t&&!e.lastFrameEmission||!e.lastFrameDepth||!n||this._resetBuffer)}get _mode(){let{hasGlobalIlluminationHighQuality:e,hasGlobalIllumination:t}=this.view.stage.renderer;return e?2:+!!t}_resetAccumulatedFrames(){this._passParameters.accumulatedFrames=0,this._globalIllumination=r(this._globalIllumination)}get test(){let e=this;return{passParameters:this._passParameters,configuration:this._configuration,get maxFrames(){return e._maxFrames},set maxFrames(t){e._maxFrames=t},get lowQualityResolutionScale(){return e._lowQualityResolutionScale},set lowQualityResolutionScale(t){e._lowQualityResolutionScale=t},get mode(){return e._mode},restartAccumulation:()=>{this._resetAccumulatedFrames(),this._passParameters.temporalSampleFrame=0,this._resetBuffer=!0,this._requestRender()}}}};e([a()],X.prototype,`consumes`,void 0),e([a()],X.prototype,`produces`,void 0),X=e([i(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIllumination`)],X);function Z(e,t){t.receiveGlobalIllumination?(e.uniforms.add(new N(`hasGlobalIlluminationTexture`,e=>e.globalIllumination!=null),new M(`globalIlluminationTexture`,e=>e.globalIllumination?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/1),e.code.add(E`vec3 readGlobalIlluminationOcclusionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec3(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return vec3(texelFetch(globalIlluminationTexture, texel, 0).a);
}
vec3 readGlobalIlluminationOcclusion() {
return 1.0 - readGlobalIlluminationOcclusionInverse();
}
vec4 readGlobalIlluminationEmissionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec4(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return 1.0 - vec4(texelFetch(globalIlluminationTexture, texel, 0).rgb, 0.0);
}
vec4 readGlobalIlluminationEmission() {
return max((1.0 - readGlobalIlluminationEmissionInverse() - 0.01) / 0.99, 0.0);
}`)):e.code.add(E`vec3 readGlobalIlluminationOcclusionInverse() { return vec3(1.0); }
vec3 readGlobalIlluminationOcclusion() { return vec3(0.0); }
vec4 readGlobalIlluminationEmissionInverse() { return vec4(1.0); }
vec4 readGlobalIlluminationEmission() { return vec4(0.0); }`)}function ke(e){e.code.add(E`float mapChannel(float x, vec2 p) {
if((x < p.x) && (p.x == 0.0) || !(x < p.x) && (p.x == 1.0)) {
return 0.0;
}
float result = (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
return max(result, 0.0);
}`),e.code.add(E`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Q(e){e.constants.add(`ambientBoostFactor`,`float`,oe)}function $(e){e.uniforms.add(new j(`lightingGlobalFactor`,e=>e.lighting.globalFactor))}function Ae(e,t){let{pbrMode:n,spherical:r,hasColorTexture:i,receiveGlobalIllumination:a}=t;e.include(ae),e.include(Z,t),e.include(G,t),n!==0&&e.include(se,t),e.include(F,t),e.include(ie),e.include(ce,t);let o=!(n===2&&!i);o&&e.include(ke),Q(e),$(e),I(e),e.code.add(E`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${r?E`normalize(vPosWorld)`:E`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),R(e),e.code.add(E`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`);let s=a?`globalIlluminationOcclusion`:`ssao`,c=a?.75:1,l=a?1.5:1;switch(n){case 0:case 4:case 3:e.include(L),e.code.add(E`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld) * (1.0 - ssao);
vec3 albedoLinear = linearizeGamma(albedo);
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return delinearizeGamma(outColor);
}`);break;case 1:case 2:{let n=a?.35:.2;e.code.add(E`
        const float fillLightIntensity = 0.25;
        const float horizonLightDiffusion = 0.4;
        const float additionalAmbientIrradianceFactor = 0.02;
        const float groundReflectance = ${E.float(n)};

        vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                      vec3 viewDirection, vec3 upDirection, vec3 mrr, float additionalAmbientIrradiance) {
          PBRShadingInfo inputs;
          calculatePBRInputs(inputs, normal, viewDirection, upDirection, albedo, mrr);

          ${T(a,E`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}
      `),t.useFillLights?e.uniforms.add(new N(`hasFillLights`,e=>e.enableFillLights)):e.constants.add(`hasFillLights`,`bool`,!1),e.code.add(E`
        vec3 ambientDir = vec3(5.0 * upDirection[1] - upDirection[0] * upDirection[2], - 5.0 * upDirection[0] - upDirection[2] * upDirection[1], upDirection[1] * upDirection[1] + upDirection[0] * upDirection[0]);
        ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent = ${E.float(c)} * inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
        // calculate ambient irradiance for localView and additionalLight for globalView
        vec3 ambientLightIrradianceComponent = ${E.float(l)} * calculateAmbientIrradiance(normal) * (1.0 - ${s}) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = groundReflectance * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),e.uniforms.add(new j(`lightingSpecularStrength`,e=>e.lighting.mainLight.specularStrength),new j(`lightingEnvironmentStrength`,e=>e.lighting.mainLight.environmentStrength)).code.add(E`
        vec3 horizonRingDir = inputs.RdotUP * upDirection - inputs.reflectedView;
        vec3 horizonRingH = normalize(horizonRingDir - viewDirection);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;

        // calculateAmbientRadiance for localView and additionalLight for global view
        vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance() * (1.0 - ${s}) + additionalLight;
        float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotUP + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radiance by the groundReflectance
        inputs.groundRadianceToSurface = 0.5 * groundReflectance * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Calculate average ambient radiance - This is used in the gamut mapping process to determine the black level for compression
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + groundReflectance);
      `),e.code.add(E`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;

        ${T(a,E`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

      ${o?E`vec3 adjustedOutColorLinear = blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance);`:E`vec3 adjustedOutColorLinear = max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance);`}

        return delinearizeGamma(adjustedOutColorLinear);
      }
    `);break}case 5:case 6:{let t=a?.35:.5,n=a?.75:1,r=a?1.5:1;I(e),R(e),e.code.add(E`
      const float roughnessTerrain = 0.5;
      const float specularityTerrain = ${E.float(t)};

      vec3 evaluatePBRSimplifiedLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDirection, vec3 upDirection) {
        PBRShadingInfo inputs;
        calculateSimplifiedInputs(inputs, normal, viewDirection, upDirection, albedo);

        ${T(a,E`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}

        vec3 mainLightIrradianceComponent = ${E.float(n)} * (1.0 - shadow) * inputs.NdotL * mainLightIntensity;
        vec3 ambientLightIrradianceComponent = ${E.float(r)} * calculateAmbientIrradiance(normal) * (1.0 - ${s}) + additionalLight;
        vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;

        vec3 indirectDiffuse = ((1.0 - inputs.NdotUP) * mainLightIrradianceComponent + (1.0 + inputs.NdotUP ) * ambientSky) * 0.5;
        vec3 outDiffColor = inputs.albedoLinear * (1.0 - inputs.f0) * indirectDiffuse / PI;

        vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, roughnessTerrain) * mainLightIntensity;
        vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, inputs.NdotV);
        vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
        vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;

        vec3 outColorLinear = outDiffColor + specularComponent;

        ${T(a,E`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

        return delinearizeGamma(outColorLinear);
      }
      `);break}}}function je(e,t){let n=t.pbrMode,r=e.fragment;if(n!==2&&n!==0&&n!==1)return void r.code.add(E`void applyPBRFactors() {}`);if(n===0)return void r.code.add(E`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(n===2)return void r.code.add(E`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);let{hasMetallicRoughnessTexture:i,hasMetallicRoughnessTextureTransform:a,hasOcclusionTexture:o,hasOcclusionTextureTransform:s,bindType:c}=t;(i||o)&&e.include(te,t),r.code.add(E`vec3 mrr;
float occlusion;`),i&&r.uniforms.add(c===1?new O(`texMetallicRoughness`,e=>e.textureMetallicRoughness):new k(`texMetallicRoughness`,e=>e.textureMetallicRoughness)),o&&r.uniforms.add(c===1?new O(`texOcclusion`,e=>e.textureOcclusion):new k(`texOcclusion`,e=>e.textureOcclusion)),r.uniforms.add(c===1?new re(`mrrFactors`,e=>e.mrrFactors):new ee(`mrrFactors`,e=>e.mrrFactors)),r.code.add(E`
    ${T(i,E`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${T(o,`void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }`)}

    float getBakedOcclusion() {
      return ${o?`occlusion`:`1.0`};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${T(i,`applyMetallicRoughness(${a?`metallicRoughnessUV`:`vuv0`});`)}
      ${T(o,`applyOcclusion(${s?`occlusionUV`:`vuv0`});`)}
    }
  `)}function Me(e,t){t.snowCover&&(e.uniforms.add(new j(`snowCover`,e=>e.snowCover)).code.add(E`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.code.add(E`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}export{Ae as a,xe as c,_e as d,ye as f,Q as i,be as l,je as n,G as o,$ as r,Se as s,Me as t,ve as u};