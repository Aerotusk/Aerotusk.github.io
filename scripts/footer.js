function addFooter()
{
    // Find footer div and add the top button and icon svgs
    let footerDiv = document.getElementById("footerBox");
    footerDiv.innerHTML +=`
<h2 style="margin: auto;">
    <a href="#" style="text-decoration: none;color:inherit;opacity:50%;"><em>To The Top</em></a>
</h2>
<div style="margin-top: 12px">
    <a href="https://www.twitch.tv/aerotusk" style="text-decoration: none;">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 28">
        <path d="M5,0L0,5v18h6v5l5-5h4l9-9V0H5z
        M22,13l-4,4h-4l-3.5,3.5v-3.5H6V2h16V13z"/>
        <path d="M17,5.5h2v6h-2v-6"/>
        <path d="M11.5,5.5h2v6h-2v-6"/>
        </svg>
    </a>
    <a href="https://www.youtube.com/@Aerotusk" style="text-decoration: none;">
        <svg class="icon" viewBox="0 0 660 415" xmlns="http://www.w3.org/2000/svg">
        <path
        d="
        M 275,120 
        v 175
        l 150,-87.5
        Z 

        m 338,228 
        c -7,25 -26,45 -52,52 
        -45,12 -228,12 -228,12
        0,0 -182,0 -228,-12
        -25,-7 -45,-26 -52,-52
        -12,-45 -12,-140 -12,-140
        0,0 0,-95 12,-140
        7,-25 26,-45 52,-52
        45,-12 228,-12 228,-12
        0,0 182,0 228,12
        25,7 45,26 52,52
        12,45 12,140 12,140
        0,0 0,95 -12,140"/>
        </svg>
    </a>
    <a href="https://www.instagram.com/aerotusk_/" style="text-decoration: none;">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0.5 0.5 9 9">
        <path d="M3,0.5
        A2.5,2.5 0,0,0 0.5,3V7A2.5,2.5 0,0,0 3,9.5H7A2.5,2.5 0,0,0 9.5,7V3A2.5,2.5 0,0,0 7,0.5Z
        m0,1
        H7A1.5,1.5 0,0,1 8.5,3V7A1.5,1.5 0,0,1 7,8.5H3A1.5,1.5 0,0,1 1.5,7V3A1.5,1.5 0,0,1 3,1.5Z"/>
        <path d="M5,2.5
        a2.5,2.5,0,1,0,0,5a2.5,2.5,0,1,0,0,-5
        M5,3.5
        a1.5,1.5,0,1,1,0,3 1.5,1.5,0,1,1,0,-3Z"/>
        <circle cx="7.4" cy="2.6" r="0.55" />
        </svg>
    </a>
</div>
`
}

addFooter();