#version 430

layout(location = 0) in vec3 in_position;
layout(location = 1) in vec3 in_normal;
layout(location = 2) in vec2 texcoord;


uniform mat4 M, V, P;

out vec2 uv;
out vec3 normal;
out vec4 worldPos;

void main() {
  // TODO : Pass the correlated vector to fragment shader
  // Hint :
  //		1. Look at the out variable name to guess what you need to pass
  //		2. See what you already have in fragment shader
  //		3. Be careful of the space of vector (make sure that you know how to calculate the Blinn-Phong Shading)
  //		4. The value passed to fragment shader will be Interpolated automatically
  
  normal = vec3(0,0,0);
  uv= vec2(0,0);
  worldPos = vec4(0.0,0.0,0.0, 1.0);

  gl_Position = P * V * M * vec4(in_position, 1.0);
}
