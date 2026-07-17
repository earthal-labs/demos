import"./vec3f64-CkQiQSMN.js";import{n as e,r as t,t as n}from"./Uniform-DbW1Stte.js";import"./NoParameters-ZDc3QXO4.js";import{m as r}from"./Emissions.glsl-O9E5T9G1.js";import{t as i}from"./FloatBindUniform-DuYdEJ-p.js";import{r as a}from"./OutputColorHighlightOLID.glsl-nI0MTdxz.js";import{t as o}from"./PiUtils.glsl-CpyVHJCx.js";import{t as s}from"./Float4BindUniform-7ierNxkJ.js";import{t as c}from"./Gamma.glsl-CGeucRMX.js";import{t as l}from"./Texture2DBindUniform-CKLq3hU-.js";import{o as u}from"./Transform.glsl-iLLevyFN.js";var d=3e5,f=5e5,p=class extends n{constructor(e,t,n,r){super(e,`float`,0,(t,i)=>t.setUniform1fv(e,n(i),r),t)}};function m(e,n){e.uniforms.add(new p(`shR`,9,({lighting:e})=>e.sh.r),new p(`shG`,9,({lighting:e})=>e.sh.g),new p(`shB`,9,({lighting:e})=>e.sh.b)),e.code.add(t`vec3 calculateAmbientIrradiance(vec3 normal) {
vec3 ambientLight = 0.282095 * vec3(shR[0], shG[0], shB[0]);
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
vec4 lightingAmbientSH_R1 = vec4(shR[1], shR[2], shR[3], shR[4]);
vec4 lightingAmbientSH_G1 = vec4(shG[1], shG[2], shG[3], shG[4]);
vec4 lightingAmbientSH_B1 = vec4(shB[1], shB[2], shB[3], shB[4]);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
vec4 lightingAmbientSH_R2 = vec4(shR[5], shR[6], shR[7], shR[8]);
vec4 lightingAmbientSH_G2 = vec4(shG[5], shG[6], shG[7], shG[8]);
vec4 lightingAmbientSH_B2 = vec4(shB[5], shB[6], shB[7], shB[8]);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight;
}`),n.pbrMode!==1&&n.pbrMode!==2||e.code.add(t`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance()
{
vec3 ambientLight = 1.2 * (0.282095 * vec3(shR[0], shG[0], shB[0])) - 0.2;
return ambientLight *= skyTransmittance;
}`)}function h(e){e.code.add(t`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(t`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(t`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function g(e,n){e.include(c),e.include(o),n.pbrMode!==1&&n.pbrMode!==2&&n.pbrMode!==5&&n.pbrMode!==6||(e.code.add(t`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(t`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),e.code.add(t`struct PBRShadingInfo
{
float NdotV;
float NdotL;
float LdotH;
float NdotUP;
float RdotUP;
float NdotAmbDir;
float NdotH_Horizon;
float NdotH;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
vec3 reflectedView;
float averageAmbientRadiance;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),e.code.add(t`void calculateCommonInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
vec3 h = normalize(mainLightDirection - viewDirection);
inputs.NdotV = clamp(abs(dot(normal, -viewDirection)), 0.001, 1.0);
inputs.NdotUP = clamp(dot(normal, upDirection), -1.0, 1.0);
inputs.reflectedView = normalize(reflect(-viewDirection, normal));
inputs.RdotUP = clamp(dot(inputs.reflectedView, upDirection), -1.0, 1.0);
inputs.albedoLinear = linearizeGamma(albedo);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
}`)),n.pbrMode!==1&&n.pbrMode!==2||(e.include(h),e.code.add(t`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotUP);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotUP, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),e.code.add(t`void calculatePBRInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo, vec3 mrr) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
}`)),n.pbrMode!==5&&n.pbrMode!==6||e.code.add(t`const vec3 fresnelReflectionSimplified = vec3(0.04);
void calculateSimplifiedInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
float lightness = 0.3 * inputs.albedoLinear[0] + 0.5 * inputs.albedoLinear[1] + 0.2 * inputs.albedoLinear[2];
inputs.f0 = (0.85 * lightness + 0.15) * fresnelReflectionSimplified;
inputs.f90 =  vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
}`)}function _(e,n){e.include(o),e.code.add(t`
    struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${n.useCustomDTRExponentForWater?`2.2`:`2.0`};
  `),e.code.add(t`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(t`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(t`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(t`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function v(e){e.code.add(t`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`),e.code.add(t`vec3 tonemapKhronosNeutral(vec3 color) {
const float startCompression = 0.76;
const float desaturation = 0.15;
float peak = max(color.r, max(color.g, color.b));
if (peak < startCompression) {
return color;
}
float d = 1.0 - startCompression;
float newPeak = 1.0 - d * d / (peak + d - startCompression);
color *= newPeak / peak;
float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0 );
return mix(color, vec3(newPeak), g);
}`)}function y(n,i){let a=r(i.output)&&i.receiveShadows;a&&u(n,!0),n.vertex.code.add(t`
    void forwardLinearDepthToReadShadowMap() { ${e(a,`forwardLinearDepth(gl_Position.w);`)} }
  `)}var b=class extends n{constructor(e,t,n,r){super(e,`mat4`,2,(n,i,a,o)=>n.setUniformMatrices4fv(e,t(i,a,o),r),n)}},x=class extends n{constructor(e,t,n,r){super(e,`mat4`,1,(n,i,a)=>n.setUniformMatrices4fv(e,t(i,a),r),n)}};function S(e){e.uniforms.add(new x(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),e.include(w)}function C(e){e.uniforms.add(new b(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),e.include(w)}function w(e){e.uniforms.add(new s(`cascadeDistances`,e=>e.shadowMap.cascadeDistances),new a(`numCascades`,e=>e.shadowMap.numCascades)),e.code.add(T)}var T=t`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`;function E(e){e.code.add(t`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}var D=class extends n{constructor(e,t){super(e,`sampler2DShadow`,0,(n,r)=>n.bindTexture(e,t(r)))}};function O(e,t){t.receiveShadows&&e.fragment.include(S),A(e,t)}function k(e,t){t.receiveShadows&&e.fragment.include(C),A(e,t)}function A(n,r){n.fragment.uniforms.add(new i(`lightingGlobalFactor`,e=>e.lighting.globalFactor));let{hasShadowHighlights:a,receiveShadows:o,spherical:s}=r;n.include(y,r),o&&j(n.fragment,a),n.fragment.code.add(t`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${o?`max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))`:e(s,`lightingGlobalFactor * (1.0 - additionalAmbientScale)`,`0.0`)};
    }
  `)}function j(e,t){N(e,t),M(e)}function M(e){e.code.add(t`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap, 0));
return readShadowMaps(uvzShadow);
}`)}function N(n,r){n.include(E),n.uniforms.add(P()),r&&n.uniforms.add(new l(`shadowHighlight`,({shadowHighlight:e})=>e?.getTexture())),n.code.add(t`
    float readShadowMaps(const in vec3 uvzShadow) {
      if (uvzShadow.z < 0.0) {
        return 0.0;
      }

      float shadow1 = readShadowMapUVZ(uvzShadow, shadowMap);
      ${e(r,`float shadow2 = texelFetch(shadowHighlight, ivec2(gl_FragCoord.xy), 0).r;
         return shadow1 > shadow2 ? shadow1 : shadow2;`,`return shadow1;`)}
    }
  `)}function P(){return new D(`shadowMap`,({shadowMap:e})=>e.getOutput(5)??e.getOutput(7))}export{_ as a,f as c,g as i,k as n,m as o,v as r,d as s,O as t};