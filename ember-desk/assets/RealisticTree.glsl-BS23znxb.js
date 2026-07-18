import{n as e,r as t}from"./Uniform-DbW1Stte.js";import{t as n}from"./ShaderBuilder-CGRMmuSM.js";import{t as r}from"./FloatPassUniform-BgZa4F-S.js";import{t as i}from"./Texture2DPassUniform-BH3IXb0x.js";import{n as a}from"./MaterialUtil-Bi36q1NZ.js";import{m as o,r as s}from"./Emissions.glsl-O9E5T9G1.js";import{r as c}from"./Slice.glsl-CyUIov5k.js";import{t as l}from"./Float3PassUniform-DwdjRl2l.js";import{a as u,o as d,t as f}from"./VisualVariables.glsl-DpOMS-y7.js";import{t as p}from"./Float4PassUniform-BK2Jlamx.js";import{c as m,i as h,s as g,t as _}from"./OutputColorHighlightOLID.glsl-nI0MTdxz.js";import{t as v}from"./MixExternalColor.glsl-Cs7yJYj-.js";import{r as y}from"./VerticalOffset.glsl-Dpl06lns.js";import{t as b}from"./Transform.glsl-iLLevyFN.js";import{t as x}from"./VertexColor.glsl-DtG4gGL2.js";import{c as S,l as C,m as w,o as T,r as E,s as D,t as O,u as k}from"./TextureTransformUV.glsl-WgUowCqH.js";import{a as A,c as j,i as M,n as N,o as P,r as ee,t as F}from"./SnowCover.glsl-BsRHZACt.js";import{i as I,n as L,t as R}from"./ReadShadowMap.glsl-Ca-4EFk-.js";import{i as z,r as B}from"./ScreenSpaceRayMarching.glsl-Bltk7nXU.js";function V(V){let H=new n,{attributes:U,vertex:W,fragment:G,varyings:K}=H,{output:q,offsetBackfaces:J,pbrMode:Y,snowCover:X,spherical:Z}=V,Q=Y===1||Y===2;if(m(W,V),U.add(`position`,`vec3`),W.inputs.add(`position`,()=>`position`),K.add(`vpos`,`vec3`,{invariant:!0}),H.include(f,V),H.include(C,V),H.include(y,V),H.include(O,V),!o(q))return H.include(T,V),H;H.include(E,V),g(H.vertex,V),H.include(w,V),H.include(b),J&&H.include(j),K.add(`vNormalWorld`,`vec3`),K.add(`localvpos`,`vec3`,{invariant:!0}),H.include(s,V),H.include(S,V),H.include(k,V),H.include(x,V),W.include(d),W.include(u),W.uniforms.add(new p(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),K.add(`vcolorExt`,`vec4`),H.include(V.instancedDoublePrecision?R:L,V),W.include(h),W.main.add(t`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${t.int(a.ignore)} && vcolorExt.a < alphaCutoff;
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardTextureCoordinates();
    forwardColorUV();
    forwardEmissiveUV();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${e(J,`offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);`,`basePosition;`)}
  `);let{hasColorTexture:$,hasColorTextureTransform:te}=V;return G.include(A,V),G.include(P,V),H.include(D,V),G.include(c,V),H.include(_,V),g(G,V),z(G),M(G),ee(G),G.uniforms.add(W.uniforms.get(`localOrigin`),W.uniforms.get(`view`),new l(`ambient`,e=>e.ambient),new l(`diffuse`,e=>e.diffuse),new r(`opacity`,e=>e.opacity),new r(`layerOpacity`,e=>e.layerOpacity)),$&&G.uniforms.add(new i(`tex`,e=>e.texture)),H.include(N,V),G.include(I,V),G.include(v),G.include(F,V),B(G),G.main.add(t`
      discardBySlice(vpos);
      vec4 texColor = ${$?`texture(tex, ${te?`colorUV`:`vuv0`})`:` vec4(1.0)`};
      ${e($,`${e(V.textureAlphaPremultiplied,`texColor.rgb /= texColor.a;`)}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${V.hasVertexColors?t`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:t`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${Z?`normalize(vpos + localOrigin)`:`vec3(0.0, 0.0, 1.0)`};

      ${e(X,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${t`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${Q?t`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${e(X,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:t`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${e(X,`, 1.0`)});`),H}var H=Object.freeze(Object.defineProperty({__proto__:null,build:V},Symbol.toStringTag,{value:`Module`}));export{H as n,V as t};