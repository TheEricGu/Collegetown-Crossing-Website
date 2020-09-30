<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$phone_number = $_POST['number'];
$message = $_POST['message']

$email_from = 'ericgu51893@gmail.com';

$email_subject = "New Form Submission";

$email_body = "User Name: $name.\n".
"User Email: $visitor_email.\n".
"User Phone Number: $phone_number.\n".
"User Message: $message.\n";

$to = "ericg51893@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

nail($to,$email_subject,$email_body,$headers);

header("Location: ../index.html");
?>