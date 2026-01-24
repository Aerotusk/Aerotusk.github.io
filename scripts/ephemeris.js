const refDate = new Date('2026-01-24T00:37:50-00:00')
const orbitRadius = [0,50,100,150,200,250,300,350,400,450,500]
const orbitPeriods = [0.042,87.970,224.702,365.257,686.982,0.042,4332.162,10770.104,30924.840,60349.790,90119.131,] //orbital period in days
const orbitPositions = [0.000 + 0.000 + 0.000,
48.298 + 29.200 + 231.575,
76.607 + 54.895 + 181.973,
174.851 + 288.149 + 20.661,
49.483 + 286.622 + 321.586,
0.000 + 0.000 + 0.000,
100.518 + 273.537 + 96.816,
113.632 + 338.211 + 270.502,
74.016 + 91.452 + 254.333,
131.801 + 276.643 + 312.705,
110.336 + 113.136 + 80.167,
]

for (i = 1; i < planetList.length; i++)
{
    planetList[i].rad = orbitRadius[i];
    planetList[i].per = orbitPeriods[i];
    planetList[i].pos = orbitPositions[i];
}