<?php
require 'connection.php';

header('Access-Control-Allow-Origin: http://localhost:3000');

$result     = file_get_contents('php://input');
$jsonObject = json_decode($result);

if (!empty($jsonObject->username)) {
    $username = $jsonObject->username;
    $req      = "select username from register_table where username='" . $username . "'";
    $exec     = mysqli_query($connection, $req);
    if (mysqli_num_rows($exec)) {
        $res1 = mysqli_fetch_assoc($exec);
    }
}

if (!empty($jsonObject->password)) {
    if (!empty($jsonObject->username)) {
        $password = $jsonObject->password;
        $req      = "select password from register_table where password='" . $password . "' AND username='" . $username . "'";
        $exec     = mysqli_query($connection, $req);
        if (mysqli_num_rows($exec)) {
            $res2 = mysqli_fetch_assoc($exec);
        }
    }
}

if (!empty($res1) && !empty($res2)) {
    $obj = (object) array_merge(
        (array) $res1, (array) $res2);
    echo json_encode($obj);
} else if (!empty($res1)) {
    echo json_encode($res1);
} else if (!empty($res2)) {
    echo json_encode($res2);
} else {
    echo json_encode(['empty' => 'empty']);
}
