/*
Fragment shader for webGL GLSL
this is mostly identical to an openGL GLSL file and closer still to an openGL-ES GLSL file.
(web)GLSL uses vertex shaders for geometry, and fragment shaders for pixels.
This is a fragment shader, the vertex supplied is a full screen quad, so it's covering the entire viewport, so in this example the fragment shder does all the work.
This is the vertex shader that this fragment shader uses:
                        "void main() { gl_Position = vec4( position, 1.0 );  }")
This kind of setup is what you see on sites like shadertoy.
Fragment shders when used with vertex shaders make up most of the webGL API
*/

// that was a multiline comment, this is a single line comment

// the uniform variables are supplied by the code that compiles the shader, which when using webGL, is javascript.
// uniform variables are the same for the entire duration of the frame, but may change once the screen is finished rendering.
// for example the time counter:
uniform float u_time; // this is supplied by the javascript every frame.
                      // if we're running at 60 frames per second, it increases by 0.016666 each frame.
                      // it's a floating point variable which has a decimal fraction with a precision to several decimal places.
                      // (as opposed to integers, which are whole numbers)
                      // we're declaring it here so the shader knows it's a variable we're going to use.
// this is another uniform variable - the mouse position:
uniform vec2 u_mouse;  // its a vec2, which is a two part variable:
                       // u_mouse.x and u_mouse.y, which are both floating point numbers.
                       // vec stands for vector, you may know this term from mathematics. It just means it's more than one number.
// another two part vector = the screen resolution:
uniform vec2 u_resolution; // again we aren't setting it here, just declaring it.
                           // if you resize the browser, this will change
                           // weirdly both this and the mouse position use floating point numbers, but usually they are integers.
                           // this is because javascript can't supply an integer variable type.

uniform sampler2D u_tiles;
uniform sampler2D u_tilemap;

void main() {
  float offsetx = 0.00;
  float offsety = 0.00;

  offsetx = u_mouse.x;
  offsety = u_mouse.y;

  float tilex = (gl_FragCoord.x+offsetx)/16384.00;
  float tiley = (gl_FragCoord.y+offsety)/16384.00;

  vec4 tile = texture2D(u_tilemap, vec2(tilex,tiley));

  float tilenumx = (3.00-(tile.g*256.00))/4.00;
  float tilenumy = (3.00-(tile.b*256.00))/4.00;

  if(tile.r<0.5) discard;

  float fracx = floor(mod(gl_FragCoord.x+offsetx, 64.00));
  float fracy = floor(mod(gl_FragCoord.y+offsety, 64.00));

  vec4 col = texture2D(u_tiles, vec2(tilenumx+fracx/256.00,tilenumy+fracy/256.00));

  gl_FragColor = vec4(col.r, col.g, col.b, col.a);
}