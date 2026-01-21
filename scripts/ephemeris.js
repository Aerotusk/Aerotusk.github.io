const refDate = new Date('2026-01-21T20:32:32-00:00')
const orbitRadius = [0,50,100,150,200,250,300,350,400,450,500]
const orbitPeriods = [0.042,87.970,224.702,365.257,686.982,0.042,4332.159,10770.213,30925.147,60350.960,90119.426,] //orbital period in days
const orbitPositions = [0.000 + 0.000 + 0.000,
48.298 + 29.200 + 224.525,
76.607 + 54.893 + 178.545,
174.864 + 288.139 + 18.450,
49.483 + 286.622 + 320.260,
0.000 + 0.000 + 0.000,
100.518 + 273.536 + 96.637,
113.632 + 338.204 + 270.436,
74.016 + 91.445 + 254.315,
131.801 + 276.598 + 312.737,
110.336 + 113.138 + 80.156,
]

for (i = 1; i < planetList.length; i++)
{
    planetList[i].rad = orbitRadius[i];
    planetList[i].per = orbitPeriods[i];
    planetList[i].pos = orbitPositions[i];
}