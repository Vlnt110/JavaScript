let harga;
let nama_barang;
let ket="";
let jumlah=0;
let total=0;
let subtotal=0;

function cek_barang() {
    let nama =document.getElementById("listbarang").value;
    switch(nama) {
        case "buku":
            harga =10000;
            nama_barang="buku";
            break;

        case "tas":
            harga = 50000;
            nama_barang = "tas";
            break;

        case "pensil":
            harga = 5000;
            nama_barang = "pensil";
            break;

        case "penghapus":
            harga = 1500;
            nama_barang = "penghapus";
            break;
    }
    jumlah = document.getElementById("jumlah").value;
    subtotal = jumlah * harga;
    total = total + subtotal;
    ket = ket + nama_barang + ":" + harga + "*" + jumlah + "=" +subtotal + "<br>";
    document.getElementById("barang").innerHTML = ket;
    document.getElementById("total").innerHTML = "total belanja =" + total; 
}