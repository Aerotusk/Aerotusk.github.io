// This file should ONLY include items relevant planetResize and helper functions

const sAnimationDuration = 80;
const sAnimationShift = 60;
const sAnimationRate = 15;
const sResizeAmount = 0.1;

function settingsPage(event,dir)
{
    let settingsButton = document.getElementById(event.id);
    let settingsPage = document.getElementById('settingsPage');
    let pageDimmer = document.getElementById('pageDimmer');
    
    let shiftAmt = 190;

    let aniEnd = 45;
    let aniStop = 0;
    let aniFactor = stLogistic(aniStop + sAnimationShift,sAnimationRate,sAnimationDuration);

    if(dir == 1)
    {
        settingsButton.setAttribute("onclick","settingsPage(this,0)")
        pageDimmer.style.pointerEvents = 'auto'; // Prevent clicking through to the page
        var startStep = aniStop;
        var stopStep = aniEnd;
        var direction = 1;
    }
    else
    {
        settingsButton.setAttribute("onclick","settingsPage(this,1)")
        pageDimmer.style.pointerEvents = 'none'; // Allow clicking through to the page
        var startStep = aniEnd;
        var stopStep = aniStop;
        var direction = -1;
    }
    let step = startStep;

    let anId = null;
    clearInterval(anId);
    anId = setInterval(stAnimate,15);
    
    function stAnimate()
    {
        step = step + direction;
        if(step == stopStep) // Animation is OVER!
        {
            clearInterval(anId);
        } 
        else 
        { 
        }
        let percent = (stLogistic(step + sAnimationShift,sAnimationRate,sAnimationDuration)) - aniFactor;
        settingsButton.style.right = shiftAmt * percent + 'px';
        settingsPage.style.right = shiftAmt * percent + 'px';
        pageDimmer.style.opacity = percent + '%';
    }
}

function settingsResize(event)
{
    let lmnt = document.getElementById(event.id);
    
    let anId = null;
    clearInterval(anId);
    anId = setInterval(stAnimate,15); // Frame period, in ms
    let tempStep = 0;
    let step = 1;
    let dim = 48;
    let xOrg = -12;
    let yOrg = 12;
    function stAnimate()
    {
        if(tempStep != step) // If the animation is still playing:
        {
            let size = dim * (1 + sResizeAmount * (stLogistic(step + sAnimationShift,sAnimationRate,sAnimationDuration)));

            let xCoord = xOrg + ((size - dim)/2);
            let yCoord = yOrg - ((size - dim)/2);

            lmnt.style.width = size + 'px';
            lmnt.style.height = size + 'px';
            lmnt.style.transform = 'translate('+ xCoord + 'px, ' + yCoord + 'px)';
            tempStep = step;
        }

        if(lmnt.matches(':hover')){ // If mouse is still over the planet:
            if(step < (sAnimationDuration * 2) - sAnimationShift - 55) {
                step++;
            }
        } else {
            if(step > 0) {
                step--;
            } else {
                clearInterval(anId);
            }
        }
    }
}

// HELPER FUNCTIONS
function stLogistic(time,rate,dur)
{
    return 1 / (1 + Math.exp(-rate * ((time/dur)-1)))
}