//tugas no. 1
function MenghitungLuasPersegiPanjang(panjang, lebar) {
  let luas = panjang * lebar ;
  return luas
}
console.log(MenghitungLuasPersegiPanjang(25, 15));

//tugas no. 2
var x, y, jam, menit, detik,
    input  = document.getElementById('input'),
    btn    = document.getElementById('btn'),
    result = document.getElementById('result');

btn.addEventListener('click', function(){
  x     = input.value;
  y     = x % 3600;
  jam   = x / 3600;
  menit = y / 60;
  detik = y % 60;
  
  result.innerHTML = Math.floor(jam) + ' Jam ' + Math.floor(menit) + ' Menit ' + Math.floor(detik) + ' Detik ';
});

//tugas no. 3
for(var i=1; i<=5;i++){
  if(i%2 !=0){
    console.log(i, "ini bilangan ganjil")
  }else{
    console.log(i)
  }
}

//tugas no. 4
function menghitung_luas_lingkaran(phi, r){
  let luas=phi*r*r;
  return luas
}
console.log(menghitung_luas_lingkaran(15, 7))

//tugas no. 5
let a = -30 ;
let b = 10 ;
let c = 56 ;


console.log(Math.max( a, b, c))
console.log(Math.min( a, b, c))
function menghitung_nilai_rata_rata (a, b, c ) {
  let rata_rata = (a + b + c ) /3;
    return rata_rata
   
}
console.log(menghitung_nilai_rata_rata(-30, 10, 56));
//coba
