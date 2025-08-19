// Move to the right by a fixed number of pixels on hover.

const animationDuration = 80;
const animationShift = 70;
const animationRate = 23;
const moveAmount = 25;
const startAmt = -35;

function listMove(caller)
{
    var element = document.getElementById(caller);
    
    let id = null;
    let storedStep = 0;
    let step = 1;
    clearInterval(id);
    id = setInterval(moveitmoveit,15); // Frame period, in ms
    
    function moveitmoveit()
    {
        if(storedStep != step) // If the animation is still playing:
        {
            let xCoord = startAmt + (moveAmount * (logistic(step + animationShift,animationRate,animationDuration)));

            document.getElementById(caller).style.transform = 'translateX('+ xCoord + 'px)';

            storedStep = step;
        }

        if(element.matches(':hover')){ // If mouse is still over the planet:
            if(step < (animationDuration * 2) - animationShift - 55) {
                step++;
            }
        } 
        else {
            if(step > 0) {
                step--;
            } 
            else {
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