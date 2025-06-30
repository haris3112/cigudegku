<?php
$host = 'sql308.infinityfree.com';
$user = 'if0_39359101';
$pass = 'Lolipop311205';
$db = 'if0_39359101_hrsabd1bst';

$conn = mysqli_connect($host, $user, $pass, $db);
if (!$conn) {
    die('Koneksi gagal: ' . mysqli_connect_error());
}
?>