// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let selectVoice = document.getElementById('voice-select');
  let click = document.querySelector('button');
  let text = document.getElementById('text-to-speak');
  let face = document.querySelector('img[alt="Smiling face"]');
  let speech = window.speechSynthesis;

  
  let selection = speech.getVoices();  
  selection.forEach((element, index) => {
    let option = document.createElement('option');
    option.textContent = `${element.name} (${element.lang})`;
    selectVoice.appendChild(option);
    option.value = index;
  });

  click.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(text.value);
    utterance.voice = selection[selectVoice.value];
    
    
    utterance.addEventListener('start', () => {
        face.src = "assets/images/smiling-open.png"; 
    });

    speech.speak(utterance);
    utterance.addEventListener('end', () => { 
      face.src = "assets/images/smiling.png"; 
    });
  });
  
}