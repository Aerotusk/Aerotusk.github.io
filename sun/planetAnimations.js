// CONSTANTS
const planets = ["mercury","venus","earth","mars","inter","jupiter","saturn","uranus","neptune","pluto","sun"]

const orbitPeriods = [88.0,224.7,365.2,687.0,1/24,4331,10747,30589,59800,90560] //orbital period in days
// const orbitPeriods = [0.1/36000,0.15/36000,0.2/36000,0.25/36000,0.3/36000,0.35/36000,0.4/36000,0.45/36000,0.5/36000,0.55/36000] // For debugging purposes\\
const orbitRadius = [50,100,150,200,250,300,350,400,450,500]
const planetDims = [40,50,52,45,30,64,85,52,50,30,72]
const Planets = {
   mercury: 0,
   venus: 1,
   earth: 2,
   mars: 3,
   inter: 4,
   jupiter: 5,
   saturn: 6,
   uranus: 7,
   neptune: 8,
   pluto: 9,
   sun: 10
};
const refDate = new Date("2025-01-01")
const orbitPositions = [
    48.30+29.2+125.0,
    76.6+51.5+279.3,
    190.2+273.0+357.3,
    49.48+286.71+132.6,
    0,
    100.5+273.6+63.9,
    113.6+337.2+258.7,
    74.0+90.5+250.9,
    131.9+268.1+318.7,
    110.2+113.6+78.0]

const animationDuration = 80;
const animationShift = 74;
const animationRate = 23;
const resizeAmount = 0.1;

// GLOBAL VARIABLES
var planetOrigins = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
var planetStep = [0,0,0,0,0,0,0,0,0,0,0]


// FUNCTION DEFINITIONS
function calculateOrbits()
{
    let id = null;
    clearInterval(id);
    id = setInterval(animatePlanet,30);
    function animatePlanet()
    {
        var date = new Date();
        let timeDiff = (date.getTime() - refDate.getTime());
        // Set locations of planets
        for (let i=0; i < 10; i++)
        {
            var style = window.getComputedStyle(document.getElementById(planets[i]+"Obj"));
            var size = parseFloat(style.getPropertyValue('width'),10); //width and height are equal for all planets
            let orbitTime = 360 * ((timeDiff) / 86400000) / orbitPeriods[i];
            let xCoord = orbitRadius[i] * Math.cos((orbitPositions[i] - orbitPositions[2] + 90 + orbitTime) * Math.PI / 180) * 1.5; //Make it kinda elliptical
            let yCoord = -orbitRadius[i] * Math.sin((orbitPositions[i] - orbitPositions[2] + 90 + orbitTime) * Math.PI / 180) / 2;

            planetOrigins[i] = [xCoord,yCoord];
            xCoord -= size / 2;
            yCoord -= size / 2;

            document.getElementById(planets[i]+"Obj").style.transform = 'translate('+ xCoord + 'px, ' + yCoord + 'px)';
            document.getElementById(planets[i]+"Obj").style.zIndex = Math.round(yCoord+1000); // Sets draw order of planets
        }
    }
}

function planetResize(planet)
{
    let ind = Planets[planet]
    let obj = planet + "Obj"
    let step = planetStep[Planets[planet]];
    
    let id = null;
    clearInterval(id);
    id = setInterval(plAnimate,15); // Frame period, in ms

    var originalWidth = planetDims[ind];
    var originalHeight = planetDims[ind];
    var element = document.getElementById(planet+"Obj");
    function plAnimate()
    {
        if(planetStep[Planets[planet]] != step) // If the animation is still playing:
        {
            let width = originalWidth * (1 + resizeAmount * (logistic(step + animationShift,animationRate,animationDuration)));
            let height = originalHeight * (1 + resizeAmount * (logistic(step + animationShift,animationRate,animationDuration)));

            let xCoord = planetOrigins[ind][0] - (width / 2);
            let yCoord = planetOrigins[ind][1] - (height / 2);

            document.getElementById(obj).style.width = width + 'px';
            document.getElementById(obj).style.height = height + 'px';
            document.getElementById(obj).style.transform = 'translate('+ xCoord + 'px, ' + yCoord + 'px)';
            planetStep[Planets[planet]] = step;
        }

        if(element.matches(':hover')){ // If mouse is still over the planet:
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