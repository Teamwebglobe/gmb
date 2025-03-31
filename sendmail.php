<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['sub'])) {
    // Fetching form data
    $firstName = isset($_POST['inputFirstName']) ? $_POST['inputFirstName'] : '';
    $lastName = isset($_POST['lastFirstName']) ? $_POST['lastFirstName'] : '';
    $company = isset($_POST['inputCompanyName']) ? $_POST['inputCompanyName'] : '';
    $email = isset($_POST['inputEmail4']) ? $_POST['inputEmail4'] : '';
    $message = isset($_POST['flaotingTextarea2']) ? $_POST['flaotingTextarea2'] : '';

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Invalid email format!'); window.location.href='index.html';</script>";
        exit;
    }

    // Email recipient
    $to = "maannitesh13@gmail.com"; 
    $bcc = "jitenderbachhraj5@gmail.com"; 
    $subject = "New Contact Form Submission";
    
    // Email content
    $email_message = "Name: $firstName $lastName\n";
    $email_message .= "Company Name: $company\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message: $message\n";

    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8" . "\r\n";
    $headers .= "From: no-reply@yourdomain.com" . "\r\n";
    $headers .= "Bcc: $bcc" . "\r\n";

    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        header("Location: thanku.html");
        exit;
    } else {
        echo "<script>alert('Message could not be sent.'); window.location.href='index.html';</script>";
    }
}
?>
