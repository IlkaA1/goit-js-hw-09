const btStart = document.querySelector('button[data-start]');
const btStop = document.querySelector('button[data-stop]');
const body = document.querySelector("body");

btStart.addEventListener('click', onStart);
btStop.addEventListener('click', onStop);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };

function onStart(evt){
    
    chengColor = setInterval(() => {

        body.style.backgroundColor = getRandomHexColor();
        
    }, 1000);

    btStart.disabled = true;
    btStart.style.backgroundColor = "rgba(249, 69, 9, 0.7)";
};

function onStop(evt){
    clearInterval(chengColor);
    btStart.disabled = false;
    btStart.style.backgroundColor = "rgb(222, 184, 135)";
};

 