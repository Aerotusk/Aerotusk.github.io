def comicFiller(dirHeight,pageTitle,first,prev,rand,next,last,src,title,altText,date):
    if (dirHeight == 1):
        directory = "../"
    else: # This is the top-level index of pluto. Also need to change src so that it grabs the comic from the correct folder
        directory = ""
    
    return f'''<!-- WEBCOMIC TIME WOOOOOOOO! -->
<!DOCTYPE html>
<html>

    <head>
        <title>{pageTitle}</title>
        <link rel="stylesheet" href="{directory}../s/base.css">
        <link rel="stylesheet" href="{directory}../s/feed.css">
        <link rel="stylesheet" href="{directory}../s/navbar.css">
        <link rel="stylesheet" href="{directory}pluto.css">
        <link rel="icon" type="image" href="{directory}../images/Pluto.png">
    </head>

    <body>

        <div id="headerBox">
            <div id="headerLeft">
                <h1><em>Pluto</em></h1>
                <h2><em>???</em></h2>
            </div>
            <div id="headerRight">
                <a href="."><img id="planet" src="{directory}../images/Pluto.png" alt="Pluto" title="itty bitty boy"></a>
            </div>
        </div>

        <div id="navbar">
            <script src="../sun/planetAnimations.js"></script>
            <a onmouseenter="planetResize('sun')"     href="{directory}../sun/">     <img id="sunObj"     class="planet sun"      src="{directory}../images/Sun.png"     alt="The Sun"       title="Ooooh, ahhhhhh"></a>
            <a onmouseenter="planetResize('mercury')" href="{directory}../mercury/"> <img id="mercuryObj" class="planet mercury"  src="{directory}../images/Mercury.png" alt="Mercury"       title="IT BURNS"></a>
            <a onmouseenter="planetResize('venus')"   href="{directory}../venus/">   <img id="venusObj"   class="planet venus"    src="{directory}../images/Venus.png"   alt="Venus"         title="oh lawdy it's acid rain"></a>
            <a onmouseenter="planetResize('earth')"   href="{directory}../earth/">   <img id="earthObj"   class="planet earth"    src="{directory}../images/Earth.png"   alt="Earth"         title="wow I finally made it"></a>
            <a onmouseenter="planetResize('mars')"    href="{directory}../mars/">    <img id="marsObj"    class="planet mars"     src="{directory}../images/Mars.png"    alt="Mars"          title="space piracy is against the united nations code of conduct"></a>
            <a onmouseenter="planetResize('jupiter')" href="{directory}../jupiter/"> <img id="jupiterObj" class="planet jupiter"  src="{directory}../images/Jupiter.png" alt="Jupiter"       title="Big boi!"></a>
            <a onmouseenter="planetResize('saturn')"  href="{directory}../saturn/">  <img id="saturnObj"  class="planet saturn"   src="{directory}../images/Saturn.png"  alt="Saturn"        title="i guess he liked it?"></a>
            <a onmouseenter="planetResize('uranus')"  href="{directory}../uranus/">  <img id="uranusObj"  class="planet uranus"   src="{directory}../images/Uranus.png"  alt="Uranus"        title="yours, not mine"></a>
            <a onmouseenter="planetResize('neptune')" href="{directory}../neptune/"> <img id="neptuneObj" class="planet neptune"  src="{directory}../images/Neptune.png" alt="Neptune"       title="king"></a>
            <a onmouseenter="planetResize('pluto')"   href="{directory}../pluto/">   <img id="plutoObj"   class="planet pluto"    src="{directory}../images/Pluto.png"   alt="Pluto"         title="itty bitty boi"></a>
            <a onmouseenter="planetResize('inter')"   href="{directory}../inter/">   <img id="interObj"   class="planet inter"    src="{directory}../images/Inter.png"   alt="The Interloper"title="Play Outer Wilds!"></a>
        </div>
        
        <div class="box" style="text-align: center;">
            <h2>{title}</h2>
            <h4>{date}</h4>
            <p class="bodyText" style="text-decoration:none">
                <a rel = "first" href="{first}" class="buttonLink">    <button class="navButton">&lt;&lt;</button> </a>
                <a rel = "prev" href="{prev}" class="buttonLink">      <button class="navButton">Prev</button>     </a>
                <a rel = "rand" href="{rand}" class="buttonLink">     <button class="navButton">Random</button>   </a>
                <a rel = "next" href="{next}" class="buttonLink">      <button class="navButton">Next</button>     </a>
                <a rel = "last" href="{last}" class="buttonLink">      <button class="navButton">&gt;&gt;</button> </a>
                <img id=\"comic\" src=\"{src}\" alt=\"{title}\" title=\"{altText}\"/>
                <a rel = "first" href="{first}" class="buttonLink">    <button class="navButton">&lt;&lt;</button> </a>
                <a rel = "prev" href="{prev}" class="buttonLink">      <button class="navButton">Prev</button>     </a>
                <a rel = "rand" href="{rand}" class="buttonLink">     <button class="navButton">Random</button>   </a>
                <a rel = "next" href="{next}" class="buttonLink">      <button class="navButton">Next</button>     </a>
                <a rel = "last" href="{last}" class="buttonLink">      <button class="navButton">&gt;&gt;</button> </a>
            </p>
        </div>

        <div id="footerBox">
            <!-- Okay, but I still want some kind of footer with YouTube, Twitch, Instagram, etc. -->
            <h2 style="margin: auto;">
                <a href="#" style="text-decoration: none;color:inherit;opacity:50%;"><em>To The Top</em></a>
            </h2>
            <div style="margin-top: 12px;">
                <a href="https://www.youtube.com/@Aerotusk"><img class="icon" style="width:46.6px;" src="{directory}../images/youtube.svg" alt="Aerotusk - YouTube" title="Aerotusk - YouTube"></a>
                <a href="https://www.twitch.tv/aerotusk"><img class="icon" src="{directory}../images/glitch_flat_ice.svg" alt="Aerotusk - Twitch" title="Aerotusk - Twitch"></a>
                <a href="https://www.instagram.com/aerotusk_/"><img class="icon" src="{directory}../images/Instagram_Glyph_White.svg" alt="Aerotusk - Instagram" title="Aerotusk - Instagram"></a>
            </div>
        </div>

    </body>

</html>'''