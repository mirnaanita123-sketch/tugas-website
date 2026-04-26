function ubahJudul() {
    let nama = prompt("Masukkan nama kelompok:");
    if (nama) {
        document.getElementById("judul").textContent = nama;
    }
}

function gantiTema() {
    document.body.style.backgroundColor = "lightyellow";
}

function tambahKarya() {
    let input = document.getElementById("inputKarya").value;

    if (input === "") {
        alert("Isi dulu!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = input;

    document.getElementById("listKarya").appendChild(li);
    document.getElementById("inputKarya").value = "";
}

function tambahPesan() {
    let pesan = document.getElementById("pesan").value;

    if (pesan === "") {
        alert("Tulis pesan dulu!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = pesan;

    document.getElementById("listPesan").appendChild(li);
    document.getElementById("pesan").value = "";
}