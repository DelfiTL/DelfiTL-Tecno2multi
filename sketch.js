
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

let x=-10; //posx de las figuras
let FiguraAmarilla = [];
let cant=10; //para el for de las img
let img;
function preload() { //con esta funcion carga las img

/*for (let i=0; 1<cant ; i++){
  let amarillo = 'assets/a-' +nf(i+1)+'.png';
  FiguraAmarilla[i]= loadImage(amarillo);
}*/

img= loadImage ('assets/am-01.png');
}


function setup() {
  createCanvas(windowWidth,windowHeight);


}

function draw() {
  background (255,250,200);
//image (FiguraAmarilla[amarillo], width/2, height/2, 100,100);
//image (img,500,500,100,100);
angleMode(DEGREES); //cambia a angulo

pantalla1();
pantalla2 ();
moverx ();
}


function mouseClicked(){
 
}