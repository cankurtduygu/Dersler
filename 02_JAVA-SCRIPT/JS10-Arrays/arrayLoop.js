 /*-------------------------------------------------------*
*     5. ALIŞTIRMA SORULARI - SEN ÇÖZ!
/*-------------------------------------------------------*/

// SORU 1: Bir dizideki çift sayıları bulup yeni bir diziye at (for...of kullan)
const rakamlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Çözümünü buraya yazdi
const ciftSayilar =[]

for (let sayi of rakamlar){

if( sayi%2==0) ciftSayilar.push(sayi);
}
console.log(ciftSayilar);


// SORU 2: Bir dizideki tüm sayıların toplamını bul (forEach kullan)
const notlar = [85, 90, 78, 92, 88];
// Çözümünü buraya yaz
let sonuc=0;

notlar.forEach(function(sayi){

sonuc+=sayi;
});

console.log(sonuc);

//notlar.forEach(sayi => sonuc+=sayi);//daha kisa hali

// SORU 3: Bir dizideki en büyük sayıyı bul (for...of kullan)
const degerler = [12, 45, 3, 89, 23, 67];
// Çözümünü buraya yaz


// SORU 4: Bir string dizisindeki 5 harften uzun kelimeleri say (forEach kullan)
const kelimeler = ["elma", "armut", "çilek", "muz", "portakal", "kivi"];
// Çözümünü buraya yaz


// SORU 5: Bir dizideki negatif sayıları pozitife çevir (for...of kullan)
const karisik = [-5, 10, -3, 8, -12, 4];
// Çözümünü buraya yaz
