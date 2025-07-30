// Automatically add css to head, find navbar div and populate it, and run the resizing scripts

function addNavbar()
{
    // Add stylesheets to head
    document.head.innerHTML += "<link rel='stylesheet' href='../css/planet_size.css'>";
    document.head.innerHTML += "<link rel='stylesheet' href='../css/navbar.css'>";

    // Find Navbar div and add all the planets (with resize scripts as well)
    var navbarDiv = document.getElementById("navbar");
    navbarDiv.innerHTML +=
    `
    <a onmouseenter="planetResize(Sun)"     href="../sun/">     <img id="sun"     src="../images/Sun.png"     alt="The Sun"       title="Ooooh, ahhhhhh"></a>
    <a onmouseenter="planetResize(Mercury)" href="../mercury/"> <img id="mercury" src="../images/Mercury.png" alt="Mercury"       title="IT BURNS"></a>
    <a onmouseenter="planetResize(Venus)"   href="../venus/">   <img id="venus"   src="../images/Venus.png"   alt="Venus"         title="oh lawdy it's acid rain"></a>
    <a onmouseenter="planetResize(Earth)"   href="../earth/">   <img id="earth"   src="../images/Earth.png"   alt="Earth"         title="wow I finally made it"></a>
    <a onmouseenter="planetResize(Mars)"    href="../mars/">    <img id="mars"    src="../images/Mars.png"    alt="Mars"          title="space piracy is against the united nations code of conduct"></a>
    <a onmouseenter="planetResize(Inter)"   href="../inter/">   <img id="inter"   src="../images/Inter.png"   alt="The Interloper"title="Play Outer Wilds!"></a>
    <a onmouseenter="planetResize(Jupiter)" href="../jupiter/"> <img id="jupiter" src="../images/Jupiter.png" alt="Jupiter"       title="Big boi!"></a>
    <a onmouseenter="planetResize(Saturn)"  href="../saturn/">  <img id="saturn"  src="../images/Saturn.png"  alt="Saturn"        title="i guess he liked it?"></a>
    <a onmouseenter="planetResize(Uranus)"  href="../uranus/">  <img id="uranus"  src="../images/Uranus.png"  alt="Uranus"        title="yours, not mine"></a>
    <a onmouseenter="planetResize(Neptune)" href="../neptune/"> <img id="neptune" src="../images/Neptune.png" alt="Neptune"       title="king"></a>
    <a onmouseenter="planetResize(Pluto)"   href="../pluto/">   <img id="pluto"   src="../images/Pluto.png"   alt="Pluto"         title="itty bitty boi"></a>
    `;
}

addNavbar();