<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './Mail/PHPMailer/src/Exception.php';
require './Mail/PHPMailer/src//PHPMailer.php';
require './Mail/PHPMailer/src/SMTP.php';

$anrede = $_POST['anrede'];
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$rechnungsEmail = "lucatobonm@gmail.com";
$first_name = "";
$last_name = "";
$rechnungsID = "";
$mail = new PHPMailer(true); // Passing true enables exceptions
try {
  // SMTP configuration
  $mail->isSMTP();
  $mail->Host = 'mxe884.netcup.net'; // Your SMTP server address
  $mail->SMTPAuth = true;
  $mail->Username = 'Mail@praxis-urvertrauen.de'; // Your SMTP username
  $mail->Password = 'WhereAreTheApples'; // Your SMTP password
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Use ENCRYPTION_STARTTLS or ENCRYPTION_SMTPS
  $mail->Port = 25; // SMTP port

  $mail->CharSet = 'UTF-8';
  $mail->setFrom('Mail@praxis-urvertrauen.de', 'www.praxis-urvertrauen.de'); // FROM
  $mail->addAddress($rechnungsEmail, $first_name . " " . $last_name); // TO


  $subject = '=?UTF-8?B?' . base64_encode('Weiterleitung' . $rechnungsID) . '?=';
  $mail->Subject = $subject;

  $mail->isHTML(true);
  $mail->Body   = '<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <style>
      body {
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        line-height: 1.5;
        margin: 1rem;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
   </style>
  </head>

  <body>
    <h1 >POST von URVERTRAUEN</h1>
      <section>
        <p > Anrede: $anrede</p>
        <p > Name: $name </p>
        <p > E-Mail: $email </p>
        <p > Message: $message</p>
      </section>
  </body>
</html>';

  $mail->AltBody = 'Anfrage von Urvertrauen';

  $mail->send();
  echo "<script> window.location = 'http://www.praxis-urvertrauen.de' </script>";

  // EMAIL SENDED
} catch (Exception $e) {
  echo $e;
}
