<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Process and save user profile (e.g., store in a database)
    // Here, we'll just return a success message
    echo 'Profile created successfully!';
} else {
    echo 'Error: Invalid request';
}
?>
