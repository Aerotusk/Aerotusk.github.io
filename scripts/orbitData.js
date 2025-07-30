// CONSTANTS

// Okay, maybe I should be thinking a little harder about this.
// I want all the planets to just be their own classes so I make each planet,
// then put them all in an array and can index off that.
// BUT, I foolishly shared TOO MANY variables across multiple functions 
// (since they all need to reposition and resize the planets), so now I suffer.
const refDate = new Date("2025-01-01")

const orbitPeriods = [0,88.0,224.7,365.2,687.0,1/24,4331,10747,30589,59800,90560] //orbital period in days

// const orbitPeriods = [1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600] //orbital period in days
// const orbitPositions = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]

const orbitRadius = [0,50,100,150,200,250,300,350,400,450,500]

const orbitPositions = [
    0,
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

for (i = 1; i < planetList.length; i++)
{
    planetList[i].rad = orbitRadius[i];
    planetList[i].per = orbitPeriods[i];
    planetList[i].pos = orbitPositions[i];
}