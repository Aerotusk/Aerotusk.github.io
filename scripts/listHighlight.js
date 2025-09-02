// Move to the right by a fixed number of pixels on hover.
const highlightDuration = 80;
const highlightShift = 70;
const highlightRate = 23;
const moveAmount = 25;
const startAmt = -35;

function listMove(caller)
{
    let id = null;
    let storedStep = 0;
    let step = 1;
    clearInterval(id);
    id = setInterval(moveitmoveit,15); // Frame period, in ms
    
    function moveitmoveit()
    {
        if(storedStep != step) // If the highlight is still playing:
        {
            let xCoord = startAmt + (moveAmount * (logistic(step + highlightShift,highlightRate,highlightDuration)));
            caller.style.transform = 'translateX('+ xCoord + 'px)';
            storedStep = step;
        }

        if(caller.matches(':hover')){ // If mouse is still over the planet:
            if(step < (highlightDuration * 2) - highlightShift - 55) {
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