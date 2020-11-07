<?php

$connection = mysqli_connect("localhost","root","");
$db = mysqli_select_db($connection, 'pjdb');

if(isset($_POST['updatedata']))
{
    $id = $_POST['update_id'];
    $order_id = $_POST['order_id'];
    $customer = $_POST['customer'];
    $fabric_type = $_POST['fabric_type'];
    $machine = $_POST['machine'];
    $roll_quantity = $_POST['roll_quantity'];
    $fabric_weight = $_POST['fabric_weight'];
    $yarn_lot = $_POST['yarn_lot'];
    $fabric_color = $_POST['fabric_color'];
    $order_date = $_POST['order_date'];
    $unit_price = $_POST['unit_price'];
    $order_price = $_POST['order_price'];

    $query = "UPDATE order_fabric SET order_id='$order_id', customer='$customer', fabric_type ='$fabric_type', machine='$machine', roll_quantity ='$roll_quantity', fabric_weight = '$fabric_weight', yarn_lot = '$yarn_lot', fabric_color = '$fabric_color', order_date = '$order_date', unit_price = '$unit_price', order_price = '$order_price'  where id='$id'";
    $query_run = mysqli_query($connection, $query);

    if($query_run)
    {
        echo '<script> alert("Data Updated"); </script>';
        header('Location: stock-orders.php');
    }
    else
    {
        echo '<script> alert("Data Not Saved"); </script>';
    }
}

?>