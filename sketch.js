var boy,path,coin,energyDrink,bomb;
 var boyImg;
  var pathImg;  
   var coinImg;  
    var energyDrinkImage;
     var bombImg;

      //pre-load images
       function preload()
     {
       //loading Animation to the boy 
       boyImg = loadAnimation("Runner-1.png","Runner-2.png");
      
       //loading Image to the path
       pathImage = loadImage("path.png")
    
     }

      function setup()
     {
      createCanvas(350,400);
    

      invisiblePath1 = createSprite(8,367, 28, 10020);
      invisiblePath1.visible = false;
      invisiblePath2 = createSprite(350, 260, 45, 10020);
      invisiblePath2.visible = false;
    
      
      
      

    //create sprites here
      path = createSprite(160,200); 
      path.addImage("moving",pathImage);
      path.velocityY =8;
      //path.scale=1.2;
    


      boy = createSprite(200,301,100,100)
      boy.addAnimation("running",boyImg);
      boy.scale=0.08
      
    }

       function draw() 
    {
       edges = createEdgeSprites();
       
       
  
       
       if (path.y >400)
    {
        path.y = height/2;
    }
      
       
       
        boy.collide(invisiblePath1);
        boy.collide(invisiblePath2);
        background("orange");
        drawSprites();
        boy.x = World.mouseX;   
    }
