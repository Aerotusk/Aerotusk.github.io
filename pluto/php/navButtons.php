<?php $firstComic = $comic == 1 ? '"#"' : '"/pluto/1/"';?>
<?php $prevComic = $comic == 1 ? '"#"' : '"/pluto/' . (string)($comic-1) . '/"';?>
<?php $nextComic = $comic == $max_comic ? '"#"' : '"/pluto/' . (string)($comic+1) . '/"';?>
<?php $lastComic = $comic == $max_comic ? '"#"' : '"/pluto/' . (strinG)$max_comic . '/"';?>

<a rel = "first" href=<?php echo $firstComic;?> class="buttonLink">  <button class="navButton">&lt;&lt;</button> </a>
<a rel = "prev" href=<?php echo $prevComic;?> class="buttonLink">  <button class="navButton">Prev</button>     </a>
<a rel = "rand" href=<?php echo '"/pluto/' . (string)rand(1,$max_comic) . '/"';?> class="buttonLink">  <button class="navButton">Random</button>   </a>
<a rel = "next" href=<?php echo $nextComic;?> class="buttonLink">  <button class="navButton">Next</button>     </a>
<a rel = "last" href=<?php echo $lastComic;?> class="buttonLink">  <button class="navButton">&gt;&gt;</button> </a>