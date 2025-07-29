# Connect to Horizons system and get ephemeris data for each planet. 
# Ideally, run this once per month to update planet locations on main screen
import sys
import json
import base64
from requests import get
from datetime import date

# When using the web application:
# Osculating orbital elements
# Target body: 1-9 (Merc - Pluto)
# Coordinate center: Sun (body center)
# Time: Specify list of days, use 1st of current month (year?), CAL, TDB

# Want back: long. of Asc Node (OM), arg, of periapsis (W), true anomaly (N), as well as sidereal orb. per. (days)

class EphemerisData: # Need to update this to properly search the input data and assign values automatically
    def __init__(self,paramIn):
        self.eccentricity = paramIn[0][1]
        self.PeriapsisDistance = paramIn[1][1]
        self.Inclination = paramIn[2][1]
        self.LongitudeAscendingNode = paramIn[3][1]
        self.ArgumentOfPeriapsis = paramIn[4][1]
        self.PeriapsisTime = paramIn[5][1]
        self.MeanMotion = paramIn[6][1]
        self.MeanAnomaly = paramIn[7][1]
        self.TrueAnomaly = paramIn[8][1]
        self.SemiMajorAxis = paramIn[9][1]
        self.ApoapsisDistance = paramIn[10][1]
        self.OrbitalPeriod = paramIn[11][1]

class PlanetarySystem:
    def __init__(self,name:str,id,ephemeris:EphemerisData,ephTime:date):
        self.name = name
        self.id = id
        self.orbit = ephemeris
        self.ephemerisTime = ephTime

# Mercury = PlanetarySystem("Mercury",1)
# Venus = PlanetarySystem("Venus",2)
# Earth = PlanetarySystem("Earth",3)
# Mars = PlanetarySystem("Mars",4)
# Jupiter = PlanetarySystem("Jupiter",5)
# Saturn = PlanetarySystem("Saturn",6)
# Uranus = PlanetarySystem("Uranus",7)
# Neptune = PlanetarySystem("Neptune",8)
# Pluto = PlanetarySystem("Pluto",9)

# planets = [Mercury, 
#            Venus, 
#            Earth, 
#            Mars, 
#            Jupiter, 
#            Saturn, 
#            Uranus, 
#            Neptune, 
#            Pluto]

def horizonsGetEphemeris(planetID:str,time:date): # Lots of this grabbed from Python example in Horizons API Documentation, found here: https://ssd-api.jpl.nasa.gov/doc/horizons.html
    hTime = time.isoformat()
    htListType = "CAL"
    hTimeType = "TDB"
    HORIZONS = "https://ssd.jpl.nasa.gov/api/horizons.api"
    format = "json"
    command = planetID
    center="500@10"
    obj_data = "YES"
    make_ephem = "YES"
    ephem_type = "ELEMENTS"
    email_addr = ""

    query = f"{HORIZONS}?format={format}&COMMAND='{command}'&OBJ_DATA='{obj_data}'&MAKE_EPHEM='{make_ephem}'&EPHEM_TYPE='{ephem_type}'&CENTER='{center}'&TLIST='{hTime}'&TLIST_TYPE='{htListType}'&TIME_TYPE='{hTimeType}'" 

    resp = get(query)

    try:
        data = json.loads(resp.text)
    except ValueError:
        print("Unable to decode JSON results")

    if (resp.status_code == 200):   # OK!
        if "result" in data:
            ephemeris = ((str)(data["result"])).split("$$SOE")[1].split("$$EOE")[0]
            ephemeris = ephemeris.split('\n')
            ephemerisOrder = ["EC","QR","IN","OM","W","Tp","N","MA","TA","A","AD","PR"]
            ind = 0
            ephemerisOut = []
            for i in ephemeris[2:-1]:
                for j in range(3):
                    offs = 26 * j
                    parameter = i[1+offs:3+offs].replace(" ","")
                    value = float(i[5+offs:26+offs])
                    if(parameter == ephemerisOrder[ind]):
                        ephemerisOut.append([parameter,value])
                        ind += 1
                    else:
                        raise ValueError(f"Incorrect Parameter Output: Expected {ephemerisOrder[ind]}, got {parameter}")
            return ephemerisOut
        else:
            print(resp.text)
        sys.exit(1)
    elif(resp.status_code == 400):  # BAD REQUEST (from Horizons Python Example) 
        data = json.loads(resp.text)
        if "message" in data:
            print("MESSAGE: {}".format(data["message"]))
        else:
            print(json.dumps(data, indent=2))
    elif(resp.status_code == 405):  # METHOD NOT ALLOWED
        print("HORIZONS returns Error 405: Method Not Allowed.")
        sys.exit(2)
    elif(resp.status_code == 500):  # INTERNAL SERVER ERROR
        print("HORIZONS returns Error 500: Internal Server Error.")
        sys.exit(2)
    elif(resp.status_code == 503):  # SERVICE UNAVAILABLE
        print("HORIZONS returns Error 503: Service Unavailable; Please try again later.")
        sys.exit(2)
    return resp.text

if __name__ == "__main__":
    time=date.today()
    planetID = 3
    eph = EphemerisData(horizonsGetEphemeris(planetID,time))
    Earth = PlanetarySystem("Earth",planetID,eph,time)
    print(eph)