<!-- Website Functionality Tester -->
<!DOCTYPE html>
<html>
    <head>
        <title>Mercury - Aerotusk</title>
        <link rel="stylesheet" href="../css/base.css">
        <link rel="stylesheet" href="../css/feed.css">
        <link rel="stylesheet" href="mercury.css">
        <link rel="icon" type="image" href="../images/planets/Mercury.png">
    </head>

    <div id="headerBox">
        <div id="headerLeft">
            <h1><em>Mercury</em></h1>
            <h2><em>Feature Testing</em></h2>
        </div>
        <div id="headerRight">
            <a href="."><img id="planet" src="../images/planets/Mercury.png" alt="Mercury" title="itty bitty boy"></a>
        </div>
    </div>

    <?php include("../php/navbar.php")?>

    <div class="box" id="planetGrowShrinkTest">
        <h2>Planet Hover Speed and Latency</h2>
        <h4>17 July, 2025</h4>
        <script src="a1_planetGrowShrink.js"></script>
        <div id="planetGrowShrinkDiv"></div>
        <script>populatePlanets()</script>
    </div>

    <div id="footerBox">
        <script src="../scripts/footer.js"></script>  
    </div>
</html>