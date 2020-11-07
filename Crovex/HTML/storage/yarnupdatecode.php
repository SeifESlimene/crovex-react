<?php
$connection = mysqli_connect("localhost", "root", "");
$db = mysqli_select_db($connection, 'pjdb');

if (isset($_POST['updatedata'])) {

    $id = trim($_POST['update_id']);
    $customer = trim($_POST['customer']);
    $yarn_type = trim($_POST['yarn_type']);
    $yarn_count = trim($_POST['yarn_count']);
    $yarn_color = trim($_POST['yarn_color']);
    $delivery_date = trim($_POST['delivery_date']);
    $yarn_lot = trim($_POST['yarn_lot']);
    $yarn_weight = trim($_POST['yarn_weight']);
    $yarn_unit_price = trim($_POST['yarn_unit_price']);
    var_dump($customer);
    var_dump($yarn_type);
    var_dump($yarn_count);
    var_dump($delivery_date);
    var_dump($yarn_lot);


    $query = "UPDATE stock_yarn SET customer='$customer', yarn_type='$yarn_type', yarn_count='$yarn_count', yarn_color='$yarn_color', delivery_date='$delivery_date', yarn_lot='$yarn_lot', yarn_weight='$yarn_weight', yarn_unit_price='$yarn_unit_price'  where id='$id' ";
    $query_run = mysqli_query($connection, $query);

    if ($query_run) {
        // var_dump($query_run);
        echo '<script> alert("Data Updated"); </script>';
        header("Location: stock-yarn.php");
    } else {
        echo '<script> alert("Data Not Updated"); </script>';
    }
}

// bech nista3mlou fonction ta3mal trim ma3naha tni7i les espace eli dayrin bil text w traja3hom lil html ma8er espace wa2ila meloul may7otich espace fil base
// hani raje3lik ama hathi idée simple rahou attend



