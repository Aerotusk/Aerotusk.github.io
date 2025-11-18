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
        <link rel="stylesheet" href="{directory}../css/base.css">
        <link rel="stylesheet" href="{directory}../css/feed.css">
        <link rel="stylesheet" href="{directory}../css/planet_size.css">
        <link rel="stylesheet" href="{directory}../css/navbar.css">
        <link rel="stylesheet" href="{directory}pluto.css">
        <link rel="icon" type="image" href="{directory}../images/planets/Pluto.png">
    </head>

    <body>

        <div id="headerBox">
            <div id="headerLeft">
                <h1><em>Pluto</em></h1>
                <h2><em>???</em></h2>
            </div>
            <div id="headerRight">
                <a href="."><img id="planet" src="{directory}../images/planets/Pluto.png" alt="Pluto" title="itty bitty boy"></a>
            </div>
        </div>

        <div id="navbar">
            <script src="{directory}../scripts/resize.js"></script>
            <script src="{directory}../scripts/planetData.js"></script>

            <a onmouseenter="planetResize(Sun)"     href="{directory}../sun/">     <img id="sun"     src="{directory}../images/planets/Sun.png"     alt="The Sun"       title="Live Solar System View"></a>
            <a onmouseenter="planetResize(Mercury)" href="{directory}../mercury/"> <img id="mercury" src="{directory}../images/planets/Mercury.png" alt="Mercury"       title="Test Playground"></a>
            <a onmouseenter="planetResize(Venus)"   href="{directory}../venus/">   <img id="venus"   src="{directory}../images/planets/Venus.png"   alt="Venus"         title="Art Gallery"></a>
            <a onmouseenter="planetResize(Earth)"   href="{directory}../earth/">   <img id="earth"   src="{directory}../images/planets/Earth.png"   alt="Earth"         title="???"></a>
            <a onmouseenter="planetResize(Mars)"    href="{directory}../mars/">    <img id="mars"    src="{directory}../images/planets/Mars.png"    alt="Mars"          title="???"></a>
            <a onmouseenter="planetResize(Inter)"   href="{directory}../inter/">   <img id="inter"   src="{directory}../images/planets/Inter.png"   alt="The Interloper"title="News and Updates"></a>
            <a onmouseenter="planetResize(Jupiter)" href="{directory}../jupiter/"> <img id="jupiter" src="{directory}../images/planets/Jupiter.png" alt="Jupiter"       title="Completed Projects Portfolio"></a>
            <a onmouseenter="planetResize(Saturn)"  href="{directory}../saturn/">  <img id="saturn"  src="{directory}../images/planets/Saturn.png"  alt="Saturn"        title="Ongoing Projects Portfolio"></a>
            <a onmouseenter="planetResize(Uranus)"  href="{directory}../uranus/">  <img id="uranus"  src="{directory}../images/planets/Uranus.png"  alt="Uranus"        title="???"></a>
            <a onmouseenter="planetResize(Neptune)" href="{directory}../neptune/"> <img id="neptune" src="{directory}../images/planets/Neptune.png" alt="Neptune"       title="???"></a>
            <a onmouseenter="planetResize(Pluto)"   href="{directory}../pluto/">   <img id="pluto"   src="{directory}../images/planets/Pluto.png"   alt="Pluto"         title="Webcomic"></a>
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
            <script src="{directory}../scripts/footer.js"></script>  
        </div>

    </body>

</html>'''