<?php

    if($_SERVER["REQEST_METHOD"] == "POST"){

        $name=stripslashes($_POST["name"]);
        $email=stripslashes($_POST["email"]);
        $content=stripslashes($_POST["content"]);
        $header = "Content-Type: text/html\r\nReply-To: $email\r\nFrom: $name <$email>";

        $email_content = "Namn: $name \n";
        $email_content .= "Email: $email \n";
        $email_content .= "Innehåller:\n$content\n";

        $subject = "Offertförfrågan från $name"
        $recipient = "jarirosenstrom@gmail.com";


        if(mail($recipient, $subject, $email_content, $header)) {
            http_response_code(200);
            die("true");
        } else{
            http_response_code(500);
            echo("något gick fel")
            die("There was an error sending the email.")
        }

        /*
        $secret="API-key";
        $response=$_POST['captcha'];

        $verify=file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}');
        $captcha_success=json_decode($verify);
        if ($captcha_success->success==false) {
            //not verified
            die("Captcha not working")
        }
        else if ($captcha_success->success==true){
            //verified

        }
        */
    }

    else {
        http_response_code(400);
    }
 ?>
