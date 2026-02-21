<?php 
    header("Content-type: image/svg+xml"); 
    if(empty($_GET['color']))
    {
        $color="#bb000040"; 
    }
    else
    {
        $color=$_GET['color'];
    }
?>
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <rect width="23" height="23" x="0" y="0" fill=<?php echo '"#' . $color . '"';?> />
    <rect width="23" height="23" x="0.5" y="0.5" fill="#00000000" stroke-width="1" stroke=<?php echo '"#' . $color . '"';?> />
</svg>