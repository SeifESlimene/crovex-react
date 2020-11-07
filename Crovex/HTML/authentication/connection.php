<?php

$server   = '127.0.0.1';
$user     = 'root';
$password = '';
$db       = 'pjdb';

$connection = mysqli_connect($server, $user, $password);
$db         = mysqli_select_db($connection, $db);

// if ($connection) {
//     echo 'Successfuly Connected To DB</br>';
// } else {
//     echo 'Problem Connected To DB';
// }
