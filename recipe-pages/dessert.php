<?php 
    // title, imgsource/recipesource (dont include filetype)
    $recipeInfo = [
                // ['Fall Explosion Pie!', 'fall_explosion_pie']
                // ['Banana Jam!', 'banana'],
                // ['Peach "Cin" Jam!', 'peachcin'],
                // ['Cranberry Holiday Jam!', 'cranberry']
            ];

    $name = $_GET['page'];
?>


<?php include('../partials/_header.php');?>

<?php include('../partials/recipe-pages-menus.php');?>

<?php include('../partials/_recipe-list.php');?>
