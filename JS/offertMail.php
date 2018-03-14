<?php
    $name=stripslashes($_POST["name"]);
    $surname=stripslashes($_POST["surname"]);
    $company=stripslashes($_POST["company"]);
    $adress=stripslashes($_POST["adress"]);
    $zipNumber=stripslashes($_POST["zipNumber"]);
    $city=stripslashes($_POST["city"]);
    $phoneNumber=stripslashes($_POST["phoneNumber"]);
    $email=stripslashes($_POST["email"]);

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
