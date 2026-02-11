<?php header("Content-type: text/css"); ?>
html 
{
    overflow-x: hidden;
    overflow-y: scroll;
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

#sun
{
    width:72px;
    height:72px;
    transform:translate(-36px,-36px);
    z-index: 980;
}

#mercury
{
    width:40px;
    height:40px;
    transform:translate(-20px,-20px);
}

#venus
{
    width:50px;
    height:50px;
    transform:translate(-25px,-25px);
}

#earth
{
    width:52px;
    height:52px;
    transform:translate(-26px,-26px);
}

#mars
{
    width:45px;
    height:45px;
    transform:translate(-22.5px,-22.5px);
}

#inter
{
    width:30px;
    height: 30px;
    transform:translate(-15px,-15px);
}

#jupiter
{
    width:64px;
    height:64px;
    transform:translate(-32px,-32px);
}

#saturn
{
    width:85px;
    height:85px;
    transform:translate(-42.5px,-42.5px);
}

#uranus
{
    width:52px;
    height:52px;
    transform:translate(-26px,-26px);
}

#neptune
{
    width:50px;
    height:50px;
    transform:translate(-25px,-25px);
}

#pluto
{
    width:30px;
    height: 30px;
    transform:translate(-15px,-15px);
}