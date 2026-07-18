import{y as e}from"./mat4-BL30OFHW.js";import{t}from"./mat4f64-E_FXCKxO.js";import{t as n}from"./Matrix4BindUniform-DnHs9Hq_.js";function r(t,r={needUVs:!0,needEyeDirection:!0}){t.attributes.add(`position`,`vec2`),t.varyings.add(`worldRay`,`vec3`);let{needUVs:a,needEyeDirection:o}=r;t.vertex.uniforms.add(new n(`inverseProjectionMatrix`,e=>e.camera.inverseProjectionMatrix),new n(`inverseViewMatrix`,t=>e(i,t.camera.viewMatrix))).main.add(`
    gl_Position = vec4(position, 1, 1);

    vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1.0, 1.0)).xyz;
    worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
  `),a&&(t.varyings.add(`uv`,`vec2`),t.vertex.main.add(`uv = position * 0.5 + vec2(0.5);`)),o&&(t.varyings.add(`eyeDir`,`vec3`),t.vertex.main.add(`eyeDir = posViewNear;`))}var i=t();export{r as t};