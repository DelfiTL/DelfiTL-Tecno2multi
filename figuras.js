function moverx(){
    if (x<=1500){
      x+=3;
      } else if (x>=1500){
        x=-10;
      }
  }


  
  function pantalla1() {
    let a =( 40/-mouseY );  //el número q divido me da el ángulo en comparación a la distancia q muevo el mouse, mas alto el numero mas limito el angulo
    let rotafig =(-50/mouseX);
    let tamh =(mouseY/10);
    let tama =(mouseX/5);
  
    push();
  translate(0,height);
  rotate(PI/a);
  rectMode (CENTER);
  fill (215,36,15)
 // rect(x, 100, 150, 150);
  rect(x, 100, tama, tamh); //cuadrado rojo grande
  rect(x-220, 40, tama-20, 20);  
  rect(x-40, 0, tama-80, 20); 

  fill (200, 80,10); //naranjas
  rect(x-500, 130, tama-10, 5); 
  rect(x-450, -200, tama-300, 5); 
  rect(x-600, 50, tama-50, 3); 
  rect(x-600, 130, tama-10, 5); 
  rect(x-450, 200, 80, 50); 
  rect(x-1000, 50, 450, 30); 


  fill (33, 64,120); //azul
  rect(x, -400, tama-80, 50); 
  rect(x-10, 30, 10, 5); 
  rect(x, -300, 300, 5); 
 
  rect(x-700, 150, 40, 30)
  
  fill (0);
  rect(x-600, 40, tama-120, 20);  
  rect(x, 300, 150, 20); 
  rect(x, 500, 40, 5); 
  rect(-x, -200, 50, 5); 
rect(-x, -2500, 10, 5); 
rect(-200-x, -1500, 10, 5); 

  push ();
  rotate (PI/rotafig);
  rect(x, 60, 10, 5); 
  rect(x, -200, 50, 5); 
  pop();
  }
  
  function pantalla2 (){
    let b = (400/mouseY); //si el numero es negativo gira en contra del sentido del reloj y positivo a favor del reloj
    let rotafig =(50/mouseX); // menor numero q divide mas amplitud de circunferencia
    let tamh =(mouseY/10);
    let tama =(mouseX/5);

  fill (200,10,0);
  noStroke ();
     push();
   translate(width, height/2);
    rotate(PI/b);
    
     rectMode (CENTER);
    push ();
     rotate (PI/rotafig); // se mueve con el mouseX
     rect(-x-120, 40, tama-120, 20);  //los valos de X son negativos para q se muevan hacia la izquierda
     rect(-x, 160, 10, 5);
    pop ();

    rect(-x, 0, 80, 20); 

    fill (33, 64,120); //figuras azules
    rect(-x, 30, 10, 5); 
  
    rect(-x, 30, 10, 5); 
    rect(-x, 350, 100, 5);
    rect(-x+550, 30, 10, 5); 
    rect(-x+600, 350, 100, 5);
    rect(-x+550, 120, 50, 50); 
    rect(-x+450, 90, 10, 5);

    fill (0);  //figuras negras
    rect (-x, 100, tama-250,50)
    rect(-x, -200, 50, 5); 
    rect(-x, 200, 10, 5); 
    rect(-x, 100, 10, 5); 
    rect (-x+700, 100, 70,50)
    rect(-x+250, -200, 10, 5); 
    rect(-x+400, 50, 10, 5); 
    rect(-x+400, 100, 10, 5); 
    rect(-x+450, 20, 200, 5); 
    pop();
    
  }