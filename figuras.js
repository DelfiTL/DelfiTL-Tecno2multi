function moverx(){
    if (x<=1500){
      x+=10;
      } else if (x>=1500){
        x=-10;
      }
  }


  
  function pantalla1() {
    let a =( 40/-mouseY );  //el número q divido me da el ángulo en comparación a la distancia q muevo el mouse, mas alto el numero mas limito el angulo
  push();
  translate(0,height);
  rotate(PI/a);
  rectMode (CENTER);
  rect(x-120, 40, 120, 20); 
  rect(x, 0, 80, 20); 
  rect(x, 30, 10, 5); 
  rect(x, 60, 10, 5); 
  rect(x, -200, 50, 5); 
  pop();
  }
  
  function pantalla2 (){
  
   let b = (50/mouseY); //original mouseX
   let rotafig =(50/mouseX); // menor numero q divide mas amplitud de circunferencia
    push();
    translate(width, height);
  
    rotate(PI/b);
    
     rectMode (CENTER);
    push ();
     rotate (PI/rotafig); // se mueve con el mouseX
     rect(-x-120, 40, 120, 20); 
    pop ();
    rect(-x, 0, 80, 20); 
    rect(-x, 30, 10, 5); 
    rect(-x, 60, 10, 5); 
    rect(-x, -200, 50, 5); 
    pop();
    
  }