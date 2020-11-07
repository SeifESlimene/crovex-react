<?php

$connection = mysqli_connect("localhost","root","");
$db = mysqli_select_db($connection, 'pjdb');

if(isset($_POST['insertdata']))
{
 //   $id = $_POST['id'];
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

    $query = "INSERT INTO stock_fabric (`customer`,`fabric_type`,`yarn_count`,`fabric_color`,`cut_date`,`yarn_lot`,`fabric_weight`,`fabric_unit_price`,`machine`,`gauge`) VALUES ('$customer','$fabric_type','$yarn_count','$fabric_color','$cut_date','$yarn_lot','$fabric_weight','$fabric_unit_price','$machine','$gauge')";
    $query_run = mysqli_query($connection, $query);

    if($query_run)
    {
        echo '<script> alert("Data Saved"); </script>';
        header('Location: stock-fabric.php');
    }
    else
    {
        echo '<script> alert("Data Not Saved"); </script>';
    }
}

?>