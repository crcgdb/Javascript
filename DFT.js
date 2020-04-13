let time = 0;
let wave = [];

function setup() {
    createCanvas(600, 400);
}
function draw() {
    background(0);
    translate(175, 200);
 
    let x = 0;
    let y = 0;
             //change value of i to increase # axis
    for (let i = 0; i < 4; i++) {
        let prevx = x;
        let prevy = y;
        let n = i * 2 + 1;
        let radius = 75 * (4 / (n * PI)) ;
        x += radius * cos(n * time);
        y += radius * sin(n * time);
            //change color of 
        stroke(255, 0, 15);
        noFill();
        ellipse(prevx, prevy, radius * 2)
        fill(255);
        stroke(240);
        line(prevx, prevy,x,y);
   
        }  

             //unshift to connect wave to ellipse
        wave.unshift(y);

     beginShape();
        stroke(200, 90);
        noFill();
        translate(200, 0);
        line(x-200,y,0,wave[0]);
        for(let i = 0; i < wave.length; i++) {
       vertex(i, wave[i]);
        }      

   endShape();
             //change time value to inc/dec speed
             // +/- will change direction of series
     time += 0.03;

        if (wave.length > 500) {
        wave.pop();
    }
}