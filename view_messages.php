<?php
include "db.php";

$result = $conn->query("SELECT * FROM messages ORDER BY created_at DESC");
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Messages - Admin</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
  <h2>📩 Contact Messages</h2>

  <table border="1" cellpadding="10" cellspacing="0" width="100%">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Message</th>
      <th>Date</th>
    </tr>

    <?php while($row = $result->fetch_assoc()) { ?>
      <tr>
        <td><?php echo $row["id"]; ?></td>
        <td><?php echo $row["name"]; ?></td>
        <td><?php echo $row["email"]; ?></td>
        <td><?php echo $row["message"]; ?></td>
        <td><?php echo $row["created_at"]; ?></td>
      </tr>
    <?php } ?>

  </table>

</div>

</body>
</html>

<?php
$conn->close();
?>