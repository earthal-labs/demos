import{a as e,l as t,s as n}from"./vec2f64-BwQYG_9S.js";import{n as r}from"./memoryEstimations-Bc22xvDh.js";import{r as i}from"./Util-BnWu4ZiT.js";import{f as a,i as o,n as s,r as c,t as l}from"./FloatsPassUniform-BQgAUzKh.js";import{n as u,r as d,t as f}from"./Uniform-DbW1Stte.js";import{t as p}from"./IntegerPassUniform-CDHAMczN.js";import{t as ee}from"./ShaderBuilder-CGRMmuSM.js";import{t as m}from"./FloatPassUniform-BgZa4F-S.js";import{m as te}from"./Emissions.glsl-O9E5T9G1.js";import{r as h}from"./Slice.glsl-CyUIov5k.js";import{t as g}from"./Float3PassUniform-DwdjRl2l.js";import{t as _}from"./ObjectAndLayerIdColor.glsl-KoN2h-A7.js";import{t as v}from"./Float4PassUniform-BK2Jlamx.js";import{c as y,l as b,n as x,o as S,s as C,t as ne}from"./OutputColorHighlightOLID.glsl-nI0MTdxz.js";import{t as w}from"./PiUtils.glsl-CpyVHJCx.js";import{t as re}from"./Float2PassUniform-Csu8tFSt.js";import{n as ie}from"./InterleavedLayout-BT9YMTKh.js";import{n as ae,t as T}from"./Transform.glsl-iLLevyFN.js";import{t as E}from"./TextureBackedBufferLayout-CDbMdcD1.js";import{a as D,c as O,i as k,n as A,o as j,r as M,s as N,t as P}from"./SnowCover.glsl-BH2r70mg.js";import{n as F}from"./ReadShadowMap.glsl-Ca-4EFk-.js";import{r as I}from"./ScreenSpaceRayMarching.glsl-Bltk7nXU.js";import{t as L}from"./Normals.glsl-8Yph-fNt.js";import{n as R,t as z}from"./Texture2DUintDrawUniform-BSaZwIa5.js";import{t as B}from"./NormalUtils.glsl-BnWH8idn.js";function oe({sourceIndex:e,subdivision:t,type:n,capSide:r}){return i(e>=0&&e<=15,`invalid sourceIndex`),i(t>=0&&t<=7,`invalid subdivision`),(e&15)<<0|(t&7)<<4|(n&7)<<7|(r&1)<<10}function V(e){return{sourceIndex:e>>0&15,subdivision:e>>4&7,type:e>>7&7,capSide:e>>10&1}}var H={0:{indexCount:20,poleCount:1,vertexCount:10},1:{indexCount:8,poleCount:4,vertexCount:8}},U=class{constructor(e){this.type=e,this.vertices=[],this.normals=[],this.indices=[],this.poles=[],this.poleIndices=[]}addVertex(e,n){return this.vertices.push(t(e)),this.normals.push(t(n)),this.vertices.length-1}addPole(e,n=null){return this.poles.push({position:t(e),normal:n?t(n):null}),this.poles.length-1}addSegment(e,t=null){this.indices.push(e.v0),this.indices.push(e.v1),t&&(this.poleIndices.push(t.v0),this.poleIndices.push(t.v1))}get numSegments(){return this.indices.length/2}translate(e,t){for(let n of this.vertices)n[0]+=e,n[1]+=t;for(let n of this.poles)n.position[0]+=e,n.position[1]+=t}get usedMemory(){return this.vertices.length*r(this.vertices[0])*2+r(this.indices)}},W={top:[0,-.5],bottom:[0,.5]};function G(t){let n=.5,r=new U(0),i={v0:0,v1:0};r.addPole(e(0,0));for(let t=0;t<10;++t){let i=2*t*Math.PI/10,a=Math.cos(i),o=Math.sin(i),s=e(a*n,o*n),c=e(a,o);r.addVertex(s,c)}for(let e=0;e<9;++e){let t={v0:e,v1:e+1};r.addSegment(t,i)}if(r.addSegment({v0:9,v1:0},i),t!==`center`){let e=W[t];r.translate(e[0],e[1])}return r}var K={center:G(`center`),top:G(`top`),bottom:G(`bottom`)},q={center:J(`center`),top:J(`top`),bottom:J(`bottom`)};function J(t){let n=new U(1),r=e(.5*-1,.5*-1),i=e(.5*1,.5*-1),a=e(.5*1,.5*1),o=e(.5*-1,.5*1),s=e(0,-1),c=e(1,0),l=e(0,1),u=e(-1,0);if(n.addPole(e(0,.5*1),l),n.addPole(e(0,.5*1)),n.addPole(e(0,.5*-1)),n.addPole(e(0,.5*-1),s),n.addVertex(r,s),n.addVertex(i,s),n.addSegment({v0:0,v1:1},{v0:3,v1:3}),n.addVertex(i,c),n.addVertex(a,c),n.addSegment({v0:2,v1:3},{v0:2,v1:1}),n.addVertex(a,l),n.addVertex(o,l),n.addSegment({v0:4,v1:5},{v0:0,v1:0}),n.addVertex(o,u),n.addVertex(r,u),n.addSegment({v0:6,v1:7},{v0:1,v1:2}),t!==`center`){let e=W[t];n.translate(e[0],e[1])}return n}function se(){let e=ie().u32(`pathVertexInfo`,{integer:!0}).u32(`textureElementIndex`,{integer:!0});return a()&&e.vec4u8(`olidColor`),e.freeze()}function Y(e){let t=[{type:`vec3f32`,name:`position`},{type:`vec2snorm16`,name:`profileRight`},{type:`vec2snorm16`,name:`profileUp`}];return e.upVectorAlignment===1&&t.push({type:`vec2snorm16`,name:`pathRotationUp`}),e.hasVVSize&&t.push({type:`f32`,name:`sizeFeatureAttribute`}),e.hasVVColor&&t.push({type:`f32`,name:`colorFeatureAttribute`}),e.hasVVOpacity&&t.push({type:`f32`,name:`opacityFeatureAttribute`}),t.push({type:`f16`,name:`pathMaxStretchDistance`},{type:`snorm16`,name:`profileRotation`}),new E(t)}function ce(e){let{attributes:t,vertex:n}=e;t.add(`pathVertexInfo`,`uint`),n.constants.add(`pathVertexInfoSourceIndexShift`,`uint`,0),n.constants.add(`pathVertexInfoSourceIndexMask`,`uint`,15),n.constants.add(`pathVertexInfoSubdivisionShift`,`uint`,4),n.constants.add(`pathVertexInfoSubdivisionMask`,`uint`,7),n.constants.add(`pathVertexInfoTypeShift`,`uint`,7),n.constants.add(`pathVertexInfoTypeMask`,`uint`,7),n.constants.add(`pathVertexInfoCapSideShift`,`uint`,10),n.constants.add(`pathVertexInfoCapSideMask`,`uint`,1),n.constants.add(`pathVertexCapSideEnd`,`uint`,1),n.code.add(d`struct PathVertexInfo {
uint sourceIndex;
float subdivision;
uint type;
bool isEnd;
};
PathVertexInfo decodePathVertexInfo() {
uint sourceIndex = (pathVertexInfo >> pathVertexInfoSourceIndexShift) & pathVertexInfoSourceIndexMask;
uint subdivision = (pathVertexInfo >> pathVertexInfoSubdivisionShift) & pathVertexInfoSubdivisionMask;
uint type = (pathVertexInfo >> pathVertexInfoTypeShift) & pathVertexInfoTypeMask;
uint capSide = (pathVertexInfo >> pathVertexInfoCapSideShift) & pathVertexInfoCapSideMask;
return PathVertexInfo(
sourceIndex,
float(subdivision),
type,
capSide == pathVertexCapSideEnd
);
}`)}var X=class extends f{constructor(e,t,n,r){super(e,`vec2`,1,(t,i,a)=>t.setUniform2fv(e,n(i,a),r),t)}},Z=class extends f{constructor(e,t,n){super(e,`int`,1,(t,r,i)=>t.setUniform1iv(e,n(r,i)),t)}};function le(e,t){let{vertex:n}=e;e.include(ce);let r=t.upVectorAlignment===1;n.uniforms.add(new m(`angleCutoff`,e=>e.cutoffAngle)),n.code.add(d`float reciprocalClamped(float value) {
float signValue = value < 0.0 ? -1.0 : 1.0;
return signValue / max(abs(value), 1e-6);
}`),r?n.code.add(d`vec2 applyMiterStretch(vec2 vertex, float rotationAngle, vec2 rotationRight) {
if (rotationAngle == 0.0) {
return vertex;
}
float k = reciprocalClamped(cos(0.5 * rotationAngle));
mat2 miterStretch = mat2(
1. + (k - 1.) * rotationRight.x * rotationRight.x,
(k - 1.) * rotationRight.x * rotationRight.y,
(k - 1.) * rotationRight.x * rotationRight.y,
1. + (k - 1.) * rotationRight.y * rotationRight.y
);
return miterStretch * vertex;
}`):n.code.add(d`vec2 applyMiterStretch(vec2 vertex, float rotationAngle) {
if (rotationAngle == 0.0) {
return vertex;
}
float k = reciprocalClamped(cos(0.5 * rotationAngle));
return vec2(k, 1.) * vertex;
}`);let{vertexCount:i,indexCount:a,poleCount:o}=H[t.pathProfileType];switch(n.uniforms.add(new X(`pathProfileVertices`,i,e=>e.profile.vertices.flat()),new X(`pathProfileNormals`,i,e=>e.profile.normals.flat())),n.code.add(d`mat3 mat3FromRotation(float angle, vec3 axis) {
float x = axis.x;
float y = axis.y;
float z = axis.z;
float s = sin(angle);
float c = cos(angle);
float t = 1.0 - c;
return mat3(
x * x * t + c,      y * x * t + z * s,  z * x * t - y * s,
x * y * t - z * s,  y * y * t + c,      z * y * t + x * s,
x * z * t + y * s,  y * z * t - x * s,  z * z * t + c
);
}`),n.code.add(d`struct ExtrusionFrame {
vec3 up;
vec3 right;
};
struct ExtrudedVertex {
ExtrusionFrame frame;
vec2 profileVertex;
vec2 profileNormal;
vec2 rotationRight;
float maxDistance;
float capPositionOffset;
float capNormalOffset;
bool isCap;
};`),r?n.code.add(d`vec2 getPathRotationRight(ExtrusionFrame frame) {
vec3 rotationUp = getFrameRotationUp();
float a = dot(rotationUp, frame.up);
float b = dot(rotationUp, frame.right);
vec3 vertex = normalize(frame.up * -b + frame.right * a);
return vec2(dot(vertex, frame.right), dot(vertex, frame.up));
}`):n.code.add(d`vec2 getPathRotationRight() {
return vec2(1., 0.);
}`),n.constants.add(`pathVertexTypeJoin`,`uint`,0),n.uniforms.add(new p(`numJoinSubdivisions`,e=>e.numJoinSubdivisions)),n.code.add(d`
      ExtrudedVertex evaluateJoinVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
        vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
        vec2 profileNormal = pathProfileNormals[vertexInfo.sourceIndex];
        float profileRotation = getProfileRotation();
        vec2 rotationRight = getPathRotationRight(${u(r,d`frame`)});
        bool isBevel = abs(profileRotation) >= angleCutoff;

        // determine if the current profile vertex is on the inside or outside of the rotationAxis
        // this determines if the geometry folds inwards or is bend outwards
        float b = dot(profileVertex, rotationRight);
        bool isBend = b * profileRotation >= 0.;

        bool isBevelBend = isBevel && isBend;

        if (isBevelBend) {
          float k = vertexInfo.subdivision;
          // rotate half rotation angle backwards to where the rotation starts
          // and then rotate a couple of times depending on the current subdivision segment
          float bendRotation = -profileRotation * 0.5 + (k * profileRotation) / float(numJoinSubdivisions);
          if (bendRotation != 0.) {
            vec3 rotationUp = getFrameRotationUp();
            mat3 transform  = mat3FromRotation(bendRotation, rotationUp);
            ${u(r,d`frame.up = normalize(transform * frame.up);`)}
            frame.right = normalize(transform * frame.right);
          }
        } else {
          profileVertex = applyMiterStretch(
            profileVertex,
            profileRotation${u(r,d`,
              rotationRight`)}
          );
        }

        rotationRight = isBend ? vec2(0.) : rotationRight;
        float maxDistance = isBend
        ? 0.
        : getMaxStretchDistance();

        return ExtrudedVertex(
          frame,
          profileVertex,
          profileNormal,
          rotationRight,
          maxDistance,
          0.,
          0.,
          false
        );
      }
    `),n.constants.add(`pathVertexTypeCapConnectingProfile`,`uint`,1),n.code.add(d`
        ExtrudedVertex evaluateConnectingVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
          vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
          vec2 profileNormal = pathProfileNormals[vertexInfo.sourceIndex];

          float profilePlaneVertexOffset = ${u(t.pathCapType===2,d`vertexInfo.isEnd ? 0.5 : -0.5`,d`0.`)};

          return ExtrudedVertex(
            frame,
            profileVertex,
            profileNormal,
            vec2(0.),
            0.,
            profilePlaneVertexOffset,
            0.,
            true
          );
        }
    `),t.pathCapType){case 1:case 2:n.constants.add(`pathVertexTypeFlatCapProfile`,`uint`,2),n.code.add(d`
          ExtrudedVertex evaluateFlatCapVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
            vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
            bool isEnd = vertexInfo.isEnd;
            float normalOffset = isEnd ? 1. : -1.;
            float profilePlaneOffset = ${u(t.pathCapType===2,d`isEnd ? 0.5 : -0.5`,d`0.0`)};
            vec2 normal = vec2(0.);

            return ExtrudedVertex(
              frame,
              profileVertex,
              normal,
              vec2(0.),
              0.,
              profilePlaneOffset,
              normalOffset,
              true
            );
          }
        `);break;case 3:n.uniforms.add(new s(`pathProfilePoles`,o,e=>e.profile.poles.flatMap(({position:e,normal:t})=>[...e,...t??ue]),{supportsNaN:!0}),new Z(`pathProfilePoleIndices`,a,e=>e.profile.poleIndices)),n.include(w),n.constants.add(`pathVertexTypeRoundCapPole`,`uint`,3),n.constants.add(`pathVertexTypeRoundCapInnerProfile`,`uint`,4),n.constants.add(`pathNumRoundCapExtrusionSubdivisions`,`float`,3),n.code.add(d`ExtrudedVertex evaluateRoundCapPoleVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
bool isEnd = vertexInfo.isEnd;
float capSign = isEnd ? 1. : -1.;
float offsetScale = capSign * 0.5;
vec4 pole = pathProfilePoles[vertexInfo.sourceIndex];
vec2 polePosition = pole.xy;
bool hasPoleNormal = !isnan(pole.z);
vec2 poleNormal = hasPoleNormal ? pole.zw : vec2(0.);
float normalOffset = hasPoleNormal ? 0. : capSign;
return ExtrudedVertex(
frame,
polePosition,
poleNormal,
vec2(0.),
0.,
offsetScale,
normalOffset,
true
);
}
ExtrudedVertex evaluateRoundCapInnerVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
bool isEnd = vertexInfo.isEnd;
float capSign = isEnd ? 1. : -1.;
float offsetScale = capSign * 0.5;
float subdivision = vertexInfo.subdivision;
float t = 1. - (subdivision + 1.) / pathNumRoundCapExtrusionSubdivisions;
float theta = t * HALF_PI;
float t1 = sin(theta);
float t2 = cos(theta);
int poleIndex = pathProfilePoleIndices[vertexInfo.sourceIndex];
vec4 pole = pathProfilePoles[poleIndex];
vec2 polePosition = pole.xy;
bool hasPoleNormal = !isnan(pole.z);
vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
vec2 poleOffsetScaled = (profileVertex - polePosition) * t1;
vec2 poleVertex = poleOffsetScaled + polePosition;
vec2 profileNormal = hasPoleNormal
? pole.zw
: normalize(poleOffsetScaled) * t1;
float normalOffset = hasPoleNormal ? 0. : capSign * t2;
return ExtrudedVertex(
frame,
poleVertex,
profileNormal,
vec2(0.),
0.,
offsetScale * t2,
normalOffset,
true
);
}`)}n.code.add(d`
      ExtrudedVertex evaluateVertex() {
        PathVertexInfo vertexInfo = decodePathVertexInfo();
        ExtrusionFrame frame = ExtrusionFrame(
          getFrameUp(),
          getFrameRight()
        );

        switch (vertexInfo.type) {
          case pathVertexTypeJoin:
            return evaluateJoinVertex(vertexInfo, frame);

          case pathVertexTypeCapConnectingProfile:
            return evaluateConnectingVertex(vertexInfo, frame);

          ${u(t.pathCapType===1||t.pathCapType===2,d`
          case pathVertexTypeFlatCapProfile:
            return evaluateFlatCapVertex(vertexInfo, frame);
          `)}

          ${u(t.pathCapType===3,d`
          case pathVertexTypeRoundCapPole:
            return evaluateRoundCapPoleVertex(vertexInfo, frame);
          case pathVertexTypeRoundCapInnerProfile:
            return evaluateRoundCapInnerVertex(vertexInfo, frame);
          `)}

          default:
            return ExtrudedVertex(
              frame,
              vec2(0.),
              vec2(0.),
              vec2(0.),
              0.,
              0.,
              0.,
              false
            );
        }
      }
    `)}var ue=n(NaN,NaN),Q=8;function de(e,t){let{attributes:n,vertex:r}=e,i=new z(`componentTextureBuffer`,e=>e.textureBuffer),a=new R({layout:Y(t),itemIndexAttribute:`textureElementIndex`,bufferUniform:i});e.include(a.TextureBackedBufferModule,t),n.add(`textureElementIndex`,`uint`),r.uniforms.add(new re(`size`,e=>e.size));let{hasVVSize:c,hasVVColor:f,hasVVOpacity:p}=t;c?(r.uniforms.add(new g(`vvSizeMinSize`,e=>e.vvSize.minSize),new g(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new g(`vvSizeOffset`,e=>e.vvSize.offset),new g(`vvSizeFactor`,e=>e.vvSize.factor),new g(`vvSizeFallback`,e=>e.vvSize.fallback)),r.code.add(d`
    vec2 getSize() {
      float value = ${a.getTextureAttribute(`sizeFeatureAttribute`)};
      if (isnan(value)) {
        return vvSizeFallback.xz;
      }
      return size * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
    }
    `)):r.code.add(d`vec2 getSize(){
return size;
}`),p?(r.constants.add(`vvOpacityNumber`,`int`,Q),r.uniforms.add(new l(`vvOpacityValues`,Q,e=>e.vvOpacity.values),new l(`vvOpacityOpacities`,Q,e=>e.vvOpacity.opacityValues),new m(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),r.code.add(d`
    vec4 applyOpacity(vec4 color) {
      // if we encounter NaN in the color it means the color is in the fallback case where the symbol color
      // is not defined and there is no valid color visual variable override. In this case just return a fully
      // transparent color
      if (isnan(color.r)) {
        return vec4(0);
      }

      float value = ${a.getTextureAttribute(`opacityFeatureAttribute`)};

      if (isnan(value)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${u(f,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      if (value <= vvOpacityValues[0]) {
        return vec4(color.rgb, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4(color.rgb, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.rgb, vvOpacityOpacities[vvOpacityNumber - 1]);
    }
    `)):r.code.add(d`vec4 applyOpacity(vec4 color){
return color;
}`),f?(r.constants.add(`vvColorNumber`,`int`,o),r.uniforms.add(new l(`vvColorValues`,o,e=>e.vvColor.values),new s(`vvColorColors`,o,e=>e.vvColor.colors),new v(`vvColorFallback`,e=>e.vvColor.fallback)),r.code.add(d`
    vec4 getColor() {
      float value = ${a.getTextureAttribute(`colorFeatureAttribute`)};
      if (isnan(value)) {
        return applyOpacity(vvColorFallback);
      }

      if (value <= vvColorValues[0]) {
        return applyOpacity(vvColorColors[0]);
      }

      for (int i = 1; i < vvColorNumber; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
        }
      }

      return applyOpacity(vvColorColors[vvColorNumber - 1]);
    }
    `)):r.code.add(d`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),r.include(w),r.code.add(d`
    vec3 decompressAxis(vec2 axis) {
      float z = 1.0 - abs(axis.x) - abs(axis.y);
      return normalize(vec3(axis + sign(axis) * min(z, 0.0), z));
    }

    float getProfileRotation() {
      return PI * ${a.getTextureAttribute(`profileRotation`)};
    }

    float getMaxStretchDistance() {
      return ${a.getTextureAttribute(`pathMaxStretchDistance`)};
    }

    vec3 getFrameUp() {
      return decompressAxis(${a.getTextureAttribute(`profileUp`)});
    }

    vec3 getFrameRight() {
      return decompressAxis(${a.getTextureAttribute(`profileRight`)});
    }
  `),r.code.add(d`
    vec3 getFrameRotationUp() {
      return ${t.upVectorAlignment===1?d`decompressAxis(${a.getTextureAttribute(`pathRotationUp`)})`:d`getFrameUp()`};
    }
  `),e.include(le,t),r.code.add(d`
  vec3 calculateVPos(ExtrudedVertex extrudedVertex) {
    vec2 size = getSize();
    vec3 origin = ${a.getTextureAttribute(`position`)};
    vec3 right = extrudedVertex.frame.right;
    vec3 up = extrudedVertex.frame.up;
    vec2 profileVertex = extrudedVertex.profileVertex * size;
    `),r.code.add(d`if(extrudedVertex.isCap) {
float positionOffsetAlongProfilePlaneNormal = extrudedVertex.capPositionOffset * size[0];
vec3 forward = cross(up, right);
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}
vec2 rotationRight = extrudedVertex.rotationRight;
float maxDistance = extrudedVertex.maxDistance;`),r.code.add(d`rotationRight *= size;
rotationRight = length(rotationRight) > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y;
return origin + offset;
}`),r.code.add(d`vec3 localNormal(ExtrudedVertex extrudedVertex) {
vec3 right = extrudedVertex.frame.right;
vec3 up = extrudedVertex.frame.up;
vec2 profileNormal = extrudedVertex.profileNormal;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(extrudedVertex.isCap) {
vec3 forward = cross(up, right);
normal += forward * extrudedVertex.capNormalOffset;
}
return normal;
}`)}var fe=class extends c{constructor(){super(...arguments),this.numJoinSubdivisions=1,this.size=e(1,1),this.cutoffAngle=0,this.profile=K.center}};function $(e){let t=new ee,{vertex:n,fragment:r,varyings:i}=t;y(n,e),i.add(`vpos`,`vec3`,{invariant:!0}),t.include(de,e);let{output:a,spherical:o,pbrMode:s,snowCover:c,offsetBackfaces:l}=e;switch((te(a)||a===11)&&(t.include(T),t.include(F,e),t.include(_,e),l&&(C(n,e),t.include(O)),i.add(`vnormal`,`vec3`),i.add(`vcolor`,`vec4`),n.main.add(d`
      ExtrudedVertex extrudedVertex = evaluateVertex();
      vpos = calculateVPos(extrudedVertex);
      vnormal = normalize(localNormal(extrudedVertex));
      gl_Position = transformPosition(proj, view, vpos);
      ${u(l,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vnormal, cameraPosition);`)}

      forwardObjectAndLayerIdColor();
      vcolor = getColor();
      forwardLinearDepthToReadShadowMap();`)),a){case 0:case 1:case 2:t.include(A,e),r.include(D,e),r.include(j,e),t.include(L,e),r.include(h,e),t.include(ne,e),C(r,e),k(r),M(r),r.uniforms.add(n.uniforms.get(`localOrigin`),new g(`ambient`,e=>e.ambient),new g(`diffuse`,e=>e.diffuse),new m(`opacity`,e=>e.opacity)),r.include(S),r.include(P,e),I(r),r.main.add(d`
        discardBySlice(vpos);

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        vec3 posWorld = vpos + localOrigin;
        vec3 normalGround = ${o?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;

        ${u(c,d`float snow = getSnow(normal, normalGround);
                 albedo = mix(albedo, vec3(1), snow);
                 ssao = mix(ssao, 1.0, snow);`)}

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        float shadow = readShadow(additionalAmbientScale, vpos);

        ${u(s===2,`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];\n           ${u(c,`mrr = applySnowToMRR(mrr, snow);`)}`)}

        vec3 shadedColor = ${s===2?`evaluateSceneLightingPBR(normal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:`evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        vec4 finalColor = vec4(shadedColor, combinedOpacity);
        outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${u(c,`, snow`)});`);break;case 3:t.include(T),n.main.add(d`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(h,e),r.main.add(d`discardBySlice(vpos);`);break;case 5:case 6:case 7:case 8:t.include(T),ae(t),i.add(`depth`,`float`),n.main.add(d`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);`),t.fragment.include(h,e),t.include(N,e),r.main.add(d`discardBySlice(vpos);
outputDepth(depth);`);break;case 11:t.fragment.include(h,e),r.main.add(d`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);break;case 4:t.include(T),t.include(B,e),b(n),i.add(`vnormal`,`vec3`),n.main.add(d`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
vnormal = normalize((viewNormal * vec4(localNormal(extrudedVertex), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(h,e),r.main.add(d`discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case 10:t.include(T),t.include(B,e),i.add(`vnormal`,`vec3`),n.main.add(d`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(h,e),t.include(x,e),r.main.add(d`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`)}return t}var pe=Object.freeze(Object.defineProperty({__proto__:null,build:$},Symbol.toStringTag,{value:`Module`}));export{se as a,oe as c,Y as i,V as l,pe as n,K as o,fe as r,q as s,$ as t};