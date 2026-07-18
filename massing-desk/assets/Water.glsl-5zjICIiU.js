import{t as e}from"./Error-CRbw7BxE.js";import{D as t}from"./vec2-C5dJMieJ.js";import{t as n}from"./AlphaCutoff-Dj4-LvkI.js";import{o as r}from"./vec2f64-IO40D2xB.js";import{a as i}from"./vec4f64-CoPQWrdw.js";import{l as a}from"./vec4-B-G2J025.js";import{f as o}from"./ShaderOutput-BpkC-wrv.js";import{n as s}from"./glsl-D85RBwKC.js";import{n as c,t as l}from"./View.glsl-Ca9NFacb.js";import{t as u}from"./Float4PassUniform-Cu2daSgY.js";import{t as d}from"./FloatPassUniform-DeUP8HjM.js";import{i as f}from"./Slice.glsl-BqTbVez5.js";import{t as p}from"./ObjectAndLayerIdColor.glsl-UC9jbvaT.js";import{t as m}from"./OutputHighlight.glsl-CfLvc4dK.js";import{t as h}from"./ColorConversion.glsl-C9xFjUmo.js";import{t as g}from"./Float2PassUniform-BYZ61_RB.js";import{t as _}from"./Texture2DPassUniform-CiCHIiok.js";import{t as v}from"./ShaderBuilder-DEBj6tn_.js";import{t as y}from"./OutputColorHighlightOLID.glsl-BjIT55Ov.js";import{t as b}from"./Transform.glsl-ByRGlEcg.js";import{t as x}from"./EvaluateAmbientLighting.glsl-BbYe-Nat.js";import{n as S,r as C}from"./MainLighting.glsl-BzpgU6pB.js";import{n as w}from"./ReadShadowMap.glsl-oFMVskK0.js";import{n as T,t as E}from"./WaterColor.glsl-D7RH8mo5.js";import{t as D}from"./NormalUtils.glsl-BTc1OVOC.js";function O(e){e.fragment.uniforms.add(new _(`texWaveNormal`,e=>e.waveNormal),new _(`texWavePerturbation`,e=>e.wavePerturbation),new u(`waveParams`,e=>a(k,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset)),new g(`waveDirection`,e=>t(A,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity))),e.fragment.include(T),e.fragment.code.add(s`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}var k=i(),A=r();function j(t){let r=new v,{vertex:i,fragment:a,varyings:g}=r,{output:_,draped:T,receiveShadows:k}=t;c(i,t),r.include(b),r.attributes.add(`position`,`vec3`),r.attributes.add(`uv0`,`vec2`);let A=new u(`waterColor`,e=>e.color);if(g.add(`vpos`,`vec3`,{invariant:!0}),i.uniforms.add(A),o(_)){if(T)return i.main.add(s`
      if (waterColor.a < ${s.float(n)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vpos = position;
      gl_Position = transformPosition(proj, view, vpos);`),a.uniforms.add(A),a.main.add(s`fragColor = waterColor;`),r;r.include(D,t),g.add(`vuv`,`vec2`),g.add(`vnormal`,`vec3`),g.add(`vtbnMatrix`,`mat3`),i.main.add(s`
      if (waterColor.a < ${s.float(n)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vuv = uv0;
      vpos = position;

      vnormal = getLocalUp(vpos, localOrigin);
      vtbnMatrix = getTBNMatrix(vnormal);

      gl_Position = transformPosition(proj, view, vpos);
      forwardLinearDepthToReadShadowMap();`)}switch(r.include(w,t),_){case 0:case 1:case 2:a.include(x,{pbrMode:0}),r.include(O),r.include(E,t),a.include(f,t),r.include(y,t),a.include(h),l(a,t),C(a),S(a),a.uniforms.add(A,new d(`timeElapsed`,({timeElapsed:e})=>e),i.uniforms.get(`view`),i.uniforms.get(`localOrigin`)).main.add(s`
        discardBySlice(vpos);
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${k?s`1.0 - readShadowMap(vpos, linearDepth)`:`1.0`};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getWaterColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        fragColor = delinearizeGamma(final);
        outputColorHighlightOLID(applySlice(fragColor, vpos), final.rgb);`);break;case 4:r.include(D,t),r.include(O,t),a.include(f,t),g.add(`vuv`,`vec2`),i.main.add(s`
        if (waterColor.a < ${s.float(n)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        gl_Position = transformPosition(proj, view, vpos);`),a.uniforms.add(new d(`timeElapsed`,({timeElapsed:e})=>e)).main.add(s`discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);`);break;case 3:i.main.add(s`
        if (waterColor.a < ${s.float(n)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);`),a.include(f,t),a.main.add(`discardBySlice(vpos);`);break;case 10:r.include(m,t),i.main.add(s`
        if (waterColor.a < ${s.float(n)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);`),a.include(f,t),a.main.add(s`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`);break;case 11:r.include(p,t),i.main.add(s`
        if (waterColor.a < ${s.float(n)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();`),a.include(f,t),a.main.add(s`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);break;default:throw new e(`shaderbuilder:missing-output`,`Unimplemented shader output ${_} for WaterTechnique`)}return r}var M=Object.freeze(Object.defineProperty({__proto__:null,build:j},Symbol.toStringTag,{value:`Module`}));export{M as n,j as t};