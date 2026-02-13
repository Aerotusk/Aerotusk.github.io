<?php
# The plan is to use this to make both ephemeris and sun.css [php] files
# Maybe a separate python file that updates the sql database with new ephemeris data...daily?
# Maybe I finally implement *real* orbit equations (or at least finally account for eccentricity?)

$firstPtAries = 190.2+273.0+357.3; // Earth location on Jan 1, 2025
$now = time();
$refTime = strtotime('2026-01-24T00:37:50-00:00')
$timeDiff = ($refTime - $now); // Time difference, seconds

// Set locations of planets
for (i = 1; i < planetList.length; i++)
{   
    let planet = planetList[i]
    let obj = planet.pName;
    let element = document.getElementById(obj);
    let style = window.getComputedStyle(element);
    let size = parseFloat(style.getPropertyValue('width'),10); //width and height are equal for all planets
    let orbitTime = (360 * ((timeDiff) / 86400000)) / planet.per;

    let xCoord = -planet.rad * Math.sin((planet.pos - firstPtAries + orbitTime) * Math.PI / 180) * 1.5; //Make it kinda elliptical
    let yCoord = -planet.rad * Math.cos((planet.pos - firstPtAries + orbitTime) * Math.PI / 180) / 2;

    planet.org = [xCoord,yCoord];
    xCoord -= size / 2;
    yCoord -= size / 2;

    document.getElementById(obj).style.transform = 'translate('+ xCoord + 'px, ' + yCoord + 'px)';
    document.getElementById(obj).style.zIndex = Math.round(yCoord+1000); // Sets draw order of planets
}
?>