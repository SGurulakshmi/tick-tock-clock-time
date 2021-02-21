 

function setup() 
{
  createCanvas(600,600);
}

function draw() 
{
  background("orange");  
    
  hr = hour();
  mn = minute();
  sc = second(); 

  textSize(25)
  stroke("black");
  text("12",300,130)

  textSize(25)
  stroke("black");
  text("3",470,310)

  textSize(25)
  stroke("black");
  text("6",300,500)

  textSize(25)
  stroke("black");
  text("9",120,310)

//creating second hand for clock
    strokeWeight(8)
    stroke("red")
    scAngle = map(sc,200,360,0,360)
    arc(300,300,300,300,0,scAngle)

    // push();
    // rotate(scAngle);
    // stroke("red");
    // strokeWeight(7);
    // line(300,300,350,300);
    // pop();

//creating minute hand for clock

    strokeWeight(8)
    stroke("blue")
    mnAngle = map(mn,200,360,0,360)
    arc(300,300,280,280,0,mnAngle)

    // push();
    // rotate(mnAngle);
    // stroke("blue");
    // strokeWeight(7);
    // line(0,0,100,0);
    // pop();

//creating hour hand for clock

    strokeWeight(8)
    stroke("yellow")
    hrAngle = map(hr % 12,200,360,0,360)
    arc(300,300,260,260,0,hrAngle)
    
    // push();
    // rotate(hrAngle);
    // stroke("yellow");
    // strokeWeight(7);
    // line(0,0,100,0);
    // pop();

    drawSprites();
}