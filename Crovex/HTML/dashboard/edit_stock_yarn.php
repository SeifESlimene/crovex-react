<?php

require '../authentication/connection.php';

header('Access-Control-Allow-Origin: *');

$result     = file_get_contents('php://input');
echo $result;
$jsonObject = json_decode($result);

// $req = 'select * from stock_yarn';

// $exec = mysqli_query($connection, $req);

// while ($row = mysqli_fetch_assoc($exec)) {
//     $rows[] = $row;
// }

echo $jsonObject;
