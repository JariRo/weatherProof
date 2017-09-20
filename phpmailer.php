<?php
    if(isset($_POST['singlebutton'])){
        $name = $_POST['thename'];                             //variablar från html-dokumentet
        $epost = $_POST['theEmail'];
        $message = $_POST['themessage'];
        $callme = $_POST['callme'];
        $phoneNr = $_POST['phonenumber'];

        require 'PHPMailer/PHPMailerAutoload.php';
        $mail = new PHPMailer;

        $mail->SMTPDebug = 3;                               // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'mailcluster.loopia.se';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'username';                 // SMTP username
        $mail->Password = 'password';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;
        $mail->CharSet = 'UTF-8';                           // TCP port to connect to


        $mail->setFrom($epost, "$name");
        $mail->addAddress('Info@weatherproof.se', 'Kontakt');     // Add a recipient
        $mail->isHTML(true);                                  // Set email format to HTML

        $mail->Subject = 'Kontaktformulär';

        $mail->Body    = "Namn: $name<br>Meddelande: $message<br>Email: $epost<br>Ring mig:$callme<br>TelefonNummer:$phoneNr";

        $mail->AltBody = "Namn: $name\nMeddelande: $message\nEmail: $epost\nRing mig:$callme\nTelefonNummer:$phoneNr";

        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'Message has been sent';
    }
}
?>
