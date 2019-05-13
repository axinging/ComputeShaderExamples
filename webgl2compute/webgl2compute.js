function createShader(gl, type, source){
   var shader = gl.createShader(type);
   gl.shaderSource(shader, source);
   gl.compileShader(shader);
   if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
   console.log(gl.getShaderInfoLog(shader));
   gl.deleteShader(shader);
}

function createTexture(active, data, format, type,width, height){
   var tex = gl.createTexture();
   gl.activeTexture(active);
   gl.bindTexture(gl.TEXTURE_2D, tex);
   gl.texStorage2D(gl.TEXTURE_2D, 1, format, width,height);
   gl.texSubImage2D(gl.TEXTURE_2D, 0, 0,0, width,height, gl.RGBA, type, data);
   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
   return tex
 }
 
 function createFBOTexture(active, format, width, height){
   var tex = gl.createTexture();
   gl.activeTexture(active);
   gl.bindTexture(gl.TEXTURE_2D, tex);
   gl.texStorage2D(gl.TEXTURE_2D, 1, format, width,height);
   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
   return tex
 }