<?php

ini_set("include_path", '/home/rsodoc/php:' . ini_get("include_path"));
require_once('Mail.php');
require_once('Mail/mime.php');

$servername = "localhost";
$username = "signup-user";
$password = "Signup01";
$database = "sleepovation_members";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    header('Location: ../index.php?success=0');
    die("Connection failed: " . $conn->connect_error);
}

$res = $conn->query("SELECT count(*) as count FROM members");

$row = $res->fetch_assoc();
$total = $row["count"];

$body = "
<!doctype html>
<html xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'>
    <h1>Daily Signup Summary</h1><br>
    <h2>Total Members: ". $total . "</h2>";

$res = $conn->query("SELECT id, email, date_added FROM members WHERE date_added > DATE_SUB(CURDATE(), INTERVAL 1 DAY) ORDER BY id ASC");
if ($res->num_rows > 0) {
    $body .= "<h3>New Members In The Last Day: " . $res->num_rows . "</h3>";
    $body .= "<table border='1'><tr><th>ID</th><th>Email</th><th>Date/Time Added</th></tr>";
    while ($row = $res->fetch_assoc()) {
        $id = $row["id"];
        $email = $row["email"];
        $date_added = $row["date_added"];
        $body .= "<tr><td>" . $id . "</td><td>" . $email . "</td><td>" . $date_added . "</td></tr>";    
    }
    $body .= "</table>";
} else {
    $body .= "<p>No new members in the last day</p>";
}

$body .= "</html>";
    $message = new Mail_mime();
    $message->setTXTBody("Sleepovation Daily Summary");
    $message->setHTMLBody($body);

    
    $email = 'richardcodos@sleepovation.com';
    $recipients = $email;

    $headers['From'] = 'SleepOvation <info@sleepovation.com>';
    $headers['To'] = $email;
    $headers['Subject'] = 'SleepOvation Daily Summary';

    $params['sendmail_path'] = '/usr/lib/sendmail';

    $mail = & Mail::factory('sendmail', $params);

    $result = $mail->send($recipients, $message->headers($headers), $message->get());

?>