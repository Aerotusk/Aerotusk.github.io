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