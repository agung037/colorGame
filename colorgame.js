var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
];

var squares = document.querySelectorAll(".square");
var warnaBenar = colors[3];
var clueHeader = document.getElementById("clueHeader");

clueHeader.textContent = warnaBenar;

for (var index = 0; index < squares.length; index++) {
  // memberikan warna ke semua kotak
  squares[index].style.backgroundColor = colors[index];

  // menambahkan event listener ke semua squares
  squares[index].addEventListener("click", function (event) {
    // mengetahui warna yg akan di klik
    var warnaDipilih = this.style.backgroundColor;
    if (warnaBenar === warnaDipilih) {
      alert("benar");
    } else {
      alert("salah");
    }
    // membandingkannya dengan warna yg benar
  });
}
