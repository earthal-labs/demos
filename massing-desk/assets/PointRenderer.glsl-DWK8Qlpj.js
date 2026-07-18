import{t as e}from"./mathUtils-D79yUFwW.js";import{D as t}from"./vec2-C5dJMieJ.js";import{c as n}from"./vec3f64-DIOQknMY.js";import{A as r,_ as i}from"./mat4-BL30OFHW.js";import{P as a}from"./vec3-CMyaVPVc.js";import{t as o}from"./mat4f64-E_FXCKxO.js";import{o as s}from"./vec2f64-IO40D2xB.js";import{T as c,W as l}from"./aaBoundingBox-Cn2CzgQW.js";import{t as u}from"./NoParameters-XZJ-8n06.js";import{f as d}from"./ShaderOutput-BpkC-wrv.js";import{n as f,t as p}from"./glsl-D85RBwKC.js";import{t as m}from"./Float3DrawUniform-C2uWcyOr.js";import{t as h}from"./Matrix4BindUniform-DnHs9Hq_.js";import{t as g}from"./Matrix4DrawUniform-CQqS-mc3.js";import{n as _,r as v}from"./Slice.glsl-BqTbVez5.js";import{t as y}from"./OutputHighlight.glsl-CfLvc4dK.js";import{t as b}from"./PositionOutsideClipSpace-CLdt_M-O.js";import{t as x}from"./Float2PassUniform-BYZ61_RB.js";import{t as S}from"./ShaderBuilder-DEBj6tn_.js";import{t as C}from"./Float2DrawUniform-BbCPIPVz.js";var w=class extends u{constructor(){super(...arguments),this.clipBox=l(c),this.useFixedSizes=!1,this.useRealWorldSymbolSizes=!1,this.scaleFactor=1,this.minSizePx=0,this.size=0,this.sizePx=0}get fixedSize(){return this.drawScreenSpace?this.sizePx:this.size}get screenMinSize(){return this.useFixedSizes?0:this.minSizePx}get drawScreenSpace(){return this.useFixedSizes&&!this.useRealWorldSymbolSizes}},T=class extends v{constructor(e,t,n){super(e),this.origin=e,this.isLeaf=t,this.splatSize=n}};function E(n){let o=new S,s=d(n.output),{attributes:c,vertex:l,fragment:u}=o;return c.add(`position`,`vec3`),c.add(`color`,`vec3`),l.include(_,n),l.uniforms.add(new g(`modelView`,(e,t)=>i(O,t.camera.viewMatrix,r(O,e.origin))),new h(`proj`,e=>e.camera.projectionMatrix),new C(`screenMinMaxSize`,(e,n,r)=>t(A,r.useFixedSizes?0:r.minSizePx*n.camera.pixelRatio,D(e.isLeaf)*n.camera.pixelRatio)),n.useFixedSizes?new x(`pointScale`,(e,n)=>t(A,e.fixedSize*n.camera.pixelRatio,n.camera.fullHeight)):new C(`pointScale`,(e,n,r)=>t(A,e.splatSize*r.scaleFactor*n.camera.pixelRatio,n.camera.fullHeight/n.camera.pixelRatio))),n.clippingEnabled?l.uniforms.add(new m(`clipMin`,(e,t,n)=>a(k,n.clipBox[0]-e.origin[0],n.clipBox[1]-e.origin[1],n.clipBox[2]-e.origin[2])),new m(`clipMax`,(e,t,n)=>a(k,n.clipBox[3]-e.origin[0],n.clipBox[4]-e.origin[1],n.clipBox[5]-e.origin[2]))):(l.constants.add(`clipMin`,`vec3`,[-e,-e,-e]),l.constants.add(`clipMax`,`vec3`,[e,e,e])),s&&o.varyings.add(`vColor`,`vec3`),l.main.add(f`
    // Move clipped points outside of clipspace
    if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
      position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
      gl_Position = ${b};
      gl_PointSize = 0.0;
      return;
    }

    if (rejectBySlice(position)) {
      gl_Position = ${b};
      gl_PointSize = 0.0;
      return;
    }

    // Position in camera space
    vec4 camera = modelView * vec4(position, 1.0);

    float pointSize = pointScale.x;
    vec4 position = proj * camera;
    ${n.drawScreenSize?f`float clampedScreenSize = pointSize;`:f`float pointRadius = 0.5 * pointSize;
           vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
           vec4 positionOffset = proj * cameraOffset;
           float radius = abs(positionOffset.y - position.y);
           float viewHeight = pointScale.y;
           // screen diameter = (2 * r / w) * (h / 2)
           float screenPointSize = (radius / position.w) * viewHeight;
           float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
           // Shift towards camera, to move rendered point out of terrain i.e. to
           // the camera-facing end of the virtual point when considering it as a
           // 3D sphere.
           camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
           position = proj * camera;`}

    gl_PointSize = clampedScreenSize;
    gl_Position = position;
    ${s?f`vColor = color;`:``}`),o.include(y,n),s&&(o.outputs.add(`fragColor`,`vec4`,0),n.hasEmission&&o.outputs.add(`fragEmission`,`vec4`,1)),u.main.add(f`
    vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
    float r2 = dot(vOffset, vOffset);

    if (r2 > 0.25) {
      discard;
    }
    calculateOcclusionAndOutputHighlight();
    ${p(s,`fragColor = vec4(vColor, 1.0);\n      ${p(n.hasEmission,`fragEmission = vec4(vec3(0.0), 1.0);`)}`)}
  `),o}function D(e){return e?256:64}var O=o(),k=n(),A=s(),j=Object.freeze(Object.defineProperty({__proto__:null,PointRendererDrawParameters:T,PointRendererPassParameters:w,build:E,getMaxPointSizeScreenspace:D},Symbol.toStringTag,{value:`Module`}));export{E as a,w as i,D as n,T as r,j as t};