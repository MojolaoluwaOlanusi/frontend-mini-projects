let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 100;
let speed = 50;

let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;


    const angle = Math.min(progressValue * 3.6,360);
    progressBar.style.background = `
    conic-gradient(
        #39FF14 ${angle}deg,
        white ${angle}deg
        )`;
        
        const glowIntensity = Math.min(progressValue *2,100);


        progressBar.style.boxShadow = `
        0 0 5px #39FF14,
        0 0 ${glowIntensity}px #39FF14,
        0 0 ${glowIntensity * 2}px #39FF14,
        0 0 ${glowIntensity * 4}px #39FF14`;

        if (progressValue == progressEndValue){
            clearInterval(progress)
        }
        
}, speed)