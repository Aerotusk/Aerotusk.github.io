function populatePortfolio(moons)
{
    var portfolioLocation = document.getElementById("projectList");
    for (i = 0; i < moons.length; i++)
    {
        moon = moons[i];
        portfolioLocation.innerHTML += (`<div onmouseenter=\"listMove('${moon}')\" onclick=\"portfolio('${moon}')\" id=\"${moon}\" class=\"projectListItem\"><p class=\"projectListText\">${moon}</p></div>`)
    }
}

function portfolio(moon)
{
    // Function that gets called on-click
    // Save current state (page and scroll location?) to back button
    // Fade out current page
    // Pull data from {moon}.html (if possible?)
    // Replace previous page data with new page data
    // Fade back in
    console.log(moon);
}