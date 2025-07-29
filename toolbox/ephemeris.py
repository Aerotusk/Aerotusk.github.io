# Connect to Horizons system and get ephemeris data for each planet. 
# Ideally, run this once per month to update planet locations on main screen

from requests import get
from datetime import datetime

# When using the web application:
# Osculating orbital elements
# Target body: 1-9 (Merc - Pluto)
# Coordinate center: Sun (body center)
# Time: Specify list of days, use 1st of current month (year?), CAL, TDB

# Want back: long. of Asc Node (OM), arg, of periapsis (W), true anomaly (N), as well as sidereal orb. per. (days)

class PlanetarySystem:
    def __init__(self,name,id):
        self.name = name
        self.id = id
        self.longitudeAscendingNode = 0
        self.argumentOfPeriapsis = 0
        self.trueAnomaly = 0
        self.orbitalPeriod = 0

Mercury = PlanetarySystem("Mercury",1)
Venus = PlanetarySystem("Venus",2)
Earth = PlanetarySystem("Earth",3)
Mars = PlanetarySystem("Mars",4)
Jupiter = PlanetarySystem("Jupiter",5)
Saturn = PlanetarySystem("Saturn",6)
Uranus = PlanetarySystem("Uranus",7)
Neptune = PlanetarySystem("Neptune",8)
Pluto = PlanetarySystem("Pluto",9)

planets = [Mercury, 
           Venus, 
           Earth, 
           Mars, 
           Jupiter, 
           Saturn, 
           Uranus, 
           Neptune, 
           Pluto]

def horizonsGetEphemeris(planet:PlanetarySystem,time:datetime):
    HORIZONS = "https://ssd.jpl.nasa.gov/api/horizons.api"
    format = "text"
    obj_data = "YES"
    make_ephem = "YES"
    ephem_type = ""
    email_addr = ""

    command = planet.id

    return 0

if __name__ == "__main__":
    pass