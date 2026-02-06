<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "comics";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "select * from `comic_info` where `comic_info`.`Number`= " . $comic;
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $comic_name = $row["Name"];
    $comic_alt = $row["Alt"];
    $comic_title = $row["Title"];
    $comic_date = $row["Date"];
    $comic_extra = $row["Extra"];
?>