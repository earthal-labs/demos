import{r as e}from"./mat3f64-0nIg8LsN.js";import{c as t}from"./vec2f64-BwQYG_9S.js";import{n,r}from"./Uniform-DbW1Stte.js";import{t as i}from"./ShaderBuilder-CGRMmuSM.js";import{t as a}from"./Float2DrawUniform-DEClVRpY.js";import{t as o}from"./FloatPassUniform-BgZa4F-S.js";import{t as s}from"./Texture2DPassUniform-BH3IXb0x.js";import{t as c}from"./Texture2DDrawUniform-2kcPCOxd.js";import{n as l}from"./MaterialUtil-Bi36q1NZ.js";import{m as u,n as d,r as f}from"./Emissions.glsl-O9E5T9G1.js";import{r as p}from"./Slice.glsl-CyUIov5k.js";import{t as m}from"./Float3PassUniform-DwdjRl2l.js";import{a as h,n as g,o as _,t as ee}from"./VisualVariables.glsl-DeahBtF9.js";import{t as te}from"./Float4PassUniform-BK2Jlamx.js";import{a as v,c as ne,s as y,t as re}from"./OutputColorHighlightOLID.glsl-nI0MTdxz.js";import{t as ie}from"./MixExternalColor.glsl-Cs7yJYj-.js";import{t as b}from"./Float2PassUniform-Csu8tFSt.js";import{r as ae}from"./VerticalOffset.glsl-Dc-kM0Ty.js";import{t as oe}from"./Transform.glsl-iLLevyFN.js";import{t as se}from"./VertexColor.glsl-DtG4gGL2.js";import{a as x,c as S,i as C,l as w,m as T,n as E,o as D,p as O,r as k,s as A,t as j,u as M}from"./TextureTransformUV.glsl-6Cx0qrCG.js";import{a as N,c as P,i as F,n as I,o as ce,r as L,t as R}from"./SnowCover.glsl-BPeIfQH7.js";import{i as z,n as B,t as V}from"./ReadShadowMap.glsl-Ca-4EFk-.js";import{r as H}from"./ScreenSpaceRayMarching.glsl-Bltk7nXU.js";import{t as U}from"./Normals.glsl-8Yph-fNt.js";function W(e,t){return G(e,t)}function G(n,i){let o=n.fragment,{hasVertexTangents:l,doubleSidedMode:u,hasNormalTexture:f,textureCoordinateType:p,bindType:m,hasNormalTextureTransform:h}=i;l?(n.attributes.add(`tangent`,`vec4`),n.varyings.add(`vTangent`,`vec4`),u===2?o.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),f&&p!==0&&(n.include(d,i),o.uniforms.add(m===1?new s(`normalTexture`,e=>e.textureNormal):new c(`normalTexture`,e=>e.textureNormal)),h&&(o.uniforms.add(m===1?new b(`scale`,e=>e.scale??t):new a(`scale`,e=>e.scale??t)),o.uniforms.add(new g(`normalTextureTransformMatrix`,t=>t.normalTextureTransformMatrix??e))),o.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),h&&o.code.add(r`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(r`return tangentSpace * rawNormal;
}`))}function K(e){let t=new i,{attributes:a,vertex:c,fragment:d,varyings:g}=t,{output:b,normalType:G,offsetBackfaces:K,spherical:q,snowCover:J,pbrMode:Y,textureAlphaPremultiplied:le,instancedDoublePrecision:ue,hasVertexColors:X,hasVertexTangents:Z,hasColorTexture:Q,hasNormalTexture:de,hasNormalTextureTransform:fe,hasColorTextureTransform:pe}=e;if(ne(c,e),a.add(`position`,`vec3`),c.inputs.add(`position`,()=>`position`),g.add(`vpos`,`vec3`,{invariant:!0}),t.include(ee,e),t.include(w,e),t.include(ae,e),t.include(j,e),!u(b))return t.include(D,e),t;t.include(C,e),t.include(k,e),t.include(E,e),t.include(x,e),y(c,e),t.include(T,e),t.include(oe);let $=G===0||G===1;return $&&K&&t.include(P),t.include(W,e),t.include(O,e),t.include(M,e),g.add(`vPositionLocal`,`vec3`),t.include(f,e),t.include(S,e),t.include(se,e),c.uniforms.add(new te(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),g.add(`vcolorExt`,`vec4`),c.include(_),c.include(h),t.include(ue?V:B,e),c.main.add(r`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${n($,`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`)}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${n(Z,`vTangent = dpTransformVertexTangent(tangent);`)}
    gl_Position = transformPosition(proj, view, vpos);
    ${n($&&K,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);`)}

    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${r.int(l.ignore)} && vcolorExt.a < ${r.float(v)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),d.include(N,e),d.include(ce,e),t.include(A,e),d.include(p,e),t.include(re,e),y(d,e),d.uniforms.add(c.uniforms.get(`localOrigin`),new m(`ambient`,e=>e.ambient),new m(`diffuse`,e=>e.diffuse),new o(`opacity`,e=>e.opacity),new o(`layerOpacity`,e=>e.layerOpacity)),Q&&d.uniforms.add(new s(`tex`,e=>e.texture)),t.include(I,e),d.include(z,e),d.include(ie),t.include(U,e),d.include(R,e),F(d),L(d),H(d),d.main.add(r`
    discardBySlice(vpos);
    ${Q?r`
            vec4 texColor = texture(tex, ${pe?`colorUV`:`vuv0`});
            ${n(le,`texColor.rgb /= texColor.a;`)}
            discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${G===2?r`vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${n(X,`vColor.rgb *`)} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${n(X,`vColor.a * `)} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${de?`mat3 tangentSpace = computeTangentSpace(${Z?`normal`:`normal, vpos, vuv0`});\n           vec3 shadingNormal = computeTextureNormal(tangentSpace, ${fe?`normalUV`:`vuv0`});`:`vec3 shadingNormal = normal;`}
    vec3 normalGround = ${q?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

    ${n(J,r`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${Y===1||Y===2?r`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${n(J,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${n(J,`, snow`)});
  `),t}var q=Object.freeze(Object.defineProperty({__proto__:null,build:K},Symbol.toStringTag,{value:`Module`}));export{K as n,q as t};