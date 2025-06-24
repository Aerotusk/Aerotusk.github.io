def comicFiller(dirHeight,pageTitle,first,prev,rand,next,last,src,title,date):
    if (dirHeight == 1):
        directory = "../"
    else: # This is the top-level index of pluto. Also need to change src so that it grabs the comic from the correct folder
        directory = ""
    
    return f'''
    <!-- WEBCOMIC TIME WOOOOOOOO! -->
    <!DOCTYPE html>
    <html>

        <head>
            <title>{pageTitle}</title>
            <link rel="stylesheet" href="{directory}../s/base.css">
            <link rel="stylesheet" href="{directory}../s/feed.css">
            <link rel="stylesheet" href="{directory}pluto.css">
            <link rel="icon" type="image" href="{directory}../images/Mercury.png">
        </head>

        <body>

            <div id="headerBox">
                <div id="headerLeft">
                    <h1><em>Pluto</em></h1>
                    <h2><em>???</em></h2>
                </div>
                <div id="headerRight">
                    <a href="."><img id="planet" src="{directory}../images/Mercury.png" alt="Mercury" title="itty bitty boy"></a>
                </div>
            </div>
            
            <div class="box" style="text-align: center;">
                <h2>{title}</h2>
                <h4>{date}</h4>
                <p class="bodyText">
                    <a rel = "first" href="{first}">    <button class="navButton">&lt;&lt;</button> </a>
                    <a rel = "prev" href="{prev}">      <button class="navButton">Prev</button>     </a>
                    <a rel = "rand" href="{rand}" >     <button class="navButton">Random</button>   </a>
                    <a rel = "next" href="{next}">      <button class="navButton">Next</button>     </a>
                    <a rel = "last" href="{last}">      <button class="navButton">&gt;&gt;</button> </a>
                    <img id=\"comic\" src=\"{src}\" title=\"{title}\"/>
                    <a rel = "first" href="{first}">    <button class="navButton">&lt;&lt;</button> </a>
                    <a rel = "prev" href="{prev}">      <button class="navButton">Prev</button>     </a>
                    <a rel = "rand" href="{rand}" >     <button class="navButton">Random</button>   </a>
                    <a rel = "next" href="{next}">      <button class="navButton">Next</button>     </a>
                    <a rel = "last" href="{last}">      <button class="navButton">&gt;&gt;</button> </a>
                </p>
            </div>

        </body>

    </html>'''