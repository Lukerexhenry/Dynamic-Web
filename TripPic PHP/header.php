<!doctype html>
<html class="no-js" lang="">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title><?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>
		<meta name="description" content="<?php bloginfo('description'); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<?php // wp_head(); // wordpress head functions
        
        
        ?>

		<link href="<?php theSkeletonDirectory(); ?>css/normalize.css" rel="stylesheet">
		<link href="<?php theSkeletonDirectory(); ?>css/skeleton.css" rel="stylesheet">
		<link href="<?php theActiveThemeDirectory(); ?>css/custom.css" rel="stylesheet">

		<script src="<?php theHTML5BoilerplateDirectory(); ?>js/vendor/modernizr-2.8.3.min.js"></script>
        <script src="<?php theActiveThemeDirectory(); ?>js/location.js"></script>

	</head>

	<body <?php body_class(); ?>>
		<!--[if lt IE 8]>
			<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

        <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="container">
    <div class="row">
        <div class="u-max-full-width nav">
            <!--<div class="wrapper header"> -->
            <!-- <h1 class="twelve columns title nav">TripPic</h1> -->
            <img class="logo" src="http://i.imgur.com/Tfv4zI5.png">
            <h1 class="title">TripPic</h1>
        </div>
    </div>
  </div>
        
        <!-- Scroll To Top -->
    <a href="#" class="scrollToTop">Scroll To Top</a>
        
        