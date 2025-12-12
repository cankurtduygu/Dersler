// /* -------------------------------------- *
// *             1. Array Methods 
// /* -------------------------------------- */

// /* 
//     Mutator (degistirir):
//     - pop()         : Son elamani siler
//     - push()        : Sona eleman ekler
//     - shift()       : Ilk elemani siler
//     - unshift()     : Basa eleman ekler
//     - reverse()     : Terse cevirir
//     - splice()      : Belirli araliga sil/ekle
//     - Sort()        : Sirala (sayilarda farkli calisir)

//     Non-mutator (degistirmex):
//     - include()     : Iceriyor mu ?
//     - indexOf()     : Hangi indexte ?
//     - join()        : Diziyi stringe cevir
//     - slice()       : Parca alir
//     - concat()      : Birlestirir

//     Functional islemler (callback ile):
//     - map()         : Donusturur
//     - forEach()     : her birine islem yap 
//     - filter()      : Sec
//     - reduce()      : Toplama / hesapla
//     - every()       : Hepsi sarti sagliyor mu ?
//     - some()        : En ax bir sarti sagliyor mu ?
//     - find()        : Ilk uygun degeri bul
// */

// /* -------------------------------------- *
// *             2. Sorular 
// /* -------------------------------------- */

// /*
//   ! 1. Bir sınıftaki öğrencilerin sınav notlarının ortalamasını bul.
  
//   Çözüm Yolları:
//   1. for döngüsü
//   2. reduce() metodu
//   3. sum + length kullanımı
// *
// const notlar = [34, 56, 56, 87, 90];

// // for dongusu
// let toplamFor = 0;
// for (let i = 0; i < notlar.length; i++) {
//   toplamFor += notlar[i];
// }
// ortalamaFor = toplamFor / notlar.length;
// console.log(ortalamaFor);

// // reduce()
// ortalama = notlar.reduce((toplam, not) => toplam + not, 0) / notlar.length;
// console.log(ortalama);

// /*
//   ! 2. Bir metinde kaç tane kelime vardır? (Birden fazla boşluğa dikkat!)
// *

// let cumle = "Merhaba     Cohort      DE-11TR";
// const kelimeSayisi = cumle.split(/\s+/).length;
// console.log(cumle.split(/\s+/));
// console.log(kelimeSayisi);

// /*
//   ! 3. Bir cümlede "Ondia" kelimesini bul ve konumunu söyle.
//   Yoksa mesaj yazdır.
  
//   Örnek:
//   - "I like Ondia" → "I found Ondia at 3!"
//   - "I like bootcamps" → "I can't find Ondia :("
// *

// function findOndia(cumle, arananKelime) {
//   const kelimeler = cumle.toLowerCase().split(" ");
//   //   const arananKelime = "ondia";
//   if (kelimeler.includes(arananKelime)) {
//     const konum = kelimeler.indexOf(arananKelime) + 1;
//     return `I found Ondia at ${konum}`;
//   } else {
//     return `I can not fund ${arananKelime}!`;
//   }
// }

// console.log(findOndia("I like Ondia", "ondia"));
// console.log(findOndia("Life is good", "ondia"));

// /*
//   ! 4. Bir dizideki tekrarlayan elemanları kaldır, yalnızca benzersiz değerleri tut.
  
//   Örnekler:
//   - [1, 0, 1, 0, 1] → [1, 0]
//   - ["the", "small", "cat", "the", "cat"] → ["the", "small", "cat"]
// *

// // for...of
// function removeDuplicate1(arr) {
//   const uniqueArr = [];

//   for (const item of arr) {
//     if (!uniqueArr.includes(item)) {
//       // console.log('icermiyor', item);
//       uniqueArr.push(item);
//     }
//   }
//   return uniqueArr;
// }
// console.log(removeDuplicate1([1, 0, 1, 0, 2]));

// // filter
// function removeDuplicate2(arr) {
//   //   return arr.indexOf(0);
//   return arr.filter((value, index) => arr.indexOf(value) === index);
// }
// console.log(removeDuplicate2([1, 0, 1, 0, 2]));

// // array, object , set, string, number
// // set (modern ve daha hizli)
// function removeDuplicate3(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicate3([1, 0, 1, 0, 2]));

// /*
//   ! 5. Bir dizi içinden belirli harfle başlayan öğeleri seç.
  
//   Örnek: "A" ile başlayanlar: ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];
// *

// const fruits = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];

// // for..of
// function filterByLetter(arr, letter) {
//   const filteredFruits = [];
//   for (const item of arr) {
//     if (item.toUpperCase().startsWith(letter.toUpperCase())) {
//       filteredFruits.push(item);
//     }
//   }
//   return filteredFruits;
// }

// console.log(filterByLetter(fruits, "a"));

// // filter

// function filterByLetter1(arr, letter) {
//   return arr.filter((item) => item[0].toLowerCase() === letter.toLowerCase());
// }

// console.log(filterByLetter1(fruits, "a"));

// /*
//   ! 6.
//   a) Maaşlara %10 zam yapılıyor. Kaç kişi zam sonrası 20000 TL altında kalıyor?
//   b) 20000 altında kalanları 20000'e tamamlamak için ne kadar bütçe gerekli?
  
//   Örnek maaşlar: [18000, 13000, 17000, 24000, 18500, 21000, 19300]
// *

// const maaslar = [18000, 13000, 17000, 24000, 18500, 21000, 19300];

// // a)
// const zamli_maaslar = maaslar.map((m) => m * 1.1);
// const garibanlar = zamli_maaslar.filter((m) => m < 20000);
// const garibanSayilari = garibanlar.length;
// // const garibanSayilari = maaslar.map((m) => m * 1.1).filter((m) => m < 20000).length
// console.log(garibanSayilari);

// // b)
// // console.log(garibanlar);
// const toplamButce = garibanlar
//   .map((m) => 20000 - m)
//   .reduce((toplam, m) => toplam + m, 0);
// console.log(
//   toplamButce.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })
// );

// /*
//   ! 7. Bir dizi içindeki asal sayıları filtrele.
//   Asal sayı: 1'den büyük, sadece 1 ve kendisine bölünen sayı
  
//   Örnek: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] → [2, 3, 5, 7]
// */

// // Todo

// /*
//   ! 8. Bir kişinin bilgilerini objede saklayıp işlemler yapalım.
  
//   islemler:
//   - Obje bilgilerini yazdırma
//     Örnek: İsim, yaş, şehir, hobiler (dizi) içeren obje
//   - Hobileri listelemek
//   - Yeni hobi ekleme
//   - Yaşı 1 arttırma (doğum günü)
//   - Yeni özellik ekleme

// */

// const kisi = {
//   isim: "Ahmet",
//   yas: 28,
//   sehir: "İstanbul",
//   hobiler: ["kitap okuma", "yüzme", "bisiklet"],
//   meslek: "Yazılımcı",
// };

// //* Obje bilgilerini yazdırma
// // console.log(kisi.isim);
// // console.log(kisi["isim"]);
// for (const key in kisi) {
//   console.log(`${key}: ${kisi[key]}`);
// }

// // * Hobileri listelemek
// kisi.hobiler.forEach((hobi, index) => {
//   console.log(`  ${index + 1}. ${hobi}`);
// });

// //* Yeni hobi ekleme
// kisi.hobiler.push("resim çizme");
// console.log("Yeni hobiler:", kisi.hobiler);

// //* Yaşı 1 arttırma (doğum günü)
// kisi.yas++;
// console.log("Yeni yaş:", kisi.yas);

// //* Yeni özellik ekleme
// kisi.email = "ahmet@example.com";
// console.log("Email eklenmiş hali:", kisi);

// /*
//   ! 9. Birden fazla öğrencinin bilgilerini obje dizisinde saklayalım.
//   Her öğrenci: isim, not, şehir
  
//   İşlemler:
//   - Tüm öğrencileri listele
//   - Not ortalamasını bul
//   - Geçenleri/kalanları ayır
//   - Belirli şehirdeki öğrencileri bul
// */

// const ogrenciler = [
//   { isim: "Lee", not: 85, sehir: "İstanbul" },
//   { isim: "Ayşe", not: 92, sehir: "Ankara" },
//   { isim: "Mehmet", not: 45, sehir: "İzmir" },
//   { isim: "Fatma", not: 78, sehir: "İstanbul" },
//   { isim: "Zeynep", not: 34, sehir: "Bursa" },
// ];

// //* Tüm öğrencileri listele
// ogrenciler.forEach((item)=> console.log(item.isim)
// )

// //* Not ortalaması

// const sonuc = ogrenciler.map(item=> item.not).reduce((acc,not)=>acc+not,0)/ogrenciler.length;
// console.log(sonuc);

// //* Geçen öğrenciler (50+)
// ogrenciler.filter((item)=> item.not>50).forEach((item)=> console.log(item.isim));


// //* Kalan öğrenciler
// ogrenciler.filter((item)=> item.not<50).forEach((item)=> console.log(item.isim));

// //* İstanbul'daki öğrenciler

// //* En yüksek notu alan



// /*
//   ! 10. E-ticaret sepet sistemi
//   Her ürün: ad, fiyat, adet
  
//   İşlemler:
//   - Toplam sepet tutarı
//   - En pahalı ürün
//   - Toplam ürün adedi
// */

// const sepet = [
//   { urun: "Laptop", fiyat: 15000, adet: 1 },
//   { urun: "Mouse", fiyat: 250, adet: 2 },
//   { urun: "Klavye", fiyat: 800, adet: 1 },
//   { urun: "Monitör", fiyat: 3500, adet: 2 },
// ];

// //* Toplam sepet tutarı

// //* En pahalı ürün

// //* Toplam ürün adedi

// //* KDV eklenmiş fiyatlar (%20)

// /*
//   ! 11. Şirket çalışanları ve maaşları
//   Her çalışan: isim, departman, maaş, yıl (çalışma süresi)
  
//   İşlemler:
//   - Departmana göre gruplama
//   - Maaş istatistikleri
//   - Kıdem zammı hesaplama
// */

// const calisanlar = [
//   { isim: "Ahmet", departman: "IT", maas: 15000, yil: 5 },
//   { isim: "Ayşe", departman: "HR", maas: 12000, yil: 3 },
//   { isim: "Mehmet", departman: "IT", maas: 18000, yil: 7 },
//   { isim: "Fatma", departman: "Sales", maas: 13000, yil: 2 },
//   { isim: "Ali", departman: "IT", maas: 16000, yil: 4 },
//   { isim: "Zeynep", departman: "HR", maas: 14000, yil: 6 },
// ];

// //* IT departmanındaki çalışanlar

// //* IT departmanı ortalama maaş

// //* 5 yıldan fazla çalışanlar (kıdemli)

// //* Kıdem zammı: her yıl için %2

// //* En yüksek maaşlı çalışan

// //* Toplam maaş bütçesi

// /*
//   ! 12. Restoran menüsü ve sipariş sistemi
//   Her yemek: ad, kategori, fiyat, malzemeler (dizi)
// */

// const menu = [
//   {
//     ad: "Margherita Pizza",
//     kategori: "Ana Yemek",
//     fiyat: 120,
//     malzemeler: ["hamur", "domates", "mozzarella", "fesleğen"],
//   },
//   {
//     ad: "Tavuk Şiş",
//     kategori: "Ana Yemek",
//     fiyat: 95,
//     malzemeler: ["tavuk", "soğan", "biber", "baharatlar"],
//   },
//   {
//     ad: "Sezar Salata",
//     kategori: "Salata",
//     fiyat: 65,
//     malzemeler: ["marul", "kruton", "parmesan", "sos"],
//   },
//   {
//     ad: "Tiramisu",
//     kategori: "Tatlı",
//     fiyat: 55,
//     malzemeler: ["mascarpone", "kahve", "biskuit"],
//   },
//   {
//     ad: "İçecek",
//     kategori: "İçecek",
//     fiyat: 15,
//     malzemeler: ["kola", "fanta", "sprite"],
//   },
// ];

// //* Kategoriye göre listele

// //* En ucuz ve en pahalı yemek

// //* Belirli malzeme içeren yemekler

// //* Ortalama yemek fiyatı

// //* Örnek sipariş (herbir siparise ozel tutar ve toplam tutar)
// const siparis = [
//   { yemek: menu[0], adet: 2 },
//   { yemek: menu[2], adet: 1 },
//   { yemek: menu[3], adet: 2 },
// ];

// /*
//   ! 13. Öğrenciler ve her birinin ders notları
//   Her öğrenci: isim, notlar (obje: matematik, fizik, kimya)
// */

// const sinif = [
//   { isim: "Ali", notlar: { matematik: 85, fizik: 78, kimya: 92 } },
//   { isim: "Ayşe", notlar: { matematik: 95, fizik: 88, kimya: 90 } },
//   { isim: "Mehmet", notlar: { matematik: 65, fizik: 72, kimya: 68 } },
//   { isim: "Fatma", notlar: { matematik: 78, fizik: 85, kimya: 82 } },
// ];

// //* Her öğrencinin ortalaması

// //* Matematik notlarının ortalaması

// //* En yüksek fizik notu

// //* Tüm derslerde 80+ alan öğrenciler

let pcDizi = [21, 25, 30];

pcDizi.forEach((e) => {
  console.log(e+1);
  
})

console.log(pcDizi);

let dizi2 = [{age:20}, {age:25}]

dizi2.forEach((item)=>{
  
  item.age=item.age+1

})

console.log(dizi2);

const urunler = [
  { id: 1, fiyat: 10 },
  { id: 2, fiyat: 20 },
];
urunler.forEach((urun) => {
  urun.fiyat = urun.fiyat * 2;
});
console.log(urunler); //*  cıktı degişti

//?Adım 1: forEach başlar. Dizinin ilk elemanı olan 10'u görür.
//?
//?Adım 2 (Kopyalama): İşlemci bu 10 sayısının bir FOTOKOPİSİNİ çeker.
//?
//?Adım 3 (Fonksiyon): Senin (fiyat) parametrene bu fotokopiyi verir.
//?
//?Adım 4 (İşlem): Sen fiyat = fiyat + 4 dediğinde, elindeki o //?fotokopi kağıdındaki sayıyı silip 14 yazarsın.
//?
//?Sonuç: Döngü biter, fotokopi çöpe gider. Orijinal dizideki 10 //?olduğu gibi kalır.
//?
//?2. Senaryo: Objeler [{id:1...}, {id:2...}] - "Oda Anahtarı Mantığı"
//?Dizinin içindekiler Obje (Object). Bunlar Stack'e sığmaz, Heap'te //?(Depoda) dururlar. Dizi sadece onların Oda Anahtarlarını //?(Adreslerini) tutar.
//?
//?Adım 1: forEach başlar. Dizinin ilk elemanına bakar. Orada veri //?değil, bir Adres görür (Örn: #Oda101).
//?
//?Adım 2 (Kopyalama): İşlemci bu #Oda101 anahtarının bir KOPYASINI //?yapar (Yedek Anahtar).
//?
//?Adım 3 (Fonksiyon): Senin (urun) parametrene bu yedek anahtarı //?verir.
//?
//?Adım 4 (İşlem): Sen urun.fiyat = ... dediğinde;
//?
//?İşlemci elindeki yedek anahtarla depoya gider.
//?
//?#Oda101 kapısını açar.
//?
//?İçerideki "Fiyat" etiketli vazoyu kırıp yerine yenisini koyar.
//?
//?Sonuç: Orijinal dizi de #Oda101'e baktığı için, o da odaya //?girdiğinde değişikliği görür.
//?
//?Özet:
//?
//?fiyat = ... -> Değişkenin kendisini (fotokopiyi) değiştirdin.
//?
//?urun.fiyat = ... -> Adrese gidip içeriği değiştirdin.








