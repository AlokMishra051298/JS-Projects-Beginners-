const clap=["clap1.wav","clap2.wav","clap3.wav","clap4.wav","clap5.wav","clap6.wav"];
const crash=["crash1.wav","crash2.wav","crash3.wav","crash4.wav"];
const hihat = ["hihat-808.wav","hihat-acoustic01.wav","hihat-acoustic02.wav","hihat-analog.wav","hihat-digital.wav","hihat-dist01.wav","hihat-dist02.wav","hihat-electro.wav","hihat-plain.wav","hihat-reso.wav","hihat-ring.wav"];
const kick = ["kick-808.wav","kick-acoustic01.wav","kick-acoustic02.wav","kick-big.wav","kick-classic.wav","kick-cultivator.wav","kick-deep.wav","kick-dry.wav","kick-electro01.wav","kick-electro02.wav","kick-floppy.wav","kick-gritty.wav","kick-heavy.wav","kick-newwave.wav","kick-oldschool.wav","kick-plain.wav","kick-slapback.wav","kick-softy.wav","kick-stomp.wav","kick-tape.wav","kick-thump.wav","kick-tight.wav","kick-tron.wav","kick-vinyl01.wav","kick-vinyl02.wav","kick-zapper.wav"];
const openhat = ["openhat-808.wav","openhat-acoustic01.wav","openhat-analog.wav","openhat-slick.wav","openhat-tight.wav"];
const snare = ["snare-808.wav","snare-acoustic01.wav","snare-acoustic02.wav","snare-analog.wav","snare-big.wav","snare-block.wav","snare-brute.wav","snare-dist01.wav","snare-dist02.wav","snare-dist03.wav","snare-electro.wav","snare-lofi01.wav","snare-lofi02.wav","snare-modular.wav","snare-noise.wav","snare-pinch.wav","snare-punch.wav","snare-smasher.wav","snare-sumo.wav","snare-tape.wav","snare-vinyl01.wav","snare-vinyl02.wav"]
const tom =["tom1.wav","tom2.wav","tom3.wav","tom4.wav","tom5.wav","tom6.wav","tom7.wav","tom8.wav","tom9.wav"];
function playAudio(audioType){
    let index = parseInt(Math.random()* audioType.length);
    audio = new Audio("sound/"+ audioType[index])
    audio.play();
}


function setColor(randomColor){
  // let index = parseInt(Math.random()* audioList.length);
  // audio = new Audio("sound/"+ audioList[index])
  // audio.play();
  setTimeout(playAudio(tom),5000);
  setTimeout(playAudio(clap),5000);
  setTimeout(playAudio(snare),5000);
  setTimeout(playAudio(kick),5000);
  setTimeout(playAudio(kick),5000);
  setTimeout(playAudio(kick),2500);
  setTimeout(playAudio(kick),2500);
  setTimeout(playAudio(hihat),5000);
  setTimeout(playAudio(tom),5000);
  setTimeout(playAudio(kick),5000);
  var body = document.body;
  body.style.backgroundColor=randomColor;
  var span = document.querySelector(".color");
  span.innerText = "\t"+randomColor;
}

function changeColor(){
  var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
  setColor(randomColor);
}

const stopDisco = () => {
  var btn = document.querySelector("button");
  // btn.setAttribute("class", "on");
  audio.pause();
  setColor("#ffffff");
}

function startDisco(){
  var btn = document.querySelector("button");
  // var btnClass = btn.getAttribute("class");
  changeColor();
  let interval =  setInterval(changeColor, 500);
    var stopBtn = document.querySelector(".stop")
    stopBtn.addEventListener('click', function () {
        clearInterval(interval);
        stopDisco();
    })
}
