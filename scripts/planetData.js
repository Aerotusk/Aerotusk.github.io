class Planet
{   // Default requires name, dimensions, origin, step. 
    // For orbit calculations, include [orbit]radius, period, position (also needs a reference date specified separately)
    constructor(name,index,dimensions,origin,step,radius=0,period=1/24,position=0)
    {
        this.pName=name;
        this.index=index;
        this.dims=dimensions;
        this.org=origin;
        this.step=step;

        this.rad=radius;
        this.per=period;
        this.pos=position;
    }
}

Sun = new Planet(
    pName=  "sun",
    index=  0,
    dims=   72,
    org=    [0,0],
    step=   0
);

Mercury = new Planet(
    pName=  "mercury",
    index=  1,
    dims=   40,
    org=    [0,0],
    step=   0
);

Venus = new Planet(
    pName=  "venus",
    index=  2,
    dims=   50,
    org=    [0,0],
    step=   0
);

Earth = new Planet(
    pName=  "earth",
    index=  3,
    dims=   52,
    org=    [0,0],
    step=   0
);

Mars = new Planet(
    pName=  "mars",
    index=  4,
    dims=   45,
    org=    [0,0],
    step=   0
);

Inter = new Planet(
    pName=  "inter",
    index=  5,
    dims=   30,
    org=    [0,0],
    step=   0
);

Jupiter = new Planet(
    pName=  "jupiter",
    index=  6,
    dims=   64,
    org=    [0,0],
    step=   0
);

Saturn = new Planet(
    pName=  "saturn",
    index=  7,
    dims=   85,
    org=    [0,0],
    step=   0
);

Uranus = new Planet(
    pName=  "uranus",
    index=  8,
    dims=   52,
    org=    [0,0],
    step=   0
);

Neptune = new Planet(
    pName=  "neptune",
    index=  9,
    dims=   50,
    org=    [0,0],
    step=   0
);

Pluto = new Planet(
    pName=  "pluto",
    index=  10,
    dims=   30,
    org=    [0,0],
    step=   0
);    

planetList = [Sun, Mercury, Venus, Earth, Mars, Inter, Jupiter, Saturn, Uranus, Neptune, Pluto];