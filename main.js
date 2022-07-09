canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

alien_width = 100;
alien_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";
alien_image =  "alien1.jpg";

rover_x = 10;
rover_y = 10;

alien_x = 80;
alien_y = 80;

function add() {
    background_imgTag = new Image(); //define una variable con la imagen nuevae
    background_imgTag.onload = uploadBackground; // establece la función para cargar esta variable
    background_imgTag.src = background_image;   // carga la imagen

    rover_imgTag = new Image(); //define una variable para la imagen nueva
    rover_imgTag.onload = uploadrover; // establece la función para cargar esta variable
    rover_imgTag.src = rover_image;   // carga la imagen

    alien_imgTag = new Image(); //define una variable para la imagen nueva
    alien_imgTag.onload = uploadrover; // establece la función para cargar esta variable
    alien_imgTag.src = alien_image;   // carga la imagen

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
    ctx.drawImage(alien_imgTag, alien_x, alien_y, alien_width, alien_height);
}

window.addEventListener("keydown", my_keydown);
//addEventListener = a "el chismoso" avisa cualquier movimiento

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
        //
        if(keyPressed == '87')
        {
            arriba();
            console.log("arriba");
        }
        if(keyPressed == '83')
        {
            abajo();
            console.log("abajo");
        }
        if(keyPressed == '65')
        {
            izquierda();
            console.log("izquierda");
        }
        if(keyPressed == '68')
        {
            derecha();
            console.log("derecha");
        }
}

function up()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
         uploadBackground();
         uploadrover();
    }
}
function down()
{
    if(rover_y <=500)
    {
        rover_y =rover_y+ 10;
        console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
         uploadrover();
    }
}
function left()
{
    if(rover_x >= 0)
    {
        rover_x =rover_x - 10;
        console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
         uploadrover();
    }
}
function right()
{
    if(rover_x <= 700)
    {
        rover_x =rover_x + 10;
        console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
//
function arriba()
{
    if(alien_y >=0)
    {
        alien_y =alien_y - 10;
        console.log("When up arrow is pressed,  x = " + alien_x + " | y = " +alien_y);
         uploadBackground();
         uploadrover();
    }
}
function abajo()
{
    if(alien_y <=500)
    {
        alien_y =alien_y+ 10;
        console.log("When down arrow is pressed,  x = " + alien_x + " | y = " +alien_y);
        uploadBackground();
         uploadrover();
    }
}
function izquierda()
{
    if(alien_x >= 0)
    {
        alien_x =alien_x - 10;
        console.log("When left arrow is pressed,  x = " + alien_x + " | y = " +alien_y);
        uploadBackground();
         uploadrover();
    }
}
function derecha()
{
    if(alien_x <= 700)
    {
        alien_x =alien_x + 10;
        console.log("When right arrow is pressed,  x = " + alien_x + " | y = " +alien_y);
        uploadBackground();
        uploadrover();
    }
}    