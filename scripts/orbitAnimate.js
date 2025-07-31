//This file should ONLY include functions for animating orbits

const firstPtAries = 190.2+273.0+357.3; // Earth location on Jan 1, 2025

function calculateOrbits(planetList)
{
    let id = null;
    clearInterval(id);
    id = setInterval(animatePlanet,30);
    function animatePlanet()
    {
        var date = new Date();
        let timeDiff = (date.getTime() - refDate.getTime());
        
        // Set locations of planets
        for (i =1; i < planetList.length; i++)
        {   
            var planet = planetList[i]
            var obj = planet.pName;
            var element = document.getElementById(obj);
            var style = window.getComputedStyle(element);
            var size = parseFloat(style.getPropertyValue('width'),10); //width and height are equal for all planets
            let orbitTime = (360 * ((timeDiff) / 86400000)) / planet.per;

            let xCoord = -planet.rad * Math.sin((planet.pos - firstPtAries + orbitTime) * Math.PI / 180) * 1.5; //Make it kinda elliptical
            let yCoord = -planet.rad * Math.cos((planet.pos - firstPtAries + orbitTime) * Math.PI / 180) / 2;

            planet.org = [xCoord,yCoord];
            xCoord -= size / 2;
            yCoord -= size / 2;

            document.getElementById(obj).style.transform = 'translate('+ xCoord + 'px, ' + yCoord + 'px)';
            document.getElementById(obj).style.zIndex = Math.round(yCoord+1000); // Sets draw order of planets
        }
    }
}