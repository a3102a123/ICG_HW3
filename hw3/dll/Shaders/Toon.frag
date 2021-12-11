uniform sampler2D texture;
uniform vec3 WorldLightPos;
uniform vec3 WorldCamPos;
uniform vec3 Kd;
uniform bool EdgeFlag;

in vec2 uv;
in vec3 normal;
in vec4 worldPos;

out vec4 color;

void main()
{
 vec3 pos = vec3(worldPos.x, worldPos.y, worldPos.z);
 vec3 L = normalize(WorldLightPos - pos);
 vec3 V  = normalize(WorldCamPos - pos);

 vec4 albedo = texture2D(texture, uv);
 vec4 diffuse;
 float edge;

 vec4 edge_color = vec4(1, 1, 1, 1);

 float intensity = dot(L,normal);

 if (intensity > 0.95)      diffuse = vec4(1.0, 1.0, 1.0, 1.0);
 else if (intensity > 0.75) diffuse = vec4(0.8, 0.8, 0.8, 1.0);
 else if (intensity > 0.50) diffuse = vec4(0.6, 0.6, 0.6, 1.0);
 else if (intensity > 0.25) diffuse = vec4(0.4, 0.4, 0.4, 1.0);
 else diffuse = vec4(0.2, 0.2, 0.2, 1.0);

 edge = 1 - max(0, dot(normal, V));

 color = diffuse * vec4(Kd, 1.0) * albedo;
 if(EdgeFlag){
		color += pow(edge,5) * edge_color;
 }

}