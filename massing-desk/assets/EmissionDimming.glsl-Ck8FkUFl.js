import{t as e}from"./ColorConversion.glsl-C9xFjUmo.js";import{n as t}from"./oitResolution.glsl-F61VOs5f.js";function n(n,r){n.include(e),n.include(t,r),n.code.add(`
    vec3 emissionDimming(in vec3 srcColor, float srcAlpha) {
      srcColor = rgb2hsv(srcColor);
      srcColor.g = srcAlpha;
      srcColor.b = 1.0;
      return hsv2rgb(srcColor);
    }
  `)}export{n as t};