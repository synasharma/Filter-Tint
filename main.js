colour_pic=""
//Gloabk Variable being declared//
function preload()
{

}

function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(200,200);
    video= createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,540,480);
    tint(colour_pic);
}

function tint_filter()
{
    colour_pic=document.getElementById("input_color").value;
}

function take_snapshot()
{
    save("filtered_img.png");
}