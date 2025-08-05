const refDate = new Date('2025-08-05T16:51:56-00:00')
const orbitRadius = [0,50,100,150,200,250,300,350,400,450,500]
const orbitPeriods = [0.000,87.969,224.698,365.260,686.920,0.000,4332.010,10779.779,30949.764,60454.965,90160.129,] //orbital period in days
const orbitPositions = [0.000 + 0.000 + 0.000,
48.299 + 29.199 + 247.755,
76.607 + 54.909 + 266.727,
174.832 + 288.194 + 210.143,
49.484 + 286.660 + 229.539,
0.000 + 0.000 + 0.000,
100.518 + 273.507 + 82.552,
113.628 + 337.598 + 265.391,
74.018 + 90.905 + 252.929,
131.787 + 272.697 + 315.627,
110.335 + 113.281 + 79.204,
]

for (i = 1; i < planetList.length; i++)
{
    planetList[i].rad = orbitRadius[i];
    planetList[i].per = orbitPeriods[i];
    planetList[i].pos = orbitPositions[i];
}