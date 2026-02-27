// This file should ONLY include items relevant planetResize and helper functions

const animationDuration = 80;
const animationShift = 74;
const animationRate = 23;
const resizeAmount = 0.1;
const resizeOffset = logistic(animationShift,animationRate,animationDuration);

function hoverSound()
{    
    let trib = new Audio('../sounds/trib.ogg');
    trib.play(); // Throws an error when planets are hovered but screen has not been clicked / interacted with
}

function growShrink(event)
{
    let lmnt = document.getElementById(event.id);
    if(lmnt.hasOwnProperty('animationStep'))
    { // Animation already running!
        return; 
    }
    else   
    { // Animation not running, get started!
        lmnt.animationStep = 0;
    }

    let id = null;
    clearInterval(id);
    id = setInterval(resizeElement,15); // Frame period, in ms
    
    function resizeElement()
    {
        let step = lmnt.animationStep;
        let scaleVal = 1 + resizeAmount * (logistic(step + animationShift,animationRate,animationDuration) - resizeOffset);
        lmnt.style.scale = scaleVal;

        if(lmnt.matches(':hover')){ // If mouse is still over the planet:
            if(step < (animationDuration * 2) - animationShift - 55) {
                step++;
            }
        } else {
            if(step > 0) {
                step--;
            } else {
                clearInterval(id);
                delete lmnt.animationStep;
                return;
            }
        }
        lmnt.animationStep = step;
    }
}

// HELPER FUNCTIONS
function logistic(time,rate,dur)
{
    return 1 / (1 + Math.exp(-rate * ((time/dur)-1)))
}