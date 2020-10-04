var colors = buatWarna(6);
var squares = document.querySelectorAll(".square");
var warnaBenar = acakWarna();
var clueHeader = document.getElementById("clueHeader");
var pesan = document.querySelector("#pesan");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
  // generate all new color
  colors = buatWarna(6);
  // pick new random color from array
  warnaBenar = acakWarna();
  // ganti color display clue
  clueHeader.textContent = warnaBenar;

  // loop semua kotak
  for (var i = 0; i < squares.length; i++) {
    // rubah warna ke warna yg benar sesuai kunci
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
});

clueHeader.textContent = warnaBenar;

for (var index = 0; index < squares.length; index++) {
  // memberikan warna ke semua kotak
  squares[index].style.backgroundColor = colors[index];

  // menambahkan event listener ke semua squares
  squares[index].addEventListener("click", function (event) {
    // mengetahui warna yg akan di klik

    var warnaDipilih = this.style.backgroundColor;
    console.log(warnaDipilih, warnaBenar);
    if (warnaBenar === warnaDipilih) {
      pesan.textContent = "benar";
      resetButton.textContent = "main lagi";
      perubahanWarna(warnaDipilih);
      h1.style.backgroundColor = warnaDipilih;
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

function buatWarna(jml) {
  // buat array
  var arr = [];
  // masukan angka acak kedalam array
  for (var i = 0; i < jml; i++) {
    // get random color and push to array
    arr.push(randomColor());
  }
  // return array
  return arr;
}

function randomColor() {
  // acak Red 0-255
  var r = Math.floor(Math.random() * 255 + 1);
  // acak Green
  var g = Math.floor(Math.random() * 255 + 1);
  // acak Blue
  var b = Math.floor(Math.random() * 255 + 1);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// update gaes
