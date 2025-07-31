// OLD ORBIT DATA FILE, DO NOT USE
// USE ephemeris.js INSTEAD, AS IT UPDATES AUTOMATICALLY
// // CONSTANTS

// // Okay, maybe I should be thinking a little harder about this.
// // I want all the planets to just be their own classes so I make each planet,
// // then put them all in an array and can index off that.
// // BUT, I foolishly shared TOO MANY variables across multiple functions 
// // (since they all need to reposition and resize the planets), so now I suffer.
// const refDate = new Date("2025-01-01")

// const orbitPeriods = [0,88.0,224.7,365.2,687.0,1/24,4331,10747,30589,59800,90560] //orbital period in days

// // const orbitPeriods = [1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600,1 / 3600] //orbital period in days
// // const orbitPositions = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// const orbitRadius = [0,50,100,150,200,250,300,350,400,450,500]

// const orbitPositions = [
//     0,
//     48.30+29.2+125.0,
//     76.6+51.5+279.3,
//     190.2+273.0+357.3,
//     49.48+286.71+132.6,
//     0,
//     100.5+273.6+63.9,
//     113.6+337.2+258.7,
//     74.0+90.5+250.9,
//     131.9+268.1+318.7,
//     110.2+113.6+78.0]

// for (i = 1; i < planetList.length; i++)
// {
//     planetList[i].rad = orbitRadius[i];
//     planetList[i].per = orbitPeriods[i];
//     planetList[i].pos = orbitPositions[i];
// }

const refDate = new Date('2025-07-30')
const orbitRadius = [0,50,100,150,200,250,300,350,400,450,500]
const orbitPeriods = [0.000,87.969,224.698,365.262,686.918,0.000,4331.984,10780.145,30950.323,60459.004,90163.731,] //orbital period in days
const orbitPositions = [0.000 + 0.000 + 0.000,
48.299 + 29.199 + 224.785,
76.607 + 54.921 + 255.997,
174.815 + 288.205 + 203.734,
49.484 + 286.661 + 226.411,
0.000 + 0.000 + 0.000,
100.518 + 273.502 + 81.990,
113.628 + 337.575 + 265.192,
74.019 + 90.895 + 252.862,
131.786 + 272.533 + 315.751,
110.335 + 113.290 + 79.164,
]

for (i = 1; i < planetList.length; i++)
{
    planetList[i].rad = orbitRadius[i];
    planetList[i].per = orbitPeriods[i];
    planetList[i].pos = orbitPositions[i];
}