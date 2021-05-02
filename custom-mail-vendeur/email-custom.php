<?php
   /*
   Plugin Name: custom mail vendeur
   Plugin URI: http://my-awesomeness-emporium.com
   description: Cette pulgin ajout une zone de texte dans l'envoie de mail sur wcfm
  a plugin to create awesomeness and spread joy
   Version: 1.2
   Author: Rah jean
   Author URI: http://mrtotallyawesome.com
   License: GPL2
   */



  function custom_js() {

      wp_register_style('custom_css', plugins_url('/css/style.css',__FILE__ ));
      wp_enqueue_style('custom_css');
      wp_enqueue_script( 'jquery_custom', plugins_url( '/js/jquery.js', __FILE__) );
      wp_enqueue_script( 'my_custom_js', plugins_url( '/js/main.js', __FILE__ ) );

  }
  add_action('wp_enqueue_scripts','custom_js');




?>

