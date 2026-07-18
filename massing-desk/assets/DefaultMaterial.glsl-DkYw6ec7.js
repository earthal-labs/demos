import{t as e}from"./AlphaCutoff-Dj4-LvkI.js";import{n as t}from"./MaterialUtil-N74ob69v.js";import{f as n}from"./ShaderOutput-BpkC-wrv.js";import{t as r}from"./Float3PassUniform-YEiGS05C.js";import{n as i,t as a}from"./glsl-D85RBwKC.js";import{n as o,t as s}from"./View.glsl-Ca9NFacb.js";import{t as c}from"./Float4PassUniform-Cu2daSgY.js";import{r as l}from"./VerticalOffset.glsl-B2oq4U20.js";import{t as u}from"./FloatPassUniform-DeUP8HjM.js";import{i as d}from"./Slice.glsl-BqTbVez5.js";import{a as f,i as ee,t as te}from"./VisualVariables.glsl-CdKm505L.js";import{t as ne}from"./Texture2DPassUniform-CiCHIiok.js";import{t as re}from"./ShaderBuilder-DEBj6tn_.js";import{i as ie}from"./Emissions.glsl-COdKMm_s.js";import{t as ae}from"./OutputColorHighlightOLID.glsl-BjIT55Ov.js";import{t as oe}from"./NormalAttribute.glsl-C7jpaUvF.js";import{a as se,t as p}from"./DiscardOrAdjustAlpha.glsl-C_6iZkfi.js";import{t as m}from"./Offset.glsl-DlxeJxhu.js";import{t as h}from"./Transform.glsl-ByRGlEcg.js";import{a as g,c as _,i as v,l as y,n as b,o as x,r as S,s as C,t as w}from"./TextureTransformUV.glsl-C4p6nScD.js";import{t as T}from"./VertexColor.glsl-DrV8C2l2.js";import{n as E}from"./ComputeNormalTexture.glsl-BsXBjjyq.js";import{t as D}from"./PhysicallyBasedRendering.glsl-BFHZucno.js";import{a as O,n as k,r as A,t as j}from"./EvaluateSceneLighting.glsl-BEUwzYTR.js";import{n as M}from"./MainLighting.glsl-BzpgU6pB.js";import{t as N}from"./Normals.glsl-D2dK_E0k.js";import{n as P,t as F}from"./SnowCover.glsl-Dauiqufq.js";import{n as ce,t as I}from"./ReadShadowMap.glsl-oFMVskK0.js";import{t as L}from"./MixExternalColor.glsl-cTOJOQI5.js";function R(R){let z=new re,{attributes:B,vertex:V,fragment:H,varyings:U}=z,{output:W,normalType:G,offsetBackfaces:K,spherical:le,snowCover:q,pbrMode:J,textureAlphaPremultiplied:ue,instancedDoublePrecision:Y,hasVertexColors:X,hasVertexTangents:Z,hasColorTexture:Q,hasNormalTexture:de,hasNormalTextureTransform:fe,hasColorTextureTransform:pe}=R;if(o(V,R),B.add(`position`,`vec3`),V.inputs.add(`position`,()=>`position`),U.add(`vpos`,`vec3`,{invariant:!0}),z.include(te,R),z.include(_,R),z.include(l,R),z.include(w,R),!n(W))return z.include(x,R),z;z.include(v,R),z.include(S,R),z.include(b,R),z.include(g,R),s(V,R),z.include(oe,R),z.include(h);let $=G===0||G===1;return $&&K&&z.include(m),z.include(E,R),z.include(se,R),z.include(y,R),U.add(`vPositionLocal`,`vec3`),z.include(ie,R),z.include(C,R),z.include(T,R),V.uniforms.add(new c(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),U.add(`vcolorExt`,`vec4`),V.include(f),V.include(ee),z.include(Y?I:ce,R),V.main.add(i`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${a($,`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`)}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${a(Z,`vTangent = dpTransformVertexTangent(tangent);`)}
    gl_Position = transformPosition(proj, view, vpos);
    ${a($&&K,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);`)}

    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${i.int(t.ignore)} && vcolorExt.a < ${i.float(e)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),H.include(A,R),H.include(O,R),z.include(p,R),H.include(d,R),z.include(ae,R),s(H,R),H.uniforms.add(V.uniforms.get(`localOrigin`),new r(`ambient`,e=>e.ambient),new r(`diffuse`,e=>e.diffuse),new u(`opacity`,e=>e.opacity),new u(`layerOpacity`,e=>e.layerOpacity)),Q&&H.uniforms.add(new ne(`tex`,e=>e.texture)),z.include(P,R),H.include(D,R),H.include(L),z.include(N,R),H.include(F,R),k(H),j(H),M(H),H.main.add(i`
    discardBySlice(vpos);
    ${Q?i`
            vec4 texColor = texture(tex, ${pe?`colorUV`:`vuv0`});
            ${a(ue,`texColor.rgb /= texColor.a;`)}
            discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${G===2?i`vec3 normal = screenDerivativeNormal(vPositionLocal);`:i`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${a(X,`vColor.rgb *`)} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${a(X,`vColor.a * `)} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${de?`mat3 tangentSpace = computeTangentSpace(${Z?`normal`:`normal, vpos, vuv0`});\n           vec3 shadingNormal = computeTextureNormal(tangentSpace, ${fe?`normalUV`:`vuv0`});`:`vec3 shadingNormal = normal;`}
    vec3 normalGround = ${le?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

    ${a(q,i`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${J===1||J===2?i`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${a(q,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${a(q,`, snow`)});
  `),z}var z=Object.freeze(Object.defineProperty({__proto__:null,build:R},Symbol.toStringTag,{value:`Module`}));export{R as n,z as t};