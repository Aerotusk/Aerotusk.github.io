let animationDuration = 30;
let animationRate = 5;

// So far these don't work with anything but the sun (what's new)
// Also, bug: gets the current size instead of the stylesheet size. This can cause the planet to grow or shrink uncontrollably.

function mouseEnterGrow(planet)
{
    let obj = planet + "Obj"
    let id = null;
    let step = 0;
    clearInterval(id);
    id = setInterval(growPlanet,15); // Frame period, in ms

    var style1 = document.styleSheets.item

    var element = document.getElementById(obj);
    var style = window.getComputedStyle(element);
    var originalWidth = parseFloat(style.getPropertyValue('width'));
    var originalHeight = parseFloat(style.getPropertyValue('height'));

    function growPlanet()
    {
        let width = originalWidth * (1 + 0.05 * (logistic(step,animationRate,animationDuration / 2)));
        let height = originalHeight * (1 + 0.05 * (logistic(step,animationRate,animationDuration / 2)));
        
        let xCoord = -width / 2;
        let yCoord = -height / 2;

        document.getElementById(obj).style.width = width + 'px';
        document.getElementById(obj).style.height = height + 'px';
        document.getElementById(obj).style.transform = 'translate('+ xCoord + 'px, ' + yCoord + 'px)';

        step++;
        if(step >= animationDuration)
        {
            clearInterval(id);
        }
    }
}

function mouseLeaveShrink(planet)
{
    let obj = planet + "Obj"
    let id = null;
    let step = 0;
    clearInterval(id);
    id = setInterval(shrinkPlanet,15); // Frame period, in ms

    var element = document.getElementById(obj);
    var style = window.getComputedStyle(element);
    var originalWidth = parseFloat(style.getPropertyValue('width'));
    var originalHeight = parseFloat(style.getPropertyValue('height'));

    console.log("Original Height: " + originalHeight);

    function shrinkPlanet()
    {
        let width = originalWidth * (1 - 0.04762 * (logistic(step,animationRate,animationDuration / 2)));
        let height = originalHeight * (1 - 0.04762 * (logistic(step,animationRate,animationDuration / 2)));
        
        let xCoord = -width / 2;
        let yCoord = -height / 2;

        document.getElementById(obj).style.width = width + 'px';
        document.getElementById(obj).style.height = height + 'px';
        document.getElementById(obj).style.transform = 'translate('+ xCoord + 'px, ' + yCoord + 'px)';

        step++;
        if(step >= animationDuration)
        {
            clearInterval(id);
        }
    }

}

function clickToFocus(planet)
{
    let obj = planet + "Obj"
}

function logistic(time,rate,dur)
{
    return 1 / (1 + Math.exp(-rate * ((time/dur)-1)))
}