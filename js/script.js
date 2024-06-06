function validasi(){
    var nama = document.getElementById("nama").value;
    var tanggal = document.getElementById("tanggal").value;
    var email = document.getElementById("email").value;
    var saran = document.getElementById("saran").value;

    if (nama !== "" && tanggal !== "" && email !== "" && saran !== ""){
        document.getElementById("output_nama").innerHTML = nama;
        document.getElementById("output_tanggal").innerHTML = tanggal;
        document.getElementById("output_email").innerHTML = email;
        document.getElementById("output_saran").innerHTML = saran;
    }
    else {
        document.getElementById("output_gagal").innerHTML = "Harap masukan data dengan lengkap";
    }
    
}

let destination = document.getElementById("Destination");
let jepang = document.getElementById("jepang");
let korea = document.getElementById("korea");
let inggris = document.getElementById("inggris");

jepang.addEventListener("mouseover", function() {
    destination.style.backgroundImage = "url('/27-may-24-MarcellinoCW/gambar/Jepang.jpg')";
    destination.style.backgroundRepeat = "no-repeat";
    destination.style.backgroundSize = "cover"
    destination.style.backgroundPosition = "center"
    destination.style.transition = "2s"
});
  
jepang.addEventListener("mouseout", function() {
    destination.style.backgroundImage = "url('/27-may-24-MarcellinoCW/gambar/Background.jpg')";
});

korea.addEventListener("mouseover", function() {
    destination.style.backgroundImage = "url('/27-may-24-MarcellinoCW/gambar/Korea2.jpg')";
    destination.style.backgroundRepeat = "no-repeat";
    destination.style.backgroundSize = "cover"
    destination.style.backgroundPosition = "center"
    destination.style.transition = "2s"
});
  
korea.addEventListener("mouseout", function() {
    destination.style.backgroundImage = "url('/27-may-24-MarcellinoCW/gambar/Background.jpg')";
});

inggris.addEventListener("mouseover", function() {
    destination.style.backgroundImage = "url('/27-may-24-MarcellinoCW/gambar/Inggris.jpg')";
    destination.style.backgroundRepeat = "no-repeat";
    destination.style.backgroundSize = "cover"
    destination.style.backgroundPosition = "center"
    destination.style.transition = "2s"
});
  
inggris.addEventListener("mouseout", function() {
    destination.style.backgroundImage = "url('/27-may-24-MarcellinoCW/gambar/Background.jpg')";
});