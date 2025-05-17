const refDate = new Date("2025-01-01")
// const date = new Date()
var planets = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune","pluto","interloper"]
var orbitPeriods = [88.0,224.7,365.2,687.0,4331,10747,30589,59800,90560,1/36000]
// var orbitPeriods = [0.1/36000,0.15/36000,0.2/36000,0.25/36000,0.3/36000,0.35/36000,0.4/36000,0.45/36000,0.5/36000,0.55/36000] // For debugging purposes
var orbitPositions = [
    48.30+291.95+125.0,
    3.39+76.6+279.3,
    190.2+273.0+357.3,
    49.48+286.71+132.6,
    100.5+273.6+63.9,
    113.6+337.2+258.7,
    74.0+90.5+250.9,
    131.9+268.1+318.7,
    110.2+113.6+78.0,
    25]
var orbitRadius = [50,100,150,200,250,300,350,400,450,300]

planetMovement();

function planetMovement()
{
    let id = null;
    clearInterval(id);
    id = setInterval(animatePlanet,15);
    function animatePlanet()
    {
        var date = new Date()
        // Set locations of planets
        for (let i=0; i < 10; i++)
        {
            let orbitTime = (date.getTime() - refDate.getTime()) / (86400000 * orbitPeriods[i]);
            let xCoord = orbitRadius[i] * Math.sin(orbitPositions[i] + orbitTime * Math.PI / 180) * 1.5;
            let yCoord = orbitRadius[i] * Math.cos(orbitPositions[i] + orbitTime * Math.PI / 180) / 2;
            document.getElementById(planets[i]+"Obj").style.transform = 'translate('+ (xCoord-32) + 'px, ' + (yCoord-32) + 'px)';
            document.getElementById(planets[i]+"Obj").style.zIndex = Math.round(yCoord+1000);
            // console.log(Math.round(yCoord+1000)) 
        }
        // Set draw order of planets

    }
}