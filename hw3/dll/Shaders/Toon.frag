uniform sampler2D texture;
uniform vec3 WorldLightPos;
uniform vec3 Kd;

in vec2 uv;
in vec3 normal;
in vec4 worldPos;

out vec4 color;

void main()
{
 vec3 pos = vec3(worldPos.x, worldPos.y, worldPos.z);
 vec3 L = normalize(WorldLightPos - pos);

 vec4 albedo = texture2D(texture, uv);
 vec4 diffuse;

float intensity = dot(L,normal);

if (intensity > 0.95)      diffuse = vec4(1.0, 1.0, 1.0, 1.0);
else if (intensity > 0.75) diffuse = vec4(0.8, 0.8, 0.8, 1.0);
else if (intensity > 0.50) diffuse = vec4(0.6, 0.6, 0.6, 1.0);
else if (intensity > 0.25) diffuse = vec4(0.4, 0.4, 0.4, 1.0);
else diffuse = vec4(0.2, 0.2, 0.2, 1.0);

 color = diffuse * vec4(Kd, 1.0) * albedo;
}