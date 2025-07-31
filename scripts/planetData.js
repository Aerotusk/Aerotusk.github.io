class Planet
{   // Default requires name, dimensions, origin, step. 
    // For orbit calculations, include [orbit]radius, period, position (also needs a reference date specified separately)
    constructor(name,dimensions,origin=[0,0],step=0,radius=0,period=1/24,position=0)
    {
        this.pName=name;
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
    dims=   72
);

Mercury = new Planet(
    pName=  "mercury",
    dims=   40
);

Venus = new Planet(
    pName=  "venus",
    dims=   50
);

Earth = new Planet(
    pName=  "earth",
    dims=   52
);

Mars = new Planet(
    pName=  "mars",
    dims=   45
);

Inter = new Planet(
    pName=  "inter",
    dims=   30
);

Jupiter = new Planet(
    pName=  "jupiter",
    dims=   64
);

Saturn = new Planet(
    pName=  "saturn",
    dims=   85
);

Uranus = new Planet(
    pName=  "uranus",
    dims=   52
);

Neptune = new Planet(
    pName=  "neptune",
    dims=   50
);

Pluto = new Planet(
    pName=  "pluto",
    dims=   30
);    

planetList = [Sun, Mercury, Venus, Earth, Mars, Inter, Jupiter, Saturn, Uranus, Neptune, Pluto];