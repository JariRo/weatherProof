<?php
    $title=stripslashes($_POST["title"]);
    $email=stripslashes($_POST["email"]);
    $content=stripslashes($_POST["content"]);

    $secret="API-key";
    $response=$_POST['captcha'];

    $verify=file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}');
    $captcha_success=json_decode($verify);
    if ($captcha_success->success==false) {
        //not verified
    }
    else if ($captcha_success->success==true){
        //verified
    }
 ?>
