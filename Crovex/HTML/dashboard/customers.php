<?php

require '../authentication/connection.php';

header('Access-Control-Allow-Origin: http://localhost:3000');

$req = 'select * from customer_table';

$exec = mysqli_query($connection, $req);

while ($row = mysqli_fetch_assoc($exec)) {
    $rows[] = $row;
}

echo json_encode($rows);
