const refDate = new Date('2025-08-13T23:23:29-00:00')
const orbitRadius = [0,50,100,150,200,250,300,350,400,450,500]
const orbitPeriods = [0.000,87.969,224.699,365.259,686.923,0.000,4332.042,10779.311,30949.026,60449.798,90155.639,] //orbital period in days
const orbitPositions = [0.000 + 0.000 + 0.000,
48.299 + 29.199 + 282.505,
76.607 + 54.889 + 280.011,
174.848 + 288.184 + 218.069,
49.484 + 286.659 + 233.437,
0.000 + 0.000 + 0.000,
100.518 + 273.513 + 83.244,
113.628 + 337.628 + 265.636,
74.018 + 90.919 + 253.010,
131.787 + 272.907 + 315.467,
110.335 + 113.271 + 79.254,
]

for (i = 1; i < planetList.length; i++)
{
    planetList[i].rad = orbitRadius[i];
    planetList[i].per = orbitPeriods[i];
    planetList[i].pos = orbitPositions[i];
}