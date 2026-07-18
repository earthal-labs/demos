const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FocusAreaColor.glsl-D1tM13cf.js","assets/signal-DfK_iP7G.js","assets/Error-DAqfkxrX.js","assets/typedArrayUtil-BMlH2gQr.js","assets/arrayUtils-Drsbwk3M.js","assets/tracking-Bjv3Cman.js","assets/handleUtils-Coa78TkJ.js","assets/SimpleObservable-lU6onAvU.js","assets/ObservableBase-tBewJuL0.js","assets/Uniform-DbW1Stte.js","assets/ScreenSpacePass.glsl-D44B-ma7.js","assets/NoParameters-ZDc3QXO4.js","assets/ShaderBuilder-CGRMmuSM.js","assets/FocusAreaColor.glsl-_knRUrDZ.js","assets/IntegerPassUniform-CDHAMczN.js","assets/FloatPassUniform-BgZa4F-S.js","assets/Texture2DPassUniform-BH3IXb0x.js"])))=>i.map(i=>d[i]);
import{i as e}from"./tslib.es6-CR8o2qfQ.js";import{r as t}from"./request-BSbjSivg.js";import{n,t as r}from"./decorators-Ce-40PUN.js";import{s as i}from"./reactiveUtils-DMf28VI0.js";import{C as a,E as o}from"./vec2-CRDTdDt5.js";import{o as s}from"./vec2f64-BwQYG_9S.js";import{g as c}from"./enums-CsvnPRfA.js";import{t as l}from"./vec4f64-BiwnP2yY.js";import{r as u,t as d}from"./ShaderTechnique-DlSiWdyY.js";import{n as f,t as p}from"./RenderNode-DPEczZ_a.js";import{n as m,o as h}from"./renderState-BS8_M1m_.js";import{n as g,r as _}from"./Uniform-DbW1Stte.js";import{t as v}from"./IntegerPassUniform-CDHAMczN.js";import{t as y}from"./ShaderBuilder-CGRMmuSM.js";import{t as b}from"./FloatPassUniform-BgZa4F-S.js";import{t as x}from"./Texture2DPassUniform-BH3IXb0x.js";import{m as S}from"./Emissions.glsl-O9E5T9G1.js";import{n as C}from"./Slice.glsl-CyUIov5k.js";import{t as w}from"./ObjectAndLayerIdColor.glsl-KoN2h-A7.js";import{t as T}from"./VisualVariables.glsl-CrPIwUVO.js";import{t as E}from"./Float4PassUniform-BK2Jlamx.js";import{n as D,r as O,t as ee}from"./ScreenSizePerspective.glsl-Drif62J0.js";import{i as k,n as A,o as j,t as M,u as N}from"./OutputColorHighlightOLID.glsl-nI0MTdxz.js";import{t as P}from"./PositionOutsideClipSpace-Cm9t_Ovg.js";import{t as F}from"./Float4BindUniform-7ierNxkJ.js";import{t as I}from"./Float2PassUniform-Csu8tFSt.js";import{t as L}from"./Texture2DBindUniform-CKLq3hU-.js";import{t as R}from"./ReadDepth.glsl-CLTK5zoe.js";import{n as z,t as B}from"./AlignPixel.glsl-CllME4qN.js";import{r as V,t as H}from"./FocusAreaColor.glsl-_knRUrDZ.js";var U=class extends d{constructor(){super(...arguments),this.shader=new u(V,()=>t(()=>import(`./FocusAreaColor.glsl-D1tM13cf.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))),this.ignoreUnused=!0}initializePipeline(){return m({colorWrite:h})}};U=e([n(`esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorTechnique`)],U);var W=class extends p{constructor(e){super({...e,view:e.focusAreasView.view}),this.consumes={required:[f.FOCUSAREA_COLOR,f.FOCUSAREA]},this.produces=f.FOCUSAREA_COLOR,this._fadeDirection=0,this._passParameters=new H}fadeOut(e){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles(i(()=>this._passParameters.fadeFactor.value,t=>{t===0&&(this.removeAllHandles(),e())})),this.requestRender(2)}render(e){let t=e.find(({name:e})=>e===this.produces),n=this.techniques.getCompiled(U);if(!n)return this.requestRender(1),t;let r=this.focusAreasView.style,i=this.bindParameters,a=i.camera,o=a.fullViewport[2],s=a.fullViewport[3];this._startTime??=this.view.stage?.renderer.renderContext.time;let l=this.view.qualitySettings.fadeDuration,u=l>0?Math.min(l,this.view.stage?.renderer.renderContext.time-this._startTime)/l:1,d=e.find(({name:e})=>e===f.FOCUSAREA),p=this.fboCache.acquire(o,s,this.produces),m=this.renderingContext;return m.bindFramebuffer(p.fbo),this._passParameters.color=t.getTexture(),this._passParameters.focusArea=d.getTexture(),this._passParameters.effect=G[r],this._passParameters.fadeFactor.value=this._fadeDirection===0?u:1-u,m.bindTechnique(n,i,this._passParameters),m.screen.draw(),p.attachDepth(t.getAttachment(c)),u<1&&this.requestRender(2),p}};e([r()],W.prototype,`consumes`,void 0),e([r()],W.prototype,`produces`,void 0),e([r({constructOnly:!0})],W.prototype,`focusAreasView`,void 0),W=e([n(`esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorNode`)],W);var G={bright:0,dark:1},K=e=>e?G[e]:0;function q(e){let t=new y;t.include(z,e),t.vertex.include(C,e);let{output:n,hasOcclusionTexture:r,signedDistanceFieldEnabled:i,pixelSnappingEnabled:a,hasEmission:s,hasScreenSizePerspective:c,debugDrawLabelBorder:u,hasVVSize:d,hasVVColor:f,hasRotation:p,occludedFragmentFade:m,sampleSignedDistanceFieldTexelCenter:h,hasVertexColor:V,hasVertexSize:H,hasVertexRotation:U,hasVertexUVi:W}=e;t.include(D),t.include(T,e),t.include(w,e),t.include(M,e);let{vertex:G,fragment:q}=t;q.include(j),q.code.add(_`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${_.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),t.varyings.add(`vcolor`,`vec4`),t.varyings.add(`vtc`,`vec2`),t.varyings.add(`vsize`,`vec2`);let Z=n===10;G.uniforms.add(new F(`viewport`,e=>e.camera.fullViewport),new I(`screenOffset`,(e,t)=>o(X,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio)),new I(`anchorPosition`,e=>Y(e)),new E(`materialColor`,({color:e})=>e),new b(`materialRotation`,e=>e.rotation),new I(`materialSize`,e=>e.size),new x(`tex`,e=>e.texture)),N(G),i&&(G.uniforms.add(new E(`outlineColor`,e=>e.outlineColor)),q.uniforms.add(new E(`outlineColor`,e=>J(e)?e.outlineColor:l),new b(`outlineSize`,e=>J(e)?e.outlineSize:0))),a&&G.include(B),c&&(O(G),ee(G)),u&&t.varyings.add(`debugBorderCoords`,`vec4`),t.attributes.add(`uv0`,`vec2`),W&&t.attributes.add(`uvi`,`vec4`),V&&t.attributes.add(`color`,`vec4`),H&&t.attributes.add(`size`,`vec2`),U&&t.attributes.add(`rotation`,`float`),(d||f)&&t.attributes.add(`featureAttribute`,`vec4`),G.main.add(_`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${P};
      return;
    }

    vec2 vertexSize = materialSize${g(H,` * size`)};
    vec2 inputSize;
    ${g(c,_`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,_`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${g(d,_`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);let Q=_`
  ${g(W,_`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,_`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${g(p,_`
        float angle = radians(materialRotation${g(U,` + rotation`)});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,ne=a?i?_`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:_`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:_`posProj += quadOffset;`;G.include(k),G.main.add(_`
    ${Q}
    ${f?`vcolor = interpolateVVColor(featureAttribute.y) * materialColor;`:V?`vcolor = color * materialColor;`:`vcolor = materialColor;`}

    ${g(n===11,_`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${g(i,`alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${ne}
      gl_Position = posProj;
    }

    vtc = uv;

    ${g(u,_`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);let $=S(n)&&e.hasFocusAreaStyle&&!e.draped;switch(q.uniforms.add(new x(`tex`,e=>e.texture)),$&&q.uniforms.add(new v(`focusAreaStyle`,e=>K(e.focusAreaStyle))),m&&!Z&&(q.include(R),q.uniforms.add(new L(`depthMap`,e=>e.mainDepth),new b(`occludedOpacity`,e=>e.occludedFragmentOpacity?.value??1))),r&&q.uniforms.add(new L(`texOcclusion`,e=>e.hudOcclusion?.attachment)),u?q.main.add(`
        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));
        // don't discard fragments on debug border
        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;
      `):q.main.add(`float textureAlphaCutoff = alphaCutoff;`),q.main.add(`vec2 samplePos = vtc;`),h&&q.main.add(_`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),i?q.main.add(_`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < textureAlphaCutoff ||
          fillPixelColor.a + outlinePixelColor.a < alphaCutoff
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${g(!Z,_`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${g(!Z,_`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):q.main.add(_`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${g(!Z,_`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),m&&!Z&&q.main.add(_`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${_.float(1-te)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),r&&q.main.add(`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`),!Z&&u&&q.main.add(`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`),n===2&&q.main.add(_`if (fragColor.a < alphaCutoff) {
discard;
}`),$&&q.main.add(_`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),S(n)&&s&&q.main.add(`fragEmission = vec4(0.0);`),n){case 1:q.main.add(`
        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);
        fragAlpha = fragColor.a * floatBlendOutputScale;
      `);break;case 2:q.main.add(`fragColor.rgb /= fragColor.a;`);break;case 11:q.main.add(`outputObjectAndLayerIdColor();`);break;case 10:t.include(A,e),q.main.add(`outputHighlight(false);`)}return t}function J(e){return e.outlineColor[3]>0&&e.outlineSize>0}function Y(e){return e.textureIsSignedDistanceField?Z(e.anchorPosition,e.distanceFieldBoundingBox,X):a(X,e.anchorPosition),X}var X=s();function Z(e,t,n){o(n,e[0]*(t[2]-t[0])+t[0],e[1]*(t[3]-t[1])+t[1])}var te=.08,Q=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:Y,build:q},Symbol.toStringTag,{value:`Module`}));export{Y as n,Q as r,q as t};