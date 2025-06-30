include 'koneksi.php';

$aksi = $_GET['aksi'];

if ($aksi == 'tambah') {
    $nama = $_POST['nama'];
    $lokasi = $_POST['lokasi'];
    $deskripsi = $_POST['deskripsi'];
    $jenis = $_POST['jenis'];
    $gambar = $_POST['gambar'];
    mysqli_query($conn, "INSERT INTO wisata (nama, lokasi, deskripsi, jenis, gambar) VALUES ('$nama', '$lokasi', '$deskripsi', '$jenis', '$gambar')");
    echo 'success';
}

if ($aksi == 'hapus') {
    $id = $_POST['id'];
    mysqli_query($conn, "DELETE FROM wisata WHERE id=$id");
    echo 'success';
}

if ($aksi == 'update') {
    $id = $_POST['id'];
    $nama = $_POST['nama'];
    $lokasi = $_POST['lokasi'];
    $deskripsi = $_POST['deskripsi'];
    $jenis = $_POST['jenis'];
    $gambar = $_POST['gambar'];
    mysqli_query($conn, "UPDATE wisata SET nama='$nama', lokasi='$lokasi', deskripsi='$deskripsi', jenis='$jenis', gambar='$gambar' WHERE id=$id");
    echo 'success';
}

if ($aksi == 'get') {
    $result = mysqli_query($conn, "SELECT * FROM wisata");
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);
}