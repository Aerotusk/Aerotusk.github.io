const refDate = new Date('2025-10-19T03:34:47-00:00')
const orbitRadius = [0,50,100,150,200,250,300,350,400,450,500]
const orbitPeriods = [0.000,87.969,224.699,365.247,686.958,0.000,4332.152,10775.266,30939.953,60405.692,90131.415,] //orbital period in days
const orbitPositions = [0.000 + 0.000 + 0.000,
48.299 + 29.199 + 204.214,
76.607 + 54.793 + 27.247,
174.871 + 288.223 + 282.560,
49.484 + 286.639 + 266.383,
0.000 + 0.000 + 0.000,
100.518 + 273.535 + 88.777,
113.631 + 337.885 + 267.583,
74.017 + 91.109 + 253.572,
131.794 + 274.586 + 314.182,
110.336 + 113.201 + 79.640,
]

for (i = 1; i < planetList.length; i++)
{
    planetList[i].rad = orbitRadius[i];
    planetList[i].per = orbitPeriods[i];
    planetList[i].pos = orbitPositions[i];
}