<?php
$servername = "localhost";
$username = "root";   // default for XAMPP/WAMP
$password = "";       // default password is empty
$dbname = "my_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
