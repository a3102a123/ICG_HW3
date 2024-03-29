#version 430

layout(location = 0) in vec3 in_position;
layout(location = 1) in vec3 in_normal;
 
uniform mat4 M, V, P;

out vec3 normal;
out vec4 worldPos;

void main()
{
    gl_Position = P * V * M * vec4(in_position, 1.0);
    normal = normalize((transpose(inverse(M)) * vec4(in_normal, 1.0)).xyz);
    worldPos = M * vec4(in_position, 1.0);
}