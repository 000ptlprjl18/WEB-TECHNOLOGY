<?php
include "db.php";

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

echo "<h2>Registered Users</h2>";
echo "<table border='1' cellpadding='10'>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
</tr>";

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>".$row["id"]."</td>
                <td>".$row["name"]."</td>
                <td>".$row["email"]."</td>
              </tr>";
    }
} else {
    echo "<tr><td colspan='3'>No users found</td></tr>";
}
echo "</table>";

$conn->close();
echo "<br><a href='index.html'>Go Back</a>";
?>
