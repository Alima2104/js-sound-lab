let synth = new Tone.Synth().toMaster();

function createDiv(color){
  var newDiv = document.createElement('div');
  newDiv.style.position = "absolute";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.backgroundColor = color;
  newDiv.style.top = window.innerHeight * Math.random() + "px";
  newDiv.style.left = window.innerWidth * Math.random() + "px";

  // newDiv.addEventListener('click', function(){
  //   newDiv.remove();
  // });
  document.body.appendChild(newDiv);


var timeoutHandle = setTimeout(function(){
  newDiv.remove();
}, 1000);
}

document.body.addEventListener('keypress', (event) => {
  if(event.key == 'w'){
    synth.triggerAttackRelease('C3', '4n')
    document.body.style.backgroundColor = "orange";
    createDiv("orange");

  }else if(event.key == 'e'){
    synth.triggerAttackRelease('C4', '4n')
    document.body.style.backgroundColor = "cyan";
    createDiv("blue");

  }else if(event.key == 'r'){
    synth.triggerAttackRelease('C5', '4n')
    document.body.style.backgroundColor = "pink";
    createDiv("pink");

  }
})


let interactable = document.getElementById("interactable")
let player = document.getElementById("player")

interactable.addEventListener('mouseenter', () => {
  player.play();
})

interactable.addEventListener('mouseleave', () => {
  player.pause();
})



player.addEventListener('play', () => {
  document.body.style.backgroundColor = "black";
})

player.addEventListener('timeupdate', () => {
  console.log("the current time is:", player.currentTime)

  if(player.currentTime > 5){
    interactable.style.borderRadius = "30px";

  }
  if(player.currentTime > 7){
    music_reply1.style.borderRadius = "35px";

  }
  if(player.currentTime > 9){
    music_reply2.style.borderRadius = "40px";

  }
  if(player.currentTime > 11){
    music_reply3.style.borderRadius = "50px";
  }
  if(player.currentTime > 12 && player.currentTime < 30){
    interactable.style.transition = "2s";
    interactable.style.backgroundColor = "#F79256";

  }
  if(player.currentTime > 15 && player.currentTime < 30){
    music_reply1.style.backgroundColor = "#FBD1A2";
  }
  if(player.currentTime > 20 && player.currentTime < 30){
    music_reply2.style.backgroundColor = "#7DCFB6";
  }
  if(player.currentTime > 25 && player.currentTime < 30){
    music_reply3.style.backgroundColor = "#00B2CA";
  }
  if(player.currentTime > 35){
    interactable.style.backgroundColor = "black";
    music_reply1.style.backgroundColor = "black";
    music_reply2.style.backgroundColor = "black";
    music_reply3.style.backgroundColor = "black";
  }

  player.addEventListener('pause', () => {
    document.body.style.backgroundColor = "white";
  })
})
