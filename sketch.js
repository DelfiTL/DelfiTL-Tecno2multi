let x=-10; //posx de las figuras

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
