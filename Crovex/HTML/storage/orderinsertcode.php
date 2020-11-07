<?php

$connection = mysqli_connect("localhost","root","");
$db = mysqli_select_db($connection, 'pjdb');

if(isset($_POST['insertdata']))
{
 //   $id = $_POST['id'];
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

    $query = "INSERT INTO order_fabric (`order_id`,`customer`,`fabric_type`,`machine`,`roll_quantity`,`fabric_weight`,`yarn_lot`,`fabric_color`,`order_date`,`unit_price`,`order_price`) VALUES ('$order_id','$customer','$fabric_type','$machine','$roll_quantity','$fabric_weight','$yarn_lot','$fabric_color','$order_date','$unit_price','$order_price')";
    $query_run = mysqli_query($connection, $query);

    if($query_run)
    {
        echo '<script> alert("Data Saved"); </script>';
        header('Location: stock-orders.php');
    }
    else
    {
        echo '<script> alert("Data Not Saved"); </script>';
    }
}

?>