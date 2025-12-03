//  - Çoğu iteration metodu ORİJİNAL DİZİYİ değiştirmez (map, filter, reduce, find...).
//  - Mutasyon yapan ifade örneği: map içinde array[i] = ... (KAÇIN veya bilinçli yap).
//  - İmmutability tercih sebebi: Tahmin edilebilir, side-effect azaltır.

/* -------------------------------------- *
*           1. forEach Methodu
/* -------------------------------------- */
/* 
  forEach nedir?
  - Dizinin her elemanı için verdiğimiz fonksiyonu çalıştırır
  - GERİ DÖNÜŞ DEĞERI YOK (undefined döner)
  - Orijinal diziyi değiştirmez (biz istemedikçe)
  - Terminal işlemdir: forEach'ten sonra zincirleme yapılamaz
  
  Ne zaman kullanılır?
  - Console'a yazdırma
  - DOM güncellemeleri
  - Yan etkiler (side effects)
  - Toplama, sayma gibi işlemler
*/
/* -------------------------------------- *
*           2. forEach Methodu
/* -------------------------------------- *

// 1. yontem
const payments1 = [100, 300, -200, 500, -400, 225];

function callback(item, index, arr) {
  console.log(item, index, arr);
}

payments1.forEach(callback);

console.log("-----------------------");

// 2. yontem
const payments2 = [100, 300, -200, 500, -400, 225];

payments2.forEach(function (item) {
  if (item > 0) {
    console.log(`You received ${item} USD`);
  } else {
    console.warn(`You paid ${-item} USD`);
  }
});

console.log("-----------------------");

// 3. yontem

const payments3 = [100, 300, -200, 500, -400, 225];

payments3.forEach((item) =>
  item > 0
    ? console.log(`You received ${item} USD`)
    : console.warn(`You paid ${-item} USD`)
);

/* -------------------------------------- *
*        2.1 forEach Ornek Sorular
/* -------------------------------------- *

// sum all the odd numbers with forEach method
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

numbers.forEach((num) => {
  if (num % 2) {
    sum += num;
  }
});
console.log(sum);

// sinavdan gecen toplam ogrenci sayisi ?
const puanlar = [45, 67, 26, 79];
let gecenSayisi = 0;

puanlar.forEach((puan) => {
  //   puan >= 50 ? gecenSayisi++ : null; // null hic bir sey yapma ifadesi
  puan >= 50 && gecenSayisi++;
});

console.log("gecenlerin toplam sayisi:", gecenSayisi);

// her bir elemani buyuk harfe cevirme ? (cok tasvik edilmez foreach ile manupule islemleri)
const renkler = ["kirimizi", "lacivert", "sari"];

// renkler[0] = 'beyaz'

const upperCase = (item) => item.charAt(0).toUpperCase() + item.slice(1);

const forNeDondurdu = renkler.forEach((renk, index, arr) => {
  // console.log(renk, index, arr);
  // arr[index] = renk.toUpperCase()
  // console.log(renk.charAt(0).toUpperCase() + renk.slice(1));
  arr[index] = upperCase(renk);
});

console.log(forNeDondurdu);
console.log(renkler);

/* -------------------------------------- *
*           3. Map Methodu
/* -------------------------------------- *

//   map nedir?
//   - Dizinin her elemanını dönüştürür
//   - YENİ BİR DİZİ DÖNDÜRÜR (aynı uzunlukta)
//   - Orijinal diziyi değiştirmez
//   - Zincirleme yapılabilir (map().filter().reduce())
  
//   Ne zaman kullanılır?
//   - Veri dönüştürme (transform)
//   - Hesaplama yapma
//   - Format değiştirme
//   - Yeni dizi oluşturma

//* sayilari ikiye katlama
const numbers = [1, 2, 3, 4, 5, 6];
// const doubled = [];
// const doubled = numbers.map((num) => {
//   return num * 2;
//   //   doubled.push(num * 2);
// });
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

//* String islemleri
const isimler = ["ayla", "Duygu", "elif", "lee"];
const buyuk = isimler.map((isim) => isim.toUpperCase());
console.log(buyuk);

//* index kullanimi
const harfler = ["a", "b", "c"];
// ['0:a', '1:b', '2:c']

const indeksli = harfler.map((h, i) => {
  console.log(h, i);
  //   return i + ':' + h
  return `${i}: ${h}`;
});
console.log(indeksli);

//* karmasik donusum
const puanlar = [45, 67, 26, 79];
const notlar = puanlar.map((p) => {
  if (p >= 85) return "A";
  if (p >= 70) return "B";
  if (p >= 60) return "C";
  if (p >= 50) return "D";
  return "F";
});
console.log(notlar);

/* -------------------------------------- *
*           4. Map Vs Foreach
/* -------------------------------------- *

//   TEMEL FARKLAR:

//   forEach:
//   ✓ Yan etki için (log, toplama, sayma)
//   ✓ undefined döner
//   ✗ Yeni dizi oluşturmaz
//   ✗ Zincirleme yapılamaz

//   map:
//   ✓ Dönüştürme için
//   ✓ Yeni dizi döner
//   ✓ Zincirleme yapılabilir
//   ✗ Sadece yazdırma için uygun değil

const dizi = [1, 4, 5, 76, 8, 9];
// foreach ile toplama
let toplamForEach = 0;
dizi.forEach((n) => (toplamForEach += n));
console.log("toplap:", toplamForEach);

// map ile donusturme
const karaler = dizi.map((n) => n * n);
console.log(karaler);

// map zincirleme
const kareler2 = dizi.map((n) => n * n).map((n) => n + 10);
console.log(kareler2);

/* -------------------------------------- *
*          5. Filter Vs Chaining
/* -------------------------------------- *

//  filter: Şartı sağlayanları yeni diziye alır.
//  Chain: filter -> map -> forEach pattern çok yaygın.

const puanlar = [46, 78, 67, 80, 90, 37, 28, 50];

const gecenler = puanlar.filter((p) => p >= 60); // filter icine kosul belirtiyoruz, true donenleri bir array olarak dondurur

console.log(gecenler);

// zincirleme yapalim - gecenlere +10 bonus verelim

const gecenelereBonus = puanlar
  .filter((p) => p >= 60)
  .map((p) => p + 10)
  .forEach((p) => console.log("Bonuslu gecenler", p));

/* -------------------------------------- *
*      6. Reduce (accumulator pattern)
/* -------------------------------------- *


// reduce(callback(acc, current, index, array), initialAcc)
// Kullanım Alanları:
// - Toplam alma
// - Ortalama
// - Max/Min bulma
// - Obje oluşturma / gruplama
// - Flatten (alternatif)

const maaslar = [4000, 4300, 4200];

// let toplamMaas1 = 0; // 4000 , 8300, 12500
// maaslar.forEach((n) => (toplamMaas1 += n));
// console.log(toplamMaas1);

//* toplam
const maasToplami = maaslar.reduce((toplam, m) => {
  console.log("toplam:", toplam, "m:", m);
  return toplam + m;
}, 0);
console.log(maasToplami);

//* ortalama
const maasOrtalamasi = maaslar.reduce((toplam, m, _, arr) => {
  return toplam + m / arr.length;
  // return +(toplam + m / arr.length).toFixed(2);
}, 0);
console.log(maasOrtalamasi);

/* -------------------------------------- *
*      7. some & every
/* -------------------------------------- *

//   some : En az 1 eleman şartı sağlıyor mu? (OR)
//   every: Tüm elemanlar şartı sağlıyor mu? (AND)
//   Erken sonlandırma sağlar -> performans.

const yaslar = [19, 25, 45, 36, 90];

console.log(
  yaslar.every((y, i) => {
    console.log(y, i);
    return y >= 18;
  })
); // true

console.log(yaslar.some((y) => y >= 70)); // true

/* -------------------------------------- *
*       8. find & findIndex
/* -------------------------------------- */

//   find      : Şartı sağlayan İLK değeri döndürür (yoksa undefined)
//   findIndex : İLK indeks (yoksa -1)
//   Kullanışlı: İlk hatayı, ilk uygun değeri bulmak.
//   (Nesne kullanmadan örnek)

/* -------------------------------------- *
*       9. flat 
/* -------------------------------------- */

/* -------------------------------------- *
*       10. Tasks 
/* -------------------------------------- */

//* Senaryo: Ürün fiyatlarına KDV ekle, 1000 üzerindekileri ayrı listele (nesnesiz)
const fiyatlar2 = [25000, 350, 4200];

//* Senaryo: Loglardan sadece ERROR kayıtlarını çek, saatlerini al (çiftsiz diziler)
const loglar = [
  ["INFO", "10:01"],
  ["WARN", "10:05"],
  ["ERROR", "10:07"],
  ["ERROR", "10:16"],
];

// Soru 1: Bir dizideki çift sayıların karelerini toplayın.
const numList = [2, 7, 4, 11, 6];

// Soru 3: İçiçe not dizisini düzleştirip ortalama bul.
const notlar = [[70, 80], [90], [60, 75, 85]];

// Soru 4: Kelimelerin toplam karakter sayısı (reduce)
const kelimeler2 = ["kod", "yaz", "üret"];

// Soru 5: Bir dizide tekrarlanan var mı? (some + indexOf)
const tekrarTest = ["a", "b", "c", "d", "b"];
