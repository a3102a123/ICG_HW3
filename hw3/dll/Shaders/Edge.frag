uniform vec3 WorldCamPos;

in vec3 normal;
in vec4 worldPos;

out vec4 color;

void main()
{
	 vec3 pos = vec3(worldPos.x, worldPos.y, worldPos.z);
	 vec3 V  = normalize(WorldCamPos - pos);

	 float cos = 1 - max(0, dot(normal, V));

	 color = vec4(0, 0, 1, 1) * pow(cos, 5);
}