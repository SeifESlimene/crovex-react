<?php

require '../authentication/connection.php';
$req = 'SELECT * FROM stock_yarn';
$q   = mysqli_query($connection, $req);
var_dump($q);
// while ($rows = mysqli_fetch_assoc($q)) {
//     $tab[] = $rows;
// }
// echo(json_encode($tab));
