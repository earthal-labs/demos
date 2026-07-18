import{l as e}from"./mat3-Cb8I4Oqy.js";import{r as t,t as n}from"./mat3f64-0nIg8LsN.js";import{s as r}from"./vec3f64-CkQiQSMN.js";import{M as i}from"./vec3-BD0ipM_y.js";import{r as a}from"./mat4f64-E_FXCKxO.js";import{i as o}from"./vec4f64-BiwnP2yY.js";import{n as s,r as c}from"./Uniform-DbW1Stte.js";import{t as l}from"./IntegerPassUniform-CDHAMczN.js";import"./NoParameters-ZDc3QXO4.js";import{t as u}from"./FloatPassUniform-BgZa4F-S.js";import{t as d}from"./Texture2DPassUniform-BH3IXb0x.js";import{c as f,n as p,s as m}from"./MaterialUtil-Bi36q1NZ.js";import{r as h}from"./Emissions.glsl-O9E5T9G1.js";import{r as g}from"./Slice.glsl-CyUIov5k.js";import{t as _}from"./ObjectAndLayerIdColor.glsl-KoN2h-A7.js";import{i as v,n as y,o as b,r as x,t as S}from"./VisualVariables.glsl-DgLAxbyx.js";import{t as C}from"./Float3BindUniform-pvPYdztI.js";import{c as w,i as T,l as E,n as D}from"./OutputColorHighlightOLID.glsl-nI0MTdxz.js";import{t as O}from"./Matrix4PassUniform-BqHo2gLF.js";import{a as k,i as A,n as j,r as M,t as N}from"./Transform.glsl-iLLevyFN.js";import{s as P}from"./SnowCover.glsl-BJL1Qjbs.js";function F(e,t){switch(e.fragment.code.add(c`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),t.normalType){case 1:e.attributes.add(`normalCompressed`,`vec2`),e.vertex.code.add(c`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add(`normal`,`vec3`),e.vertex.code.add(c`vec3 normalModel() {
return normal;
}`);break;default:t.normalType;case 2:case 3:}}function I(e,t){let{vertex:n,varyings:r}=e;switch(t.normalType){case 0:case 1:e.include(F,t),r.add(`vNormalWorld`,`vec3`),r.add(`vNormalView`,`vec3`),n.uniforms.add(new y(`transformNormalViewFromGlobal`,e=>e.transformNormalViewFromGlobal)),n.code.add(c`void forwardNormal() {
vNormalWorld = normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:e.vertex.code.add(c`void forwardNormal() {}`);break;default:t.normalType;case 3:}}var L=class extends A{constructor(){super(...arguments),this.transformNormalViewFromGlobal=n()}},R=class extends M{constructor(){super(...arguments),this.toMapSpace=o()}};function z(e,t){t.instancedColor?(e.attributes.add(`instanceColor`,`vec4`),e.vertex.include(b),e.vertex.include(v),e.vertex.include(x),e.vertex.code.add(c`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${`instanceColor`}));
      }
    `)):e.vertex.code.add(c`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}var B=n();function V(t,n){let{hasModelTransformation:r,instancedDoublePrecision:o,instanced:s,output:l,hasVertexTangents:u}=n;r&&(t.vertex.uniforms.add(new O(`model`,e=>e.modelTransformation??a)),t.vertex.uniforms.add(new y(`normalLocalOriginFromModel`,t=>(e(B,t.modelTransformation??a),B)))),s&&o&&(t.attributes.add(`instanceModelOriginHi`,`vec3`),t.attributes.add(`instanceModelOriginLo`,`vec3`),t.attributes.add(`instanceModel`,`mat3`),t.attributes.add(`instanceModelNormal`,`mat3`));let d=t.vertex;o&&(d.include(k),d.uniforms.add(new C(`viewOriginHi`,e=>m(i(H,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),H)),new C(`viewOriginLo`,e=>f(i(H,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),H)))),d.code.add(c`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?`(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz`:`(model * localPosition()).xyz`:o?`instanceModel * localPosition().xyz`:`localPosition().xyz`};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?c`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:`return vpos;`}
    }
    `),d.code.add(c`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?`normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)`:`normalLocalOriginFromModel * _normal.xyz`:o?`instanceModelNormal * _normal.xyz`:`_normal.xyz`});
    }
    `),l===4&&(E(d),d.code.add(c`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?o?`vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)`:`vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)`:o?`vec4(instanceModelNormal * _normal.xyz, 1.0)`:`_normal`}).xyz);
    }
    `)),u&&d.code.add(c`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?o?`return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);`:`return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);`:o?`return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);`:`return _tangent;`}
    }`)}var H=r();function U(e,t){e.varyings.add(`colorMixMode`,`int`),e.varyings.add(`opacityMixMode`,`int`),e.vertex.uniforms.add(new l(`symbolColorMixMode`,e=>p[e.colorMixMode])),t.hasSymbolColors?(e.vertex.include(b),e.vertex.include(v),e.vertex.include(x),e.attributes.add(`symbolColor`,`vec4`),e.vertex.code.add(c`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${`symbolColor`}));
    }
  `)):e.vertex.code.add(c`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(c`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${c.int(p.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${c.int(p.ignore)} : symbolColorMixMode;
    }
  `)}function W(e,t){G(e,t,new u(`textureAlphaCutoff`,e=>e.textureAlphaCutoff))}function G(e,t,n){let r=e.fragment;switch(r.code.add(`void discardOrAdjustAlpha(inout vec4 color) {`),t.alphaDiscardMode){case 1:r.code.add(`color.a = 1.0;`);break;case 0:r.include(T),r.code.add(`if (color.a < alphaCutoff) discard;`);break;case 3:r.uniforms.add(n).code.add(`if (color.a < textureAlphaCutoff) discard;`);break;case 2:r.uniforms.add(n).code.add(`
        if (color.a < textureAlphaCutoff) discard;
        color.a = 1.0;
      `);break;case 4:break;default:t.alphaDiscardMode}r.code.add(`}`)}function K(e,t){let{vertex:n,fragment:r,varyings:i}=e,{hasColorTexture:a,alphaDiscardMode:o}=t,l=a&&o!==1,{output:u,normalType:f,hasColorTextureTransform:p}=t;switch(u){case 3:w(n,t),e.include(N),r.include(g,t),e.include(h,t),l&&r.uniforms.add(new d(`tex`,e=>e.texture)),n.main.add(c`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(W,t),r.main.add(c`
        discardBySlice(vpos);
        ${s(l,c`vec4 texColor = texture(tex, ${p?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}`);break;case 5:case 6:case 7:case 8:case 11:w(n,t),e.include(N),e.include(h,t),e.include(S,t),e.include(P,t),r.include(g,t),e.include(_,t),j(e),i.add(`depth`,`float`,{invariant:!0}),l&&r.uniforms.add(new d(`tex`,e=>e.texture)),n.main.add(c`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(W,t),r.main.add(c`
        discardBySlice(vpos);
        ${s(l,c`vec4 texColor = texture(tex, ${p?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`)}
        ${u===11?c`outputObjectAndLayerIdColor();`:c`outputDepth(depth);`}`);break;case 4:{w(n,t),e.include(N),e.include(F,t),e.include(I,t),e.include(h,t),e.include(S,t),l&&r.uniforms.add(new d(`tex`,e=>e.texture)),f===2&&i.add(`vPositionView`,`vec3`,{invariant:!0});let a=f===0||f===1;n.main.add(c`
        vpos = getVertexInLocalOriginSpace();
        ${a?c`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:c`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(g,t),e.include(W,t),r.main.add(c`
        discardBySlice(vpos);
        ${s(l,c`vec4 texColor = texture(tex, ${p?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}

        ${f===2?c`vec3 normal = screenDerivativeNormal(vPositionView);`:c`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 10:w(n,t),e.include(N),e.include(h,t),e.include(S,t),l&&r.uniforms.add(new d(`tex`,e=>e.texture)),n.main.add(c`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(g,t),e.include(W,t),e.include(D,t),r.main.add(c`
        discardBySlice(vpos);
        ${s(l,c`vec4 texColor = texture(tex, ${p?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function q(e,n){n.hasColorTextureTransform?(e.varyings.add(`colorUV`,`vec2`),e.vertex.uniforms.add(new y(`colorTextureTransformMatrix`,e=>e.colorTextureTransformMatrix??t)).code.add(c`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(c`void forwardColorUV(){}`)}function J(e,n){n.hasNormalTextureTransform&&n.textureCoordinateType!==0?(e.varyings.add(`normalUV`,`vec2`),e.vertex.uniforms.add(new y(`normalTextureTransformMatrix`,e=>e.normalTextureTransformMatrix??t)).code.add(c`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(c`void forwardNormalUV(){}`)}function Y(e,n){n.hasEmissionTextureTransform&&n.textureCoordinateType!==0?(e.varyings.add(`emissiveUV`,`vec2`),e.vertex.uniforms.add(new y(`emissiveTextureTransformMatrix`,e=>e.emissiveTextureTransformMatrix??t)).code.add(c`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(c`void forwardEmissiveUV(){}`)}function X(e,n){n.hasOcclusionTextureTransform&&n.textureCoordinateType!==0?(e.varyings.add(`occlusionUV`,`vec2`),e.vertex.uniforms.add(new y(`occlusionTextureTransformMatrix`,e=>e.occlusionTextureTransformMatrix??t)).code.add(c`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(c`void forwardOcclusionUV(){}`)}function Z(e,n){n.hasMetallicRoughnessTextureTransform&&n.textureCoordinateType!==0?(e.varyings.add(`metallicRoughnessUV`,`vec2`),e.vertex.uniforms.add(new y(`metallicRoughnessTextureTransformMatrix`,e=>e.metallicRoughnessTextureTransformMatrix??t)).code.add(c`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(c`void forwardMetallicRoughnessUV(){}`)}export{Z as a,U as c,R as d,L as f,J as i,V as l,F as m,X as n,K as o,I as p,Y as r,W as s,q as t,z as u};