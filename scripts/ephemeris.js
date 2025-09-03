const refDate = new Date('2025-09-03T23:32:11-00:00')
const orbitRadius = [0,50,100,150,200,250,300,350,400,450,500]
const orbitPeriods = [0.000,87.969,224.701,365.253,686.933,0.000,4332.112,10778.012,30946.657,60435.609,90145.077,] //orbital period in days
const orbitPositions = [0.000 + 0.000 + 0.000,
48.299 + 29.198 + 45.745,
76.607 + 54.842 + 313.920,
174.847 + 288.211 + 238.300,
49.484 + 286.653 + 243.533,
0.000 + 0.000 + 0.000,
100.518 + 273.526 + 85.000,
113.629 + 337.711 + 266.252,
74.017 + 90.965 + 253.203,
131.789 + 273.468 + 315.030,
110.335 + 113.245 + 79.380,
]

for (i = 1; i < planetList.length; i++)
{
    planetList[i].rad = orbitRadius[i];
    planetList[i].per = orbitPeriods[i];
    planetList[i].pos = orbitPositions[i];
}