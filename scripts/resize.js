// This file should ONLY include items relevant planetResize and helper functions

const animationDuration = 80;
const animationShift = 74;
const animationRate = 23;
const resizeAmount = 0.1;

function hoverSound()
{    
    // let trib = new Audio('../sounds/trib.ogg');
    // trib.play(); // Throws an error when planets are hovered but screen has not been clicked / interacted with
}

function planetResize(planet)
{
    let step = planet.step;
    let dim = planet.dims;
    let lmnt = document.getElementById(planet.pName);
    let resizeOffset = logistic(animationShift,animationRate,animationDuration)
    
    let id = null;
    clearInterval(id);
    id = setInterval(plAnimate,15); // Frame period, in ms
    
    function plAnimate()
    {
        if(planet.step != step) // If the animation is still playing:
        {
            let size = dim * (1 + resizeAmount * (logistic(step + animationShift,animationRate,animationDuration) - resizeOffset));

            let xCoord = planet.org[0] - (size / 2);
            let yCoord = planet.org[1] - (size / 2);

            lmnt.style.width = size + 'px';
            lmnt.style.height = size + 'px';
            lmnt.style.transform = 'translate('+ xCoord + 'px, ' + yCoord + 'px)';
            planet.step = step;
        }

        if(lmnt.matches(':hover')){ // If mouse is still over the planet:
            if(step < (animationDuration * 2) - animationShift - 55) {
                step++;
            }
        } else {
            if(step > 0) {
                step--;
            } else {
                clearInterval(id);
            }
        }
    }
}

// HELPER FUNCTIONS
function logistic(time,rate,dur)
{
    return 1 / (1 + Math.exp(-rate * ((time/dur)-1)))
}