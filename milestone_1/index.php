<?php

    // Include file db.php
    include '../milestone_1/db.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Link CSS -->
    <link rel="stylesheet" href="./css/style.css">

    <title>Milestone 1</title>
</head>
<body>

    <!-- Header -->
    <header>
        <!-- Logo -->
        <div class="logo">
            <img src="./img/spotify.svg" alt="">
        </div>
    </header>
    

    <!-- Main -->
    <main>

        <!-- Wrapper album -->
        <div class="wrapper_albums">

            <!-- Ciclo foreach array albums -->
            <?php
                foreach ($albums as $element) {
                    // var_dump($element);
                    ?>

                    <!-- Album -->
                    <div class="album">

                        <!-- Wrapper Immagine -->
                        <div class="img_wrapper">
                            <img src="<?php echo $element['poster'] ?>" alt="">
                        </div>

                        <!-- Wrapper description -->
                        <div class="description_wrapper">
                            <h1 class="title"> <?php echo $element['title'] ?> </h1>
                            <h3 class="author"> <?php echo $element['author'] ?> </h3>
                            <h3 class="year"> <?php echo $element['year'] ?> </h3>
                        </div>

                    </div>

                    <?php  
                }
            ?>
        </div>
    </main>

</body>
</html>