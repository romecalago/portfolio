<?php

    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $emailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        // $mailTO = "romecalago@gmail.com";
        $mailTO = "fovajox829@izzum.com";
        $headers = "From: " . $emailFrom;
        $txt = "You have an email from " . $name . "\n\n" . $message;

        mail($mailTO, $subject, $txt, $headers);
        header("Location: index.php?mailsend");

    }

?>