<?php header("Content-type: text/css"); ?>
html 
{
    overflow-x: hidden;
    overflow-y: hidden;
    scrollbar-width: none;  /* Firefox, Safari 18.2+, Chromium 121+ */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
}

html::-webkit-scrollbar
{ 
    display: none;  /* Older Safari and Chromium */
}

.orbiter
{
    position:absolute;
    top:50%;
    left:50%;
    z-index: 0;
}