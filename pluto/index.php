<!-- WEBCOMIC TIME WOOOOOOOO! -->
<!DOCTYPE html>
<html>
    <?php 
        if(empty($_GET['url']))
        {
            include("php/comic_constants.php");
            $comic=$max_comic; 
        }
        else
        {
            include("php/comic_constants.php");
            $comic=$_GET['url'];
        }
    ?>

    <?php include("php/get-comic-sql.php") ?>

    <?php include("php/head.php"); ?>
    
    <body>

        <?php include("php/header.php"); ?>

        <?php include("../php/navbar.php"); ?>

        <div class="box" style="text-align: center;">
            <h2><?php echo $comic_name;?></h2>
            <h4><?php echo $comic_date;?></h4>
            <p class="bodyText" style="text-decoration:none">

                <?php include("php/navButtons.php");?>

                <img id="comic" src=<?php echo '"/pluto/comics/' . $comic_name . '.jpg"';?> alt=<?php echo '"' . $comic_alt . '"';?> title=<?php echo '"' . $comic_title . '"';?>/>

                <?php include("php/navButtons.php");?>
            </p>
        </div>

        <?php include("php/footer.php");?>

    </body>
</html>