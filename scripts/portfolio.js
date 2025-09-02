function populatePortfolio(moons)
{
    let portfolioLocation = document.getElementById("projectList");
    for (let i = 0; i < moons.length; i++)
    {
        let moon = moons[i];
        portfolioLocation.innerHTML += (`<div onmouseenter=\"listMove(${moon})\" onclick=\"portfolio('${moon}')\" id=\"${moon}\" class=\"projectListItem\"><p class=\"projectListText\">${moon}</p></div>`);
    }
}

function portfolio(moon) // Function that gets called on-click
{
    // Save current state (page and scroll location?) to back button

    // Fade out current page
    let projDiv = document.getElementById("project");
    
    // Create animation
    let id = null;
    clearInterval(id);
    id = setInterval(animateFadeOut,30);
    let opacity = 100;
    function animateFadeOut()
    {
        if(opacity > 0)
        {
            opacity -= 5;
            projDiv.style.opacity = opacity + '%';
        }
        else
        {
            clearInterval(id);

            // Pull data from {moon}.html
            moonText = loadFile("./moons/" + moon + ".html");
            
            // Replace previous page data with new page data
            projDiv.innerHTML = moonText;
            
            // Fade back in
            id = setInterval(animateFadeIn,30);
            function animateFadeIn()
            {
                if(opacity < 100)
                {
                    opacity += 5;
                    projDiv.style.opacity = opacity + '%';
                }
                else
                {
                    clearInterval(id);
                }
            }
        }
    }   
}

function loadFile(filePath) // From https://stackoverflow.com/questions/36921947/read-a-server-side-file-using-javascript 
{
    let result = null;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) 
    {
        result = xmlhttp.responseText;
    }
    else if(xmlhttp.status==404)
    {
        result = "UH OH! NOT FOUND!"
    }
    else
    {
        result = "Error " + xmlhttp.status + ": There was a problem. Please report!"
    }
    return result;
}