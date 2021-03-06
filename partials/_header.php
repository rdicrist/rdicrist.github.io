<?php 
// Declare global variables, i'm including my header on every page so they will all be passed
    // $basePath = '/Desktop/basic%20websites/CookingBlog/';
    $recipePagePath = 'recipe-pages/';
    $imagePath = 'style/images/';
    $recipeTextPath = 'recipes/';
    $miscPath = 'misc-pages/';

    $cssPath = 'style/css/style.css';
    $indexCssPath = 'style/css/index-style.css';
    $menusCssPath = 'style/css/menus-style.css';
    $recipeCssPath = 'style/css/recipe-style.css';
    $jsPath = 'scripts/main.js'; 
    $jqueryPath = 'scripts/jquery.js';

    // forces refresh of css and js
    function auto_version($file='')
    {
        $t = time();
        return $file. "?". $t;
    };

    // NOTE: if i want this file to be pushed, need to do git update-index --no-assume-unchanged partials/_header.php
    // back to not tracking: git update-index --assume-unchanged partials/_header.php
?>


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Cooking ONLY!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
        <!-- <meta name="viewport" contents="device-width"> -->
        <base href="https://cooking-blog-ricki-dee.herokuapp.com/">
        <!-- <base href="/Desktop/basic%20websites/CookingBlog/"> -->

        <link rel="stylesheet" type="text/css" media="screen" href="<?php echo auto_version($cssPath); ?>" />
        <link rel="stylesheet" type="text/css" media="screen" href="<?php echo auto_version($indexCssPath); ?>" /> 
        <link rel="stylesheet" type="text/css" media="screen" href="<?php echo auto_version($menusCssPath); ?>" /> 
        <link rel="stylesheet" type="text/css" media="screen" href="<?php echo auto_version($recipeCssPath); ?>" />       

        <script src="<?php echo auto_version($jsPath); ?>" ></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="<?php echo auto_version($jqueryPath); ?>" type="module"></script>

        <link rel="icon" 
          type="image/png" 
          href="style/images/logo.png" />
    </head>
</html>

