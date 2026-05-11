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
  transition: 500ms ease; this
}
<!-- transition easing creates a neat effect on page loading, maybe keep? -->

.orbiter:hover
{
  transform: scale(1.1);
}


@media (prefers-reduced-motion: reduce) 
{
    .orbiter 
    {
    transition: none;
    }
    
    .orbiter:hover
    {
    transform: scale(1.05);
    }
}
