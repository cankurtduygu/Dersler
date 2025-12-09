//* artikyil hesaplayan func.
/*
const artikYil= function (yil) {

      if (yil%4 == 0){
          if(yil%100 ==0){
              if(yil%400 ==0){
                  console.log("artik yildir hem 100'e hem 400'e bölündü😉");
              } else {
                  console.log("artik yil degildir 100'e bölündü ama 400'e bölünmedi✔️");  
                      }
          } else {
              console.log("artik yildir 4 e bölündü 100e bölünmedi❌");
                  }  
      }else{
          console.log("artik yil degildir 4 e bölünmedi ✖️");
          
      }
  }

artikYil(prompt("yil giriniz"));

*/
//* ücgen alani hesaplayan func.

/*const alan = (taban, yükseklik) =>{
    sonuc = (taban*yükseklik)/2;
    return sonuc;
}

console.log("ücgenin alani",alan(4,4));
*/
//* kareAl, küpAl, üsAl
/*
const kareAl = (sayi) => {
    sonuc=sayi*sayi;
    return sonuc;
}

const üsAl = (sayi,üs) => {
    sonuc=sayi**üs;
    return sonuc;
}

const küpAl = (sayi) => {
    sonuc=sayi**3;
    return sonuc;
}

console.log(kareAl(5));
console.log(küpAl(5));
console.log(üsAl(5,3));
*/

//******************************************* */
//!kendi sorularim
//******************************************* */

//? ÖRNEK1.

// const taksiÜcretHesapla = (mesafe, yolcuSayisi) => {
//     let acilisücret =50;
//     let kmÜcret = 15;
//     let toplamücret=0;

//     mesafe > 10 ? toplamücret= acilisücret + (kmÜcret* 10 + ((mesafe-10)*(kmÜcret-(kmÜcret*0.2)))) : toplamücret= acilisücret + (kmÜcret * mesafe);

//     yolcuSayisi > 3 ? toplamücret+=50 : toplamücret+=0;


//     return toplamücret;

// }

// console.log(taksiÜcretHesapla(15,3));

//?SORU 1 - Kolay (Function + For Döngüsü)
/*
let toplam = 0;
const topla = (sayi)=>{
    for(let i =1; i<=sayi; i++){
        i % 2 == 0 ? toplam+=i : null;
    }
    
    return toplam;
}


console.log(topla(5));
*/
//?SORU 2 - Orta (Arrow Function + While)
/*
const faktoriyel = (sayi) => {
    let sonuc = 1;
    while(sayi > 0) {
        sonuc *= sayi--;  // Kısaltılmış: çarp ve azalt
    }
    return sonuc;
}

console.log(faktoriyel(3));   // 6
// console.log(faktoriyel(5));   // 120
// console.log(faktoriyel(10));  // 3628800

//*recursive ile
const faktoriyel2 = (sayi) => 
    sayi <= 1 ? 1 : sayi * faktoriyel(sayi - 1);

console.log(faktoriyel(5));  // 120
*/

//?soru3 - Array icinde en büyük sasiyi bulma
/*
const numbers = [12, 5, 33, 7, 42, 19, 1, 42];

let büyük = numbers[0];

for(let i=1;i<numbers.length;i++){
    if(numbers[i]>büyük){
        büyük= numbers[i];
    }
}
console.log(büyük);

//*while ile yazimi

let i = 1;
while(i < numbers.length) {
    if(numbers[i] > büyük) {
        büyük = numbers[i];
    }
    i++;
}
*/

//? soru4 - carpim tablosu (1 den 10 a kadar)
/*
for(let i=1;i<=10;i++){
    for(let j=1; j<=10;j++)
        console.log(`${i} * ${j} =`,i*j);
        
}
*/

//? soru5 - sayinin tek ve cift sayisini sayma
/*


let sayi = 16;
let birler = 0;
let cift=0;
let tek=0;


while(sayi > 0){
birler = sayi%10;

if(birler%2==0) {
    cift++
}else{ tek++}

sayi = Math.floor(sayi/10);
}


console.log("Tek:", tek);
console.log("Çift:", cift);

*/

//? soru6  tersine yazdirma text="Merhaba"
/*
let text = "Merhaba";
let yeni = "";

for(let i = text.length - 1; i >= 0; i--){
    yeni += text[i];  // += ile ekliyoruz
}

console.log(yeni);  // "abahreM"
 */

//? cift sayilari yazdirma 0 ile 50 arasindaki sayilar
/*
for(let i=0; i<=50; i+=2){
    console.log(i);
}

*/

//?7)  Minimum Değer Bulma Bir dizideki en küçük değeri while döngüsü ile bulun.
/*
const numbers = [12, 5, 33, 7, 42, 19, 1, 42];

let kucuk = numbers[0];
let i = 1;

while(i < numbers.length){
    if(numbers[i] < kucuk){
        kucuk = numbers[i];
    }
    i++;
}

console.log(kucuk);
*/
//? soru 8 asal sayilar 1-100 arasi
/*
for(let sayi = 2; sayi <= 100; sayi++){
    let asalMi = true;
    
    for(let bolen = 2; bolen < sayi; bolen++){
        if(sayi % bolen == 0){
            asalMi = false;
            break;  // Bölen bulunca döngüden çık
        }
    }
    
    if(asalMi){
        console.log(sayi);
    }
}
*/

//? soru 9 faktöriyel do-while ile hesaplama

/*
const faktoriyel = (sayi) => {
    let sonuc = 1;
    do {
        sonuc *= sayi--;
    }
    while (sayi > 0);  // ← noktalı virgül ekledik

    return sonuc;
}

console.log(faktoriyel(5));   // 120
*/
//? girilen sayinin basamaklari toplami tek mi cift mi
/*
let sayi = 12345678;
let birler = 0;
let toplam = 0;

while(sayi > 0){
    birler = sayi % 10;
    toplam += birler;  // ← basamakları topluyoruz
    sayi = Math.floor(sayi / 10);
}

if(toplam % 2 == 0){
    console.log(`Basamaklar toplamı ${toplam} - ÇİFT`);
} else {
    console.log(`Basamaklar toplamı ${toplam} - TEK`);
}
*/

//? En Uzun Artan Alt Dizi (Longest Increasing Sequence)
/*
const arr2 = [5, 1, 2, 3, 0, 4, 5, 6];
let gecici = [arr2[0]];  // İlk elemanla başla
let enUzun = [];

for(let i = 1; i < arr2.length; i++){
    if(arr2[i] > arr2[i-1]){
        gecici.push(arr2[i]);  // Artan sıra devam ediyor
    } else {
        if(gecici.length > enUzun.length){
            enUzun = [...gecici];  // En uzunu sakla
        }
        gecici = [arr2[i]];  // Yeni dizi başlat
    }
}

// Son diziyi de kontrol et
if(gecici.length > enUzun.length){
    enUzun = [...gecici];
}

console.log("En uzun artan dizi:", enUzun);  // [0, 4, 5, 6]
*/
/*
const arr2 = [5, 1, 2, 3, 0, 4, 5, 6];
let longest = 1;
let current = 1;
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > arr2[i - 1]) {
        current++;
        if (current > longest) longest = current;
    } else {
        current = 1;
    }
}
console.log(longest); */

//? En Uzun Artan Alt Dizi (Longest Increasing Sequence)

//* bir sayi dizisi veriliyor dizideki en uzun artan ardisik artan alt dizinin uzunlugunu bulunuz

/*
const arr2 = [1,2,2,3,4,5,2,3,4,5,6,7];
let longest = 1;
let current = 1;
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] == (arr2[i - 1] + 1)) {
        current++;
        if (current > longest) longest = current;
    } else {
        current = 1;
    }
}
console.log(longest);
*/

//* yinelenen eleman kontrolü
/*
const arr4 = [2, 2, 8, 12, 7, 5, 1];
let cift = false;

for(let i = 0; i < arr4.length; i++){
    let j = 0;
    while(j < arr4.length){
        if(i !== j && arr4[i] === arr4[j]){
            cift = true;
            break;
        }
        j++;
    }
    if(cift) break;  // Bulununca dış döngüden de çık
}

console.log(cift);
*/

//! --- fonksiyonlar soru cözümü  -----


//? SORU1.Parametre olarak bir pozitif sayı alacak.
//? ßu fonksiyon, 1'den o sayıya kadar olan tüm sayıların toplamını recursive yöntemle hesaplayacak.


/*
const topla = (sayi) => {
    if(sayi == 1) return 1;  // Base case (durma koşulu)
    return sayi + topla(sayi - 1);
}

console.log(topla(5));  // 15 (5+4+3+2+1)
*/


//? SORU2. Parametre olarak iç içe geçmiş (nested) bir dizi alacak.
//?Görevin, bu diziyi düzleştirip (flatten) tek seviyeli bir dizi hâline getirmek.
/*

function flatten(arr) {
    const result = [];
  for (let i = 0; i < arr.length; i++) {
        const eleman = arr[i];

        // Eğer eleman bir array ise, onu tekrar flatten ile aç
        if (Array.isArray(eleman)) {
            const icDizi = flatten(eleman); // recursive çağrı

            // icDizi içindeki elemanları tek tek result'a ekle
            for (let j = 0; j < icDizi.length; j++) {
                result.push(icDizi[j]);
            }
        } else {
            // Eğer normal değer ise direkt ekle
            result.push(eleman);
        }
    }

    return result;
}
*/
/*
console.log(flatten([1, [2, [3, 4], 5], 6]));

const flatten = (arr) => {
  let sonuc = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // eleman dizi ise, içine gir ve aç
      sonuc = sonuc.concat(flatten(arr[i]));
    } else {
      // eleman dizi değilse direkt ekle
      sonuc.push(arr[i]);
    }
  }
  return sonuc;
};

*/
/*
// Test
console.log(flatten([1, [2, [3, 4]], 5])); 
// [1, 2, 3, 4, 5]

console.log(flatten([[1, 2], 3, [4, [5, 6]], 7]));
// [1, 2, 3, 4, 5, 6, 7]
*/


//?SORU3: İç içe dizideki TÜM sayıların toplamını bul
/*
const sumNested = (dizi) => {
    let toplam = 0;

    for (let i = 0; i < dizi.length; i++) {
        const eleman = dizi[i];

        if (typeof eleman === "number") {
            // normal sayıyı toplama ekle
            toplam += eleman;
        } else {
            // sayı değilse, biz bunun yine bir dizi olduğunu varsayıyoruz
            toplam += sumNested(eleman);
        }
    }

    return toplam;
};
*/

/*
console.log(sumNested([1, [2, 3], [4, [5, 6]], 7])); // 28

// Çıktı: 28
*/

//? SORU4.Parametre olarak pozitif bir sayı alacak.
//Bu fonksiyon sayıyı stringe çevirmeden, tamamen matematiksel işlemlerle tersine çevirip döndürecek.
/*

function reverseNumber(n) {
    let yeni = 0;

    while (n > 0) {
        let sonRakami = n % 10;        // son rakamı al
        yeni = yeni * 10 + sonRakami;  // yeni sayıya ekle
        n = Math.floor(n / 10);        // son rakamı sil
    }

    return ters;
}

console.log(reverseNumber(1234));  // 4321
console.log(reverseNumber(9005));  // 5009
console.log(reverseNumber(707));   // 707
*/


//? SORU5:Bir sayının basamak sayısını bul (string kullanmadan!)
/*
function countDigits(n) {
    let sayac = 0;

    while (n > 0) {
        n = Math.floor(n / 10); // bir basamak sil
        sayac++;                // basamak sayısını artır
    }

    return sayac;
}

console.log(countDigits(7));        // 1
console.log(countDigits(45));       // 2
console.log(countDigits(1234));     // 4
console.log(countDigits(500009));   // 6
*/
//? SORU6: 
/*
Bir fonksiyon yaz: countDownAndUp(n)

Görev:

Bu fonksiyon:

n’den 1’e kadar geriye doğru tüm sayıları recursive olarak yazdırsın.

1’e ulaştığında durmasın; bu kez 1’den tekrar n’e kadar ileri doğru sayıları recursive olarak yazdırsın.

Fonksiyon sadece console.log kullansın, başka hiçbir return veya veri yapısı yok.

*/
/*
function countDownAndUp(n) {
  console.log(n);

  // Geriye doğru git (base case: 1)
  if (n > 1) {
    countDownAndUp(n - 1);
  }

  // Geri dönüşte ileri say (1'i tekrar yazmamak için kontrol)
  if (n > 1) {
    console.log(n);
  }
}

countDownAndUp(4);*/


//?SORU7 Bir sayının rakamlarının faktöriyelleri toplamını hesaplayan fonksiyon
/*
// Bir sayının faktöriyelini hesaplayan fonksiyon (döngü ile)
function factorial(n) {
  let result = 1;
  let i = 1;
  while (i <= n) {
    result = result * i;
    i = i + 1;
  }
  return result;
}

// Bir sayının rakamlarının faktöriyelleri toplamını hesaplayan fonksiyon
function sumOfDigitFactorials(n) {
  let temp = n;
  let sum = 0;

  while (temp > 0) {
    let digit = temp % 10;      // son rakam
    sum = sum + factorial(digit);
    temp = (temp - digit) / 10; // integer division
  }

  return sum;
}
  */

//?SORU8 : Sayı Parçalama ve Yeniden Oluşturma” Algoritması
/*
Algoritma nasıl çalışmalı?

Sayının en küçük rakamını bul.

Onu ilk sıraya koy.

Kalan sayıdan o rakamı çıkar ve aynı işlemi tekrar et.

Tüm rakamlar bitince yeni sıkıştırılmış sayıyı oluştur.

Fonksiyon bu yeni sayıyı döndürsün.
*/
/*
Adım adım:
- Rakamlar: 4,2,1,7
- En küçük = 1
- Kalan = 427
- En küçük = 2
- Kalan = 47
- En küçük = 4
- Kalan = 7
- En küçük = 7
→ Sonuç = 1247
*/


//? SORU9. Bir fonksiyon yaz: Verilen iki sayıyı toplayıp sonucu bir önceki sonuçla toplayarak döndürsün.
// 
/*
function sumChain() {
  let previous = 0; // önceki sonuç burada saklanıyor

  return function(a, b) {
    const current = a + b;       // şu anki iki sayının toplamı
    const result = previous + current; // önceki + şimdiki
    previous = result;           // sonraki sefer kullanmak için güncelle
    return result;
  }
}

// fonksiyonu kullanıma hazır hale getirelim
const sum = sumChain();

console.log(sum(3, 5)); // 8
console.log(sum(2, 4)); // 14
console.log(sum(1, 1)); // 16

*/
//? 10 Kendi iç sayacını tutan ve her çağrıldığında 1 artırıp döndüren bir fonksiyon yaz:
/*
function createCounter() {
  let count = 0; // dış fonksiyonda saklanan değişken

  return function() {
    count++;     // her çağrıda artır
    return count;
  }
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
*/