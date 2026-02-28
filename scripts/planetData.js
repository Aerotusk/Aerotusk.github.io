class Planet
{   // Default requires name, dimensions, origin, step. 
    // For orbit calculations, include [orbit]radius, period, position (also needs a reference date specified separately)
    constructor(name,dimensions,radius=0,period=1/24,position=0)
    {
        this.pName=name;
        this.dims=dimensions;

        this.rad=radius;
        this.per=period;
        this.pos=position;
    }
}

sun = new Planet(
    pName=  "sun",
    dims=   72
);

mercury = new Planet(
    pName=  "mercury",
    dims=   40
);

venus = new Planet(
    pName=  "venus",
    dims=   50
);

earth = new Planet(
    pName=  "earth",
    dims=   52
);

mars = new Planet(
    pName=  "mars",
    dims=   45
);

inter = new Planet(
    pName=  "inter",
    dims=   30
);

jupiter = new Planet(
    pName=  "jupiter",
    dims=   64
);

saturn = new Planet(
    pName=  "saturn",
    dims=   85
);

uranus = new Planet(
    pName=  "uranus",
    dims=   52
);

neptune = new Planet(
    pName=  "neptune",
    dims=   50
);

pluto = new Planet(
    pName=  "pluto",
    dims=   30
);    

planetList = [sun, mercury, venus, earth, mars, inter, jupiter, saturn, uranus, neptune, pluto];