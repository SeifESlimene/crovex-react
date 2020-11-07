<?php

$connection = mysqli_connect("localhost","root","");
$db = mysqli_select_db($connection, 'pjdb');

if(isset($_POST['updatedata']))
{
    $id = $_POST['update_id'];
    $customer = $_POST['customer'];
    $fabric_type = $_POST['fabric_type'];
    $yarn_count = $_POST['yarn_count'];
    $fabric_color = $_POST['fabric_color'];
    $cut_date = $_POST['cut_date'];
    $yarn_lot = $_POST['yarn_lot'];
    $fabric_weight = $_POST['fabric_weight'];
    $fabric_unit_price = $_POST['fabric_unit_price'];
    $machine = $_POST['machine'];
    $gauge = $_POST['gauge'];

    $query = "UPDATE stock_fabric SET customer='$customer', fabric_type ='$fabric_type', yarn_count='$yarn_count',fabric_color ='$fabric_color', cut_date = '$cut_date', yarn_lot = '$yarn_lot', fabric_weight = '$fabric_weight', fabric_unit_price = '$fabric_unit_price', machine = '$machine', gauge = '$gauge'  where id='$id'";
    $query_run = mysqli_query($connection, $query);
    if($query_run)
    {
        echo '<script> alert("Data Updated"); </script>';
        header('Location: stock-fabric.php');
    }
    else
    {
        echo '<script> alert("Data Not Saved"); </script>';
    }
}

?>