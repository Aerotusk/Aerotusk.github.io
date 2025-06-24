# PURPOSE
# Take data in csv format and produce all the comic pages in Pluto
# 
# CSV FORMAT
# COMIC NUMBER,COMIC FILENAME (DOUBLES AS TITLE),TRANSCRIPT,TITLE TEXT
#
# FUNCTION PARAMETERS
# LIST of comic pages to rewrite (-1 for all comics, 0 for most recent (such as posting one new comic))
#
# FUNCTION RETURNS
# None

import os
import csv
from comicTemplate import comicFiller

dir = os.path.dirname(os.path.realpath(__file__))
plutoDir = os.path.dirname(dir) + "\\pluto\\"

def comicPageGenerator(pages):
    """
    :Inputs: pages list of pages to rewrite. Use 0 for two most recent. Use -1 for all
    :Returns: none
    """
    file = "comics.csv"
    numLines = sum(1 for _ in open(dir + '\\' + file)) - 1
    with open(dir + '\\' + file,"r") as f:
        lines = list(csv.DictReader(f))
        if pages == -1:
            pages = range(numLines)
        elif pages == 0:
            pages = (numLines - 1, numLines)
        for i in pages:
            num = int(lines[i]["NUMBER"])
            src = lines[i]['FILENAME']
            date = lines[i]['DATE']

            indexDir = plutoDir + f"{num}\\"

            title = src.split(".")[0]

            first = f"../{1}/"
            prev = f"../{num - 1}/"
            rand = "#"
            next = f"../{num + 1}/"
            last = f"../{str(numLines)}/"
            
            if (num == 1): # If first comic, need to set previous and first to #
                prev = "#"
                first = "#"

            elif (num == numLines): # If last comic, need to set next and last to #. Also need to update pluto index
                next = "#"
                last = "#"

                # Write to Pluto Directory
                os.makedirs(os.path.dirname(plutoDir), exist_ok=True)
                with open(plutoDir + "index.html", mode="w") as index:
                    index.write(comicFiller(0,f"{title} ({num}) - Aerotusk",f"./{1}/",f"./{num - 1}/",rand,next,last,f"./comics/{src}",title,date))

            os.makedirs(os.path.dirname(indexDir), exist_ok=True)
            with open(indexDir + "index.html", mode="w") as index:
                index.write(comicFiller(1,f"{title} ({num}) - Aerotusk",first,prev,rand,next,last,f"../comics/{src}",title,date))

if __name__ == "__main__":
    comicPageGenerator(-1)