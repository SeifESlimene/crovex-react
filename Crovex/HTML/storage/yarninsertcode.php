<?php

$connection = mysqli_connect("localhost", "root", "");
$db = mysqli_select_db($connection, 'pjdb');

if (isset($_POST['insertdata'])) {
    //   $id = $_POST['id'];
    $customer = trim($_POST['customer']);
    $yarn_type = trim($_POST['yarn_type']);
    $yarn_count = trim($_POST['yarn_count']);
    $yarn_color = trim($_POST['yarn_color']);
    $delivery_date = trim($_POST['delivery_date']);
    $yarn_lot = trim($_POST['yarn_lot']);
    $yarn_weight = trim($_POST['yarn_weight']);
    $yarn_unit_price = trim($_POST['yarn_unit_price']);
    var_dump($_POST);

    $query = "INSERT INTO stock_yarn (`customer`,`yarn_type`,`yarn_count`,`yarn_color`,`delivery_date`,`yarn_lot`,`yarn_weight`,`yarn_unit_price`) VALUES ('$customer','$yarn_type','$yarn_count','$yarn_color','$delivery_date','$yarn_lot','$yarn_weight','$yarn_unit_price')";
    $query_run = mysqli_query($connection, $query);

    if ($query_run) {
        echo '<script> alert("Data Saved"); </script>';
        header('Location: stock-yarn.php');
    } else {
        echo '<script> alert("Data Not Saved"); </script>';
    }
}
