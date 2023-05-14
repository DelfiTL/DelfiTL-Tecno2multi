let x=-10; //posx de las figuras
//var otra forma de declarar variable
/*falta:
#agregar las imagenes y cargarlas a un arreglo
#agregar variacion de tam y/o  color 
#cambio de saturacion
#cual va a ser la interraccion
*/

/*PImage en p5js
#necesito una varible para el nombre de las img y otra para el array, desp le asigno img al array
function preload() {} aca sucede la magia
un For(){} para cargar las img  por el nombre_00
*/
function preload() { //con esta funcion carga las img


}


function setup() {
  createCanvas(windowWidth,windowHeight);


}

function draw() {
  background (255,250,200);

angleMode(DEGREES); //cambia a angulo

pantalla1();
pantalla2 ();
moverx ();
}


function mouseClicked(){
 
}