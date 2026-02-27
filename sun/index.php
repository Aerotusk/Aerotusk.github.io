<!-- Contains all the other planets -->
<!DOCTYPE html>
<html lang="en-us">
    <head>
        <title>Sun - Aerotusk</title>
        <link rel="stylesheet" href="/css/base.css">
        <link rel="stylesheet" href="/css/planet_size.css">
        <link rel="stylesheet" href="sun.css">
        <link rel="icon" type="image/png" href="/images/favicon.png">
        <link rel="shortcut icon" type="image/png" href="/images/favicon.png">
    </head>
    <body class="content">
        <svg width="1510" height="500" style="position:absolute;top:50%;left:50%;transform:translate(-755px,-250px)">
            <ellipse rx="75" ry="25" cx="50%" cy="50%" style="fill:#0000;stroke:#93939355;stroke-width:3;"/>
            <ellipse rx="150" ry="50" cx="50%" cy="50%" style="fill:#0000;stroke:#fada7945;stroke-width:3;"/>
            <ellipse rx="225" ry="75" cx="50%" cy="50%" style="fill:#0000;stroke:#53a0ff47;stroke-width:3;"/>
            <ellipse rx="300" ry="100" cx="50%" cy="50%" style="fill:#0000;stroke:#d4858567;stroke-width:3;"/>
            <ellipse rx="375" ry="125" cx="50%" cy="50%" style="fill:#0000;stroke:#cbe3de45;stroke-width:3;"/>
            <ellipse rx="450" ry="150" cx="50%" cy="50%" style="fill:#0000;stroke:#fada7945;stroke-width:3;"/>
            <ellipse rx="525" ry="175" cx="50%" cy="50%" style="fill:#0000;stroke:#fee9a845;stroke-width:3;"/>
            <ellipse rx="600" ry="200" cx="50%" cy="50%" style="fill:#0000;stroke:#b6faff45;stroke-width:3;"/>
            <ellipse rx="675" ry="225" cx="50%" cy="50%" style="fill:#0000;stroke:#4da0ff43;stroke-width:3;"/>
            <ellipse rx="750" ry="250" cx="50%" cy="50%" style="fill:#0000;stroke:#93939355;stroke-width:3;"/>
        </svg>
        
        <?php include("../php/settings.php") ?>

        <script src="/scripts/resize.js"></script>
        <script src="/scripts/planetData.js"></script>
        <script src="/scripts/ephemeris.js"></script>
        <script src="/scripts/orbitAnimate.js"></script>

        <a onmouseover="hoverSound()" href=".">         <img id="sun"     onmouseenter="growShrink(this)" class="orbiter"   src="/images/planets/Sun.png"     alt="The Sun"       title="Live Solar System View"></a>
        <a onmouseover="hoverSound()" href="/mercury/"> <img id="mercury" onmouseenter="growShrink(this)" class="orbiter"   src="/images/planets/Mercury.png" alt="Mercury"       title="Test Playground"></a>
        <a onmouseover="hoverSound()" href="/venus/">   <img id="venus"   onmouseenter="growShrink(this)" class="orbiter"   src="/images/planets/Venus.png"   alt="Venus"         title="Art Gallery"></a>
        <a onmouseover="hoverSound()" href="/earth/">   <img id="earth"   onmouseenter="growShrink(this)" class="orbiter"   src="/images/planets/Earth.png"   alt="Earth"         title="???"></a>
        <a onmouseover="hoverSound()" href="/mars/">    <img id="mars"    onmouseenter="growShrink(this)" class="orbiter"   src="/images/planets/Mars.png"    alt="Mars"          title="???"></a>
        <a onmouseover="hoverSound()" href="/inter/">   <img id="inter"   onmouseenter="growShrink(this)" class="orbiter"   src="/images/planets/Inter.png"   alt="The Interloper"title="News and Updates"></a>
        <a onmouseover="hoverSound()" href="/jupiter/"> <img id="jupiter" onmouseenter="growShrink(this)" class="orbiter"   src="/images/planets/Jupiter.png" alt="Jupiter"       title="Completed Projects Portfolio"></a>
        <a onmouseover="hoverSound()" href="/saturn/">  <img id="saturn"  onmouseenter="growShrink(this)" class="orbiter"   src="/images/planets/Saturn.png"  alt="Saturn"        title="Ongoing Projects Portfolio"></a>
        <a onmouseover="hoverSound()" href="/uranus/">  <img id="uranus"  onmouseenter="growShrink(this)" class="orbiter"   src="/images/planets/Uranus.png"  alt="Uranus"        title="???"></a>
        <a onmouseover="hoverSound()" href="/neptune/"> <img id="neptune" onmouseenter="growShrink(this)" class="orbiter"   src="/images/planets/Neptune.png" alt="Neptune"       title="???"></a>
        <a onmouseover="hoverSound()" href="/pluto/">   <img id="pluto"   onmouseenter="growShrink(this)" class="orbiter"   src="/images/planets/Pluto.png"   alt="Pluto"         title="Webcomic"></a>
        <script>calculateOrbits(planetList)</script>
    </body>
</html>