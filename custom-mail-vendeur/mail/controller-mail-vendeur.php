<?php

$to  = $_POST['adresseEmail'] ;

$emailContenue = $_POST['emailContenue'] ;

$detailsCommande = $_POST['detailsCommande'] ;

$subject = "Mail de confiramtion d'envois de votre colis";

$message = file_get_contents("../template_parts/email.php");
$message .= "<p> $emailContenue </p>" ;
$message .= "<p style='text-align: center !important;' > --------------------- Commande details --------------------- </p>";
$message .=  $detailsCommande ;
$message .= file_get_contents("../template_parts/email-footer.php");

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Capharnaüm" . "\r\n" .


mail($to,$subject,$message,$headers);

?>

