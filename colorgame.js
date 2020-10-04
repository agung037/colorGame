var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
];

var squares = document.querySelectorAll(".square");
var warnaBenar = acakWarna();
var clueHeader = document.getElementById("clueHeader");
var pesan = document.querySelector("#pesan");

clueHeader.textContent = warnaBenar;

for (var index = 0; index < squares.length; index++) {
  // memberikan warna ke semua kotak
  squares[index].style.backgroundColor = colors[index];

  // menambahkan event listener ke semua squares
  squares[index].addEventListener("click", function (event) {
    // mengetahui warna yg akan di klik
    var warnaDipilih = this.style.backgroundColor;
    if (warnaBenar === warnaDipilih) {
      pesan.textContent = "benar";
      perubahanWarna(warnaDipilih);
    } else {
      this.style.backgroundColor = "#232323";
      pesan.textContent = "Coba lagi";
    }
    // membandingkannya dengan warna yg benar
  });
}

function perubahanWarna(x) {
  // loop semua kotak
  for (var i = 0; i < squares.length; i++) {
    // rubah warna ke warna yg benar sesuai kunci
    squares[i].style.backgroundColor = x;
  }
}

function acakWarna() {
  random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
