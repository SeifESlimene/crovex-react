<?php

require '../authentication/connection.php';

header('Access-Control-Allow-Origin: *');

$req = 'select * from stock_fabric';

$exec = mysqli_query($connection, $req);

while ($row = mysqli_fetch_assoc($exec)) {
    $rows[] = $row;
}

echo json_encode($rows);
