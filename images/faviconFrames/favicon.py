import numpy as np
import math
import matplotlib.pyplot as plt

# Display and save the image


def gauss(centerX,centerY,radius,threshold):
    aRadius = math.ceil(radius)
    planetArray = np.zeros((2*aRadius+1,2*aRadius+1))
    offsX = centerX % 1
    offsY = centerY % 1
    for i in range(-aRadius,aRadius+1):
        for j in range(-aRadius,aRadius+1):
            gaussian = 255*math.exp(-(pow(i-offsX,2)+pow(j-offsY,2))/(2*pow(radius,2)))
            planetArray[i+aRadius,j+aRadius] = 1 if gaussian > threshold else 0
    return(planetArray)

class planet:
    def __init__(self, radius, orbit, period, start, color):
        self.radius = radius
        self.orbit = orbit
        self.period = period
        self.start = start
        self.color = color

if __name__ == "__main__":

    imgSize = 96
    steps = 96
    sunRadius = 12
    planetThreshold = 200
    sunColor = (239, 138, 27, 255)

    mercury = planet(4,16,3,15,(169, 169, 169, 255))
    mars = planet(6,28,2,45,(172, 42, 12, 255))
    earth = planet(7,40,1,180,(12, 133, 149, 255))

    for i in range(0,steps):
        img_array = np.zeros((imgSize, imgSize, 4))

        sunShape = gauss(imgSize/2,imgSize/2,sunRadius,planetThreshold)
        x1 = math.floor(imgSize/2)-sunRadius
        x2 = math.floor(imgSize/2)+sunRadius+1
        y1 = math.floor(imgSize/2)-sunRadius
        y2 = math.floor(imgSize/2)+sunRadius+1
        temp = img_array[x1:x2,y1:y2]
        sunTemp = np.multiply.outer(sunShape,sunColor)
        sunTemp2 = img_array[x1:x2,y1:y2,:]
        img_array[x1:x2,y1:y2,:] += np.floor(sunTemp)
        
        for j in (mercury, mars, earth):
            angle = (j.start + (360 * (i * j.period) / steps)) % 360
            angleRad = (angle * math.pi / 180)
            centerX = j.orbit *  math.cos(angleRad) + (imgSize/2)
            centerY = 1 * j.orbit *  math.sin(angleRad) + (imgSize/2)
            planetShape = gauss(centerX,centerY,j.radius,planetThreshold)
            aRadius = math.ceil(j.radius)
            x1 = math.floor(centerX)-aRadius
            x2 = math.floor(centerX)+aRadius+1
            y1 = math.floor(centerY)-aRadius
            y2 = math.floor(centerY)+aRadius+1
            temp = img_array[x1:x2,y1:y2]
            planetTemp = np.multiply.outer(planetShape,j.color)
            img_array[x1:x2,y1:y2,:] += np.floor(planetTemp)

        # plt.imshow(img_array.astype(np.uint8))
        # # plt.axis('off')  # Hide axes
        # # plt.savefig('random_image.png', bbox_inches='tight', pad_inches=0)
        # plt.show()
        plt.imsave(f"images\\faviconFrames\\{i}.png",img_array.astype(np.uint8))
