function setup() {
    createCanvas(500, 500);
    background("Black");
  }
  
  
  function draw() {
    
    
    
    stroke("black");
    fill("red");
    
    console.log(mouseIsPressed);
    
    
    if(mouseIsPressed)
       {
         rect(mouseX, mouseY, 50, 50);
         
       }
   
    
    
    
    
    
    
  }