import{o as e}from"./vec2f64-BwQYG_9S.js";import{r as t}from"./Uniform-DbW1Stte.js";import{t as n}from"./ScreenSpacePass.glsl-D44B-ma7.js";import{t as r}from"./NoParameters-ZDc3QXO4.js";import{t as i}from"./ShaderBuilder-CGRMmuSM.js";import{t as a}from"./Float2DrawUniform-DEClVRpY.js";import{t as o}from"./FloatPassUniform-BgZa4F-S.js";import{t as s}from"./Texture2DPassUniform-BH3IXb0x.js";import{t as c}from"./Texture2DDrawUniform-2kcPCOxd.js";import{t as l}from"./oitResolution.glsl-DK3fgwtq.js";import{t as u}from"./ditherNoise.glsl-UOpZ2vbN.js";import{t as d}from"./ReadDepth.glsl-CLTK5zoe.js";import{t as f}from"./CameraSpace.glsl-CKENT-VX.js";import{t as p}from"./BooleanBindUniform-tL3xlh7_.js";import{t as m}from"./GlobalIlluminationColorQuantization.glsl-Dve6--_N.js";import{t as h}from"./GlobalIlluminationWeights.glsl-BGBgn-p0.js";var g=4,_=class extends r{constructor(){super(...arguments),this.blurSize=e()}};function v(){let e=new i,r=e.fragment;e.include(n),e.include(f),e.include(h),r.include(d),r.include(u,y),r.include(m);let l=5e4;r.uniforms.add(new p(`hasEmission`,e=>e.hasEmission),new s(`depthMap`,e=>e.depthTexture),new s(`normalMap`,e=>e.normalTexture),new c(`globalIlluminationTexture`,e=>e.texture),new c(`globalIlluminationWeightTexture`,e=>e.weightTexture),new a(`blurSize`,e=>e.blurSize),new o(`scaleGlobalIllumination`,e=>e.scaleGlobalIllumination),new o(`projScale`,(e,t)=>{let n=t.camera.distance;return n>l?Math.max(0,e.projScale-(n-l)):e.projScale}));let _=.03;return r.code.add(t`
    void accumulateBlurSample(
      vec2 sampleUv,
      float sampleOffset,
      float centerDepth,
      vec3 centerNormal,
      float depthSharpness,
      bool skipOcclusionBlur,
      inout float emissionWeightSum,
      inout vec3 emissionSum,
      inout float occlusionWeightSum,
      inout float occlusionSum,
      float centerOcclusionBlendWeight
    ) {
      vec4 sampleGlobalIllumination = texture(globalIlluminationTexture, sampleUv);
      vec3 sampleNormal = texture(normalMap, sampleUv).rgb;
      float sampleDepth = linearDepthFromTexture(depthMap, sampleUv);

      float depthDelta = sampleDepth - centerDepth;
      bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
      float normalSimilarityWeight = globalIlluminationNormalSimilarityWeight(sampleNormal, centerNormal);
      float depthNormalCorrection = globalIlluminationDepthNormalCorrection(sampleNormal);
      vec3 emission = sampleGlobalIllumination.rgb;
      float emissionSpatialWeightMultiplier = isScaledGlobalIllumination ? ${t.float(400)} : 1.0;

      float emissionWeight = exp(
        -sampleOffset * sampleOffset * ${t.float(.04081632653061224)} * ${t.float(.1)} * emissionSpatialWeightMultiplier
        - depthDelta * depthDelta * depthSharpness * depthNormalCorrection
      );
      emissionWeight *= normalSimilarityWeight;
      emissionWeightSum += emissionWeight;
      emissionSum += emissionWeight * emission;

      if (skipOcclusionBlur) {
        return;
      }

      float occlusionSpatialKernelScale = centerOcclusionBlendWeight > ${t.float(_)}
        ? ${t.float(.08)}
        : ${t.float(1.5)};
      float occlusionWeight = exp(-sampleOffset * sampleOffset * occlusionSpatialKernelScale - depthDelta * depthDelta * depthSharpness);
      occlusionWeight *= normalSimilarityWeight;
      occlusionWeightSum += occlusionWeight;
      occlusionSum += occlusionWeight * sampleGlobalIllumination.a;
    }
  `),r.main.add(t`
    vec3 emissionSum = vec3(0.0);
    float emissionWeightSum = 0.0;

    vec4 centerGlobalIllumination = texture(globalIlluminationTexture, uv);
    float centerOcclusionBlendWeight = texture(globalIlluminationWeightTexture, uv).r;
    bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
    bool shouldReuseCenterOcclusion = isScaledGlobalIllumination && centerOcclusionBlendWeight <= ${t.float(_)};
    bool shouldSkipLowQualityBlur = !hasEmission && shouldReuseCenterOcclusion;
    if (shouldSkipLowQualityBlur) {
      fragColor = vec4(
        quantizeGlobalIlluminationColor(centerGlobalIllumination.rgb),
        centerGlobalIllumination.a
      );
      return;
    }

    float centerDepth = linearDepthFromTexture(depthMap, uv);
    vec3 centerNormal = texture(normalMap, uv).rgb;
    float occlusionSum = 0.0;
    float occlusionWeightSum = 0.0;

    float depthSharpness = globalIlluminationDepthSharpness(projScale, centerDepth);
    for (int sampleOffset = -${t.int(g)}; sampleOffset <= ${t.int(g)}; ++sampleOffset) {
      float sampleOffsetFloat = float(sampleOffset);
      vec2 sampleUv = uv + sampleOffsetFloat * blurSize;
      accumulateBlurSample(
        sampleUv,
        sampleOffsetFloat,
        centerDepth,
        centerNormal,
        depthSharpness,
        shouldReuseCenterOcclusion,
        emissionWeightSum,
        emissionSum,
        occlusionWeightSum,
        occlusionSum,
        centerOcclusionBlendWeight
      );
    }

    float occlusion = shouldReuseCenterOcclusion ? centerGlobalIllumination.a : occlusionSum / occlusionWeightSum;
    vec3 blurredEmission = (emissionSum / emissionWeightSum).rgb;

    // heuristic dithering of the colors to remove banding, color shifts and wrong color accumulation
    float dither = ditherNoise(vec4(blurredEmission, occlusion)) - 1./32768.0;
    blurredEmission += isScaledGlobalIllumination ? 0.85 * dither : dither;

    fragColor = vec4(quantizeGlobalIlluminationColor(blurredEmission), occlusion);
  `),e}var y=new l;y.useFloatBlend=!1;var b=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationBlurDrawParameters:_,build:v},Symbol.toStringTag,{value:`Module`}));export{_ as n,b as r,v as t};