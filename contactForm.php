


<?php
$result = '';
if(isset($_POST['submit'])) {
    require 'PHPMailer/PHPMailerAutoload.php';
    // require 'PHPMailer/class.phpmailer.php';
    // require 'PHPMailer/class.smtp.php';
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail ->Host = 'smtp.gmail.com';
    $mail ->Port = 587;
    $mail ->SMTPAuth=true;
    $mail ->SMTPSecure='tls';
    $mail ->Username='cobitX19@gmail.com';
    $mail ->Password='';
    $mail ->setFrom($_POST['email'],$_POST['name']);
    $mail ->addAddress('cobitX19@gmail.com');
    $mail ->addReplyTo($_POST['email'],$_POST['name']);
    $mail ->isHTML(true);
    $mail ->Subject='Contact from my Portfolio: ' .$_POST['subject'];
    $mail ->Body='<h3>Name: '.$_POST['name'].'<br>Email: '.$_POST['email'].
    '<br>Message: '.$_POST['message'].'</h3>';

    if(!$mail->send()) {
        $result = "Something went wrong. Please try again." . $mail->ErrorInfo;
    } else {
        $result = "Thanks \t " . $_POST['name'] . "for connecting with me. I'll get back to you soon!";
    }



}

?>
