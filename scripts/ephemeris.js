const refDate = new Date('2025-07-31T18:45:37-00:00')
const orbitRadius = [0,50,100,150,200,250,300,350,400,450,500]
const orbitPeriods = [0.000,87.969,224.698,365.261,686.918,0.000,4331.990,10780.049,30950.177,60457.942,90162.777,] //orbital period in days
const orbitPositions = [0.000 + 0.000 + 0.000,
48.299 + 29.199 + 230.559,
76.607 + 54.918 + 258.847,
174.820 + 288.202 + 205.437,
49.484 + 286.661 + 227.240,
0.000 + 0.000 + 0.000,
100.518 + 273.503 + 82.139,
113.628 + 337.581 + 265.245,
74.019 + 90.898 + 252.880,
131.787 + 272.576 + 315.718,
110.335 + 113.287 + 79.174,
]

for (i = 1; i < planetList.length; i++)
{
    planetList[i].rad = orbitRadius[i];
    planetList[i].per = orbitPeriods[i];
    planetList[i].pos = orbitPositions[i];
}