let osc, freq, amp;
let pos = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Initiates oscillator 
  osc = new p5.Oscillator('sine');
  osc.start();
}

function draw() {
  background(220);
  // maps x mouse position to the amplitude of the sound
  amp = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
  osc.amp(amp, 0.1);
  
  noStroke();
  fill('blue');
  rect(0, pos, width, 20);
  rect(mouseX, pos, 20, 40);
}

function mouseWheel(event) {
  print(event.delta);
  pos += event.delta;
  // maps the scroll mouse position to the frequency the wave
  freq = constrain(map(pos, 25, 120, 50, 1200), 50, 1200);
  // map(value, start, to, result_start, result_to)
  osc.freq(freq, 0.1);
}