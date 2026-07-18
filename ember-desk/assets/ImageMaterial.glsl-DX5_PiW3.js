import{n as e,r as t}from"./Uniform-DbW1Stte.js";import{t as n}from"./NoParameters-ZDc3QXO4.js";import{t as r}from"./ShaderBuilder-CGRMmuSM.js";import{t as i}from"./FloatPassUniform-BgZa4F-S.js";import{t as a}from"./Texture2DPassUniform-BH3IXb0x.js";import{r as o}from"./Slice.glsl-CyUIov5k.js";import{c as s,o as c,t as l}from"./OutputColorHighlightOLID.glsl-nI0MTdxz.js";import{t as u}from"./Transform.glsl-iLLevyFN.js";var d=class extends n{};function f(n){let d=new r,{vertex:f,fragment:p,varyings:m}=d,{output:h,perspectiveInterpolation:g,emissionDimmingPass:_}=n;return s(f,n),d.include(u),d.fragment.include(o,n),d.fragment.code.add(t`void outputObjectAndLayerIdColor() {
    ${e(h===11,`fragColor = vec4(0, 0, 0, 1);`)}
    }`),d.include(l,n),d.attributes.add(`position`,`vec3`),d.attributes.add(`uv0`,`vec2`),g&&d.attributes.add(`perspectiveDivide`,`float`),f.main.add(t`
    vpos = position;
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${e(g,`gl_Position *= perspectiveDivide;`)}`),m.add(`vpos`,`vec3`,{invariant:!0}),m.add(`vTexCoord`,`vec2`),p.include(c),p.uniforms.add(new i(`opacity`,e=>e.opacity),new a(`tex`,e=>e.texture)).main.add(t`
    discardBySlice(vpos);
    vec4 finalColor = texture(tex, vTexCoord) * opacity;
    ${e(_,`if (finalColor.a > 0.0) { finalColor.rgb /= finalColor.a; }`)}
    outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),d}var p=Object.freeze(Object.defineProperty({__proto__:null,ImageMaterialPassParameters:d,build:f},Symbol.toStringTag,{value:`Module`}));export{p as n,d as r,f as t};