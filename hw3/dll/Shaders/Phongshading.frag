#version 430

uniform sampler2D texture;
vec3 WorldCamPos = vec3(7.5, 5.0, 7.5);
uniform vec3 WorldLightPos;
uniform vec3 Ka;
uniform vec3 Kd;
uniform vec3 Ks;
uniform vec3 La;
uniform vec3 Ld;
uniform vec3 Ls;
uniform int  gloss;
uniform bool EdgeFlag;

in vec2 uv;
in vec3 normal;
in vec4 worldPos;

out vec4 color;
void main()
{
	vec3 pos = vec3(worldPos.x, worldPos.y, worldPos.z);
	vec3 L = normalize(WorldLightPos - pos);
	vec3 V = normalize(WorldCamPos - pos);
	vec3 R = reflect(-L, normal);
	vec3 H =normalize( (L+V));

	vec4 albedo = texture2D(texture, uv);

	vec4 ambient = vec4(La, 1.0) * vec4(Ka, 1.0) * albedo;
	vec4 diffuse = vec4(Ld, 1.0) * vec4(Kd, 1.0) * albedo * max(dot(L, normal), 0);

	vec3 specularPhong = Ls * Ks * pow(max(0, dot(V, R)), gloss/4.0);
	vec3 specularBlinn = Ls * Ks * pow(dot(normal, H), gloss);
	
	vec3 specular = mix(specularPhong, specularBlinn, 0);

	float edge;
	vec4 edge_color = vec4(1, 1, 1, 1);
	edge = 1 - max(0, dot(normal, V));
	color = ambient + diffuse + vec4(specular, 1.0);
	if(EdgeFlag){
		color += pow(edge,5) * edge_color;
	}
	//color = texture2D(texture, uv);
} 