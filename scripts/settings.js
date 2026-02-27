// This file should ONLY include items relevant planetResize and helper functions

const sAnimationDuration = 80;
const sAnimationShift = 60;
const sAnimationRate = 15;
const sResizeAmount = 0.1;

function readSettingsCookies()
{
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) 
    {
        let c = ca[i];
        while (c.charAt(0) == ' ') 
        {
            c = c.substring(1);
        }
        let name = c.split("=")[0];
        var chkbox = document.getElementById(name+"Checkbox");
        if(chkbox != null)
        {
            chkbox.checked = true;
        }
        var drpdwn = document.getElementById(name+"Dropdown");
        if(drpdwn != null)
        {
            drpdwn.value = getCookie(name);
        }
    }
}

function changeSetting(event)
{
    let settingBox = document.getElementById(event.name + "Checkbox"); // Returns whatever checkbox is being set TO
    let settingDrop = document.getElementById(event.name +"Dropdown");
    if(settingBox.checked)
    {
        setCookie(event.name,settingDrop.value,365)
    }
    else
    {
        delete_cookie(event.name)
    }
}

function settingsPage(event,dir)
{
    let settingsButton = document.getElementById(event.id);
    let settingsPage = document.getElementById('settingsPage');
    let pageDimmer = document.getElementById('pageDimmer');
    
    let shiftAmt = 290;

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
        pageDimmer.style.opacity = percent;
    }
}


// HELPER FUNCTIONS
function stLogistic(time,rate,dur)
{
    return 1 / (1 + Math.exp(-rate * ((time/dur)-1)));
}

readSettingsCookies()