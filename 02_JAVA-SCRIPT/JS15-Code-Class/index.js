/* -------------------------------------- *
*             1. Array Methods 
/* -------------------------------------- */

/* 
    Mutator (degistirir):
    - pop()         : Son elamani siler
    - push()        : Sona eleman ekler
    - shift()       : Ilk elemani siler
    - unshift()     : Basa eleman ekler
    - reverse()     : Terse cevirir
    - splice()      : Belirli araliga sil/ekle
    - Sort()        : Sirala (sayilarda farkli calisir)

    Non-mutator (degistirmex):
    - include()     : Iceriyor mu ?
    - indexOf()     : Hangi indexte ?
    - join()        : Diziyi stringe cevir
    - slice()       : Parca alir
    - concat()      : Birlestirir

    Functional islemler (callback ile):
    - map()         : Donusturur
    - forEach()     : her birine islem yap 
    - filter()      : Sec
    - reduce()      : Toplama / hesapla
    - every()       : Hepsi sarti sagliyor mu ?
    - some()        : En ax bir sarti sagliyor mu ?
    - find()        : Ilk uygun degeri bul
*/

/* -------------------------------------- *
*             2. Sorular 
/* -------------------------------------- */

/*
  ! 1) Senaryo: Bir sınıftaki öğrencilerin sınav notlarının ortalamasını bul.
  
  Çözüm Yolları:
  1. for döngüsü
  2. reduce() metodu
  3. sum + length kullanımı
*/
/*
//*cözüm2 reduce()
const notlar = [34, 56, 56, 87, 90];

const ort = notlar.reduce((toplam, not) => toplam + not, 0) / notlar.length;
console.log("Ortalama:", ort);

//* sum + length kullanımı
const sum = notlar.reduce((acc, n) => acc + n, 0);
const ortalama = sum / notlar.length;
console.log("Ortalama (sum + length):", ortalama);
*/
//! 2) Senaryo: kac kelimeden olustugunu bulalim
/*
let cümle = "Merhaba    Cohort     DE-11TR"

// Fazla boşlukları dikkate alarak kelime sayısını bulma
let kelimeSayisi = cümle.trim().split(/\s+/).length;
console.log("Kelime sayısı:", kelimeSayisi);
*/
//! 3) Senaryo: Bir cümlede "ondia" kelimesini bul ve konumunu söyle
/*
const yazi = "I found Ondia at 3!"

const bul = (yazi) => {
    const kelime = "Ondia";

    const index = yazi.toLowerCase().indexOf(kelime.toLowerCase());
    if (index !== -1) {
        console.log(`I found ${kelime} at ${index}`);
    } else {
        console.log(`I cant find ${kelime}`);
    }
}

bul(yazi);
*/
/*
const cümle ="ben JavaScript ögreniyoprum"
const bul = (yazi) =>{

    const kelime ="JavaScript";

    console.log(yazi.toLowerCase().search(kelime.toLowerCase()));
}

bul(cümle);*/

//! 4) Senaryo: Bir dizideki tekrarlayan elemanlari kaldir, yalnizca benzersiz degerleri bul.
/*
const dizi= [3,5,3,7,5];


// Yöntem 1: Set ile
const benzersiz1 = [...new Set(dizi)];
console.log("Benzersiz (Set):", benzersiz1);

// Yöntem 2: filter ve indexOf ile
function removeDublicate2(arr){
    return arr.filter((deger,index) => arr.indexOf(deger) === index)
}

*/

//! 5) 5. Bir dizi içinden belirli harfle başlayan öğeleri seç.
/*
const dizi = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];

function removeDublicate2(arr,harf){
    return arr.filter((deger) => deger[0].toLowerCase() === harf.toLowerCase())
}

console.log(removeDublicate2(dizi,"A"));
*/
//! 6)
/*
  a) Maaşlara %10 zam yapılıyor. Kaç kişi zam sonrası 20000 TL altında kalıyor?
  b) 20000 altında kalanları 20000'e tamamlamak için ne kadar bütçe gerekli?
  */

 const maaslar = [18000, 13000, 17000, 24000, 18500, 21000, 19300]

// a) Maaşlara %10 zam yapılıyor. Kaç kişi zam sonrası 20000 TL altında kalıyor?
 
const yeni = maaslar.map(m => (m + (m * 0.1)));
const altindaKalanlar = yeni.filter(m => m < 20000);
console.log(altindaKalanlar.length);
console.log(altindaKalanlar);


// b) 20000 altında kalanları 20000'e tamamlamak için ne kadar bütçe gerekli?

const eksik = altindaKalanlar.map(m => 20000 - m).reduce((acc, m) => acc + m, 0);
console.log(eksik);


//! 7)


/*
  ! 8. Bir kişinin bilgilerini objede saklayıp işlemler yapalım.
  - Obje bilgilerini yazdırma
  - Hobileri listelemek
  - Yeni hobi ekleme
  - Yaşı 1 arttırma (doğum günü)
  - Yeni özellik ekleme
  Örnek: İsim, yaş, şehir, hobiler (dizi) içeren obje

*/

const kisi = {
  isim: "Ahmet",
  yas: 28,
  sehir: "İstanbul",
  hobiler: ["kitap okuma", "yüzme", "bisiklet"],
  meslek: "Yazılımcı",
};

// Obje bilgilerini yazdırma
for (let key in kisi) {
  console.log(key + ":", kisi[key]);
}

// Hobileri listelemek

kisi.hobiler.forEach(hobi => {
    console.log(hobi);  
});

// Yeni hobi ekleme
kisi.hobiler.push("kosmak");
console.log(kisi.hobiler);

// Yaşı 1 arttırma (doğum günü)

kisi.yas++;
console.log(kisi.yas);

// Yeni özellik ekleme

kisi.email="dhjdh@gmail.com"
console.log(kisi);





