import{r as e}from"./Uniform-DbW1Stte.js";import{t}from"./ShaderBuilder-CGRMmuSM.js";import{r as n}from"./Slice.glsl-CyUIov5k.js";import{t as r}from"./ObjectAndLayerIdColor.glsl-KoN2h-A7.js";import{t as i}from"./Float4PassUniform-BK2Jlamx.js";import{c as a,t as o}from"./OutputColorHighlightOLID.glsl-nI0MTdxz.js";import{t as s}from"./Transform.glsl-iLLevyFN.js";import{t as c}from"./VertexColor.glsl-DtG4gGL2.js";function l(l){let u=new t,{vertex:d,fragment:f,varyings:p}=u;return u.fragment.include(n,l),u.include(s),u.include(c,l),u.include(r,l),u.include(o,l),a(d,l),u.attributes.add(`position`,`vec3`),p.add(`vpos`,`vec3`,{invariant:!0}),d.main.add(e`vpos = position;
forwardVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),l.hasVertexColors||f.uniforms.add(new i(`constantColor`,e=>e.color)),f.main.add(e`
    discardBySlice(vpos);
    vec4 color = ${l.hasVertexColors?`vColor`:`constantColor`};
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),u}var u=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:`Module`}));export{u as n,l as t};