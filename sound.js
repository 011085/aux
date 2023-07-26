let xpos = 1;
let xdire = 1;
let ypos = 1;
let ydire = 1;

function preload(){
    sound = loadSound('f.wav');
  }
  
  function setup(){
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.mouseClicked(togglePlay);
    fft = new p5.FFT();
    sound.amp(0.6);
    rectMode(CENTER);
  }
  
  function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
  }
  



  function draw(){
    background(20);
  /*
    let spectrum = fft.analyze();
    noStroke();
    fill(255, 0, 255);
    for (let i = 0; i< spectrum.length; i++){
      let x = map(i, 0, spectrum.length, 0, width);
      let h = -height + map(spectrum[i], 0, 255, height, 0);
      rect(x, height, width / spectrum.length, h )
    }
  */

    let waveform = fft.waveform();
    noFill();
    //beginShape();
    stroke(255, 120);

    for (let i = 0; i < waveform.length; i+=190){
      strokeWeight(0.5);
      rect(width/2, height/2, waveform[i]*random(1500)-mouseX, waveform[1]*random(1500)-mouseY);
    }
    //endShape();
    stroke(255);
    strokeWeight(0.5);


    
    text('Aux - Faraday (Click to Play)', 100, 50);
    

for (let y=0; y<height; y+=5) {

    point(width*sin(xpos*35), y);
    strokeWeight(5);
    stroke(255,90);
    xpos = xpos + xdire;
    ypos = ypos + xdire;

}
    

    if (xpos>height) {
    
      xdire *= - 1;
      ypos = ypos + 1;
  
    }
  
    if (xpos<0) {
      
      xdire *= - 1;
      ypos = ypos + 1;
    }


  }
  
  function togglePlay() {
    if (sound.isPlaying()) {
      for (let y=0; y<height; y+=5) {

        point(width*sin(xpos*3), y);
        strokeWeight(50);
        stroke(255,30);
        xpos = xpos + xdire;
        ypos = ypos + xdire;
    
    }
      
    } else {
      sound.play();
    }
  }
