// expose.js
window.addEventListener('DOMContentLoaded', init);


function init() {
  
  let currentImg = document.querySelector('img[alt="No image selected"]');
  let select = document.getElementById('horn-select');
  let sound = document.querySelector('audio');
  let click = document.querySelector('button');
  let setVol = document.getElementById('volume');
  let volIcon = document.querySelector('#volume-controls img');
  select.addEventListener("change", (event) => {
     let toChange = event.target.value;
     if(toChange == "air-horn")
     {
        currentImg.src = "assets/images/air-horn.svg";
        sound.src = "assets/audio/air-horn.mp3";
     }
     if(toChange == "car-horn")
     {
        currentImg.src = "assets/images/car-horn.svg";
        sound.src = "assets/audio/car-horn.mp3";
     }
     if(toChange == "party-horn")
     {
        currentImg.src = "assets/images/party-horn.svg";
        sound.src = "assets/audio/party-horn.mp3";
     }
  });
  setVol.addEventListener("input", (event) => {
    let currVol = event.target.value;
    sound.volume = currVol/100;
  });
  setVol.addEventListener("input", (event) => {
    let currVol = event.target.value;
    if(currVol == 0)
    {
      volIcon.src = "assets/icons/volume-level-0.svg";
      volIcon.alt = "Volume level 0";
    }
    else if(currVol <33)
    {
      volIcon.src = "assets/icons/volume-level-1.svg";
      volIcon.alt = "Volume level 1";
    }
    else if(currVol <67)
    {
      volIcon.src = "assets/icons/volume-level-2.svg";
      volIcon.alt = "Volume level 2";
    }
    else{
      volIcon.src = "assets/icons/volume-level-3.svg";
      volIcon.alt = "Volume level 3";
    }
  });
  const jsConfetti = new JSConfetti();
  click.addEventListener("click", (event) => {
    if(select.value == "party-horn"){ 
        jsConfetti.addConfetti();
      }
      sound.play();
  });
}
