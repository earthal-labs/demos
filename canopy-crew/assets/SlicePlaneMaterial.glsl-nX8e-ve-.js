import{n as e,r as t}from"./Uniform-DbW1Stte.js";import{t as n}from"./ShaderBuilder-CGRMmuSM.js";import{t as r}from"./FloatPassUniform-BgZa4F-S.js";import{t as i}from"./Float4PassUniform-BK2Jlamx.js";import{c as a,i as o,o as s,t as c}from"./OutputColorHighlightOLID.glsl-nI0MTdxz.js";function l(l){let u=new n,{vertex:d,fragment:f,attributes:p,varyings:m}=u;return a(d,l),u.include(c,l),f.include(o),f.include(s),p.add(`position`,`vec3`),p.add(`uv0`,`vec2`),m.add(`vUV`,`vec2`),d.main.add(t`vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);`),f.uniforms.add(new i(`backgroundColor`,e=>e.backgroundColor),new i(`gridColor`,e=>e.gridColor),new r(`gridWidth`,e=>e.gridWidth)).main.add(t`
    const float LINE_WIDTH = 1.0;

    vec2 uvScaled = vUV * gridWidth;
    vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
    vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);

    // mask aliasing along edges
    grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
    grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);

    float gridFade = max(grid.x, grid.y);
    float gridAlpha = gridColor.a * gridFade;

    // premultiply alpha in output
    vec4 finalColor =
      premultiplyAlpha(backgroundColor) * (1.0 - gridAlpha) +
      premultiplyAlpha(vec4(gridColor.rgb, gridAlpha));
    ${e(l.emissionDimmingPass,`if (finalColor.a > alphaCutoff) { finalColor.rgb /= finalColor.a; }`)}
    outputColorHighlightOLID(finalColor, finalColor.rgb);`),u}var u=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:`Module`}));export{l as n,u as t};