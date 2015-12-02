<?php
/**
 * Template Name: TripPic
 *
 *	This is a home template
 *
 */
    get_header();

?>

    <?php if (have_posts()) : ?>
        
        <?php while (have_posts()) : the_post(); ?> 



    
    
    <!-- <div id="image"></div> -->
    
    <!-- Image Container -->
    <div id="pictures-container" data-lightbox="picture"></div>

        
    
        <?php endwhile; ?>
        
        <?php else : ?>
        
            <?php get_template_part('404.php') ?>
        
        <?php endif; ?>
        

    <?php
        get_footer();
    ?>