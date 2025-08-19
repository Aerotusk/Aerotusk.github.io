const refDate = new Date('2025-08-19T22:38:27-00:00')
const orbitRadius = [0,50,100,150,200,250,300,350,400,450,500]
const orbitPeriods = [0.000,87.969,224.699,365.257,686.925,0.000,4332.066,10778.957,30948.446,60445.914,90152.403,] //orbital period in days
const orbitPositions = [0.000 + 0.000 + 0.000,
48.299 + 29.199 + 313.732,
76.607 + 54.874 + 289.623,
174.856 + 288.184 + 223.801,
49.484 + 286.657 + 236.275,
0.000 + 0.000 + 0.000,
100.518 + 273.517 + 83.743,
113.628 + 337.651 + 265.812,
74.018 + 90.930 + 253.067,
131.788 + 273.064 + 315.346,
110.335 + 113.264 + 79.290,
]

for (i = 1; i < planetList.length; i++)
{
    planetList[i].rad = orbitRadius[i];
    planetList[i].per = orbitPeriods[i];
    planetList[i].pos = orbitPositions[i];
}