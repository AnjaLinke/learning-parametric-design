let audio;
let button;
var vol;

var volumeHistory = [];


function toggleAudio() {
  if (audio.isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
}

function preload(){
  // preload assets 
    //audio = new Audio ("OneDay.mp3");
    audio = loadSound(OneDay.mp3);
}

let fft;
let amp;

function setup() {
  createCanvas (768, 1146);
  //fft = new p5.FFT();
  //fft.setInput(audio);
  button = createButton ('toggle');
  button.mousePressed(toggleAudio);
  audio.play ();
  amp = new p5.Amplitude();
  amp.setInput(audio);
}

let time = 0;

function draw () {
  background ('#f8dfa9')
  //var vol = amp.getLevel ();
  //volumeHistory.push(vol);
  //for (var i = 0; i < volumeHistory.length; i ++);
}
