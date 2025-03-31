<?php
if (isset($_POST['sub'])) {
    // Fetching form data
    $firstName = $_POST['inputFirstName'];
    $lastName = $_POST['lastFirstName'];
    $company = $_POST['inputCompanyName'];
    $email = $_POST['inputEmail4'];
    $message = isset($_POST['flaotingTextarea2']) ? $_POST['flaotingTextarea2'] : '';

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
    $headers = [
        "MIME-Version: 1.0",
        "Content-type: text/plain; charset=utf-8",
        "From: no-reply@yourdomain.com",
        "Bcc: $bcc"
    ];

    // changes done 
    
    // Convert headers to string
    $headers = implode("\r\n", $headers);

    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "<script>window.location.href='thanku.html';</script>";
    } else {
        echo "<script>alert('Message could not be sent.'); window.location.href='index.html';</script>";
    }
}
?>
