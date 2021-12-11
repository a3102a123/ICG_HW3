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
 // TODO : Calculate the Toon Shading with 5 level of threshold
 // Hint :
 //		  1. Calculate the color inteensity determined by the angles between the Light and normal vectors
 //		  2. The "albedo" variable is the color(texture) of a pixel
 //		  3. Using EdgeFlag to determine whether or not to add the edge color to "every pixel"
 //		  4. Using the angle between view and pixel to determine the edge intensity (be careful of that the pixel of edge should have higher intensity of edge color)
 //				- you can using the color you like to draw the edge

 vec4 albedo = texture2D(texture, uv);
 float edge_intensity = 0;
 vec4 edge_color = vec4(1, 1, 1, 1)  * pow(edge_intensity,5);
 vec4 diffuse;

 // it's the color which only contain texture , you need change the output to toon shading result
 color = albedo;

}