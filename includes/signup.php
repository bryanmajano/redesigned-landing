<?php

$servername = "localhost";
$username = "signup-user";
$password = "Signup01";
$database = "sleepovation_members";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    header('Location: ../index.php?success=0');
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $stmt = $conn->prepare("INSERT INTO members (email) VALUES (?)");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $stmt->close();
    $conn->close();
    header('Location: ../index.html?success=1');
} else {
    $conn->close();
    header('Location: ../index.html?success=0');
}
?>