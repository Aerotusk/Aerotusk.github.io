<!-- WEBCOMIC TIME WOOOOOOOO! -->
<!DOCTYPE html>
<html>
    <?php 
        if(empty($_GET['url']))
        {
            $ind = "";
            include("comic_php/comic_constants.php");
            $comic=$max_comic; 
        }
        else
        {
            $ind = "../";
            include("comic_php/comic_constants.php");
            $comic=$_GET['url'];
        }
    ?>

    <?php include("comic_php/get-comic-sql.php") ?>

    <?php include("comic_php/head.php"); ?>
    
    <body>

        <?php include("comic_php/header.php"); ?>

        <?php include("comic_php/comic_navbar.php"); ?>

        <div class="box" style="text-align: center;">
            <h2><?php echo $comic_name;?></h2>
            <h4><?php echo $comic_date;?></h4>
            <p class="bodyText" style="text-decoration:none">

                <?php include("comic_php/navButtons.php");?>

                <img id="comic" src=<?php echo '"' . $ind . "comics/" . $comic_name . ".jpg" . '"';?> alt=<?php echo '"' . $comic_alt . '"';?> title=<?php echo '"' . $comic_title . '"';?>/>

                <?php include("comic_php/navButtons.php");?>
            </p>
        </div>

        <?php include("comic_php/comic_footer.php");?>

    </body>
</html>