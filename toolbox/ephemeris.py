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


def writeEphemerisFile(filename:str,refDate:date,periods:list,positions:list,radii:list):
    dateString = f"const refDate = new Date('{refDate.isoformat()}')\n"
    radString = "const orbitRadius = [0,50,100,150,200,250,300,350,400,450,500]\n"
    periodStrings = "const orbitPeriods = ["
    for i in periods:
        periodStrings += f"{i/86400:.3f},"
    periodStrings += "] //orbital period in days\n"

    positionStrings = "const orbitPositions = ["
    for i in positions:
        positionStrings += f"{i[0]:.3f} + {i[1]:.3f} + {i[2]:.3f},\n"
    positionStrings += "]\n"

    suffix = """
for (i = 1; i < planetList.length; i++)
{
    planetList[i].rad = orbitRadius[i];
    planetList[i].per = orbitPeriods[i];
    planetList[i].pos = orbitPositions[i];
}"""

    with open(filename,"w") as f:
        f.writelines(dateString)
        f.writelines(radString)
        f.writelines(periodStrings)
        f.writelines(positionStrings)
        f.writelines(suffix)
    
if __name__ == "__main__":

    planetarySystems = []
    planets = ["Sun","Mercury","Venus","Earth","Mars","Inter","Jupiter","Saturn","Uranus","Neptune","Pluto"]
    planetIds = [0,1,2,3,4,0,5,6,7,8,9]
    refDate=date.today()
    for i in range(len(planets)):
        if(planetIds[i] != 0):
            # Actually get ephemeris data
            eph = EphemerisData(horizonsGetEphemeris(planetIds[i],refDate))
        
        else:
            # Skip getting ephemeris data
            eph = EphemerisData([[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,1/24]])
            pass
        planetarySystems.append(PlanetarySystem("Earth",planetIds[i],eph,refDate))

    orbitPeriods = []
    orbitPositions = []
    orbitRadii = [0,50,100,150,200,250,300,350,400,450,500]
    for i in planetarySystems:
        period = i.orbit.OrbitalPeriod
        elements = [i.orbit.LongitudeAscendingNode,i.orbit.ArgumentOfPeriapsis,i.orbit.TrueAnomaly]
        orbitPeriods.append(period)
        orbitPositions.append(elements)
    writeEphemerisFile("toolbox/ephemeris.js",refDate,orbitPeriods,orbitPositions,orbitRadii)