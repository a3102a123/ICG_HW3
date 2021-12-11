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

in vec2 uv;
in vec3 normal;
in vec4 worldPos;

out vec4 color;
void main()
{
	// TODO : Calculate the Blinn-Phong Shading
	// Hint :
	//		  1. See the formula of Phong-Blinn lighting model / reflection model (you can refer to "ICG_4Shading" slides)
	//		  2. For specular , gloss is the shininess coefficient and it's recommemded that 
	//				- using the quarter of gloss if you calculate sepcular in original Phong lighting model.
	//				- using the full of gloss if you calculate sepcular by halfway angle(Blinn-Phong).
	//		  3. The "albedo" variable is the color(texture) of a pixel

	vec4 albedo = texture2D(texture, uv);

	// it's the color which only contain texture , you need change the output to phong shading result  
	color = albedo;
} 