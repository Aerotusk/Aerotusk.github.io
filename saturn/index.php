<!-- Ongoing Projects Portfolio -->
<!DOCTYPE html>
<html>
    <head>
        <title>Saturn - Aerotusk</title>
        <link rel="stylesheet" href="../css/base.css">
        <link rel="stylesheet" href="../css/feed.css">
        <link rel="stylesheet" href="../css/project.css">
        <link rel="stylesheet" href="saturn.css">
        <link rel="icon" type="image" href="../images/planets/Saturn.png">
    </head>
<body>
        <!-- Add wrapper so they're independently scrollable -->
        <div class="wrapper">
            <!-- Left column: List of moons (projects) -->
            <div id="projectList">
                <script src="../scripts/listHighlight.js"></script>
                <script src="../scripts/saturnian.js"></script>
                <script src="../scripts/portfolio.js"></script>
                <script>populatePortfolio(saturnianMoons)</script>
            </div>
            
            <!-- Right column: Content (need another div inside of it to keep scrollability) -->
            <div id="col2">
                <div id="contentBox">
                    <div id="headerBox">
                        <div id="headerLeft">
                            <h1><em>Saturn</em></h1>
                            <h2><em>Ongoing Projects</em></h2>
                        </div>
                        <div id="headerRight">
                            <a href="."><img id="planet" src="../images/planets/Saturn.png" alt="Saturn" title="Ooh, ahh"></a>
                        </div>
                    </div>

                    <?php include("../php/navbar.php")?>

                    <div id="project">
                        <p class="projectText">
                            &lt;-- Choose a project!!
                        </p>
                    </div>

                    <div id="footerBox">
                        <script src="../scripts/footer.js"></script>  
                    </div>
                </div>
            </div>
            <div id="col3">
            </div>
        </div>
    </body>
</html>