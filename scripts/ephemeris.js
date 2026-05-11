const refDate = new Date('2026-05-11T20:08:13-00:00')
const orbitRadius = [0,50,100,150,200,250,300,350,400,450,500]
const orbitPeriods = [0.042,87.969,224.701,365.252,686.933,0.042,4332.298,10764.105,30906.057,60286.862,90114.749,] //orbital period in days
const orbitPositions = [0.000 + 0.000 + 0.000,
48.298 + 29.202 + 319.430,
76.607 + 54.879 + 354.675,
174.721 + 288.235 + 127.821,
49.481 + 286.615 + 29.336,
0.000 + 0.000 + 0.000,
100.518 + 273.560 + 105.615,
113.633 + 338.586 + 273.762,
74.013 + 91.891 + 255.125,
131.806 + 279.039 + 310.956,
110.337 + 113.076 + 80.741,
]

for (i = 1; i < planetList.length; i++)
{
    planetList[i].rad = orbitRadius[i];
    planetList[i].per = orbitPeriods[i];
    planetList[i].pos = orbitPositions[i];
}