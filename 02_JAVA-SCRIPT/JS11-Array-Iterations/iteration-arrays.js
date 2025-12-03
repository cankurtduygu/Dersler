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
/* -------------------------------------- */

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

// Ornek sorular

// sum all the odd numbers with forEach method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

numbers.forEach(function(num) {
    if (num % 2 !== 0) { 
        sum += num;
    }
});

console.log(sum); 

// puanlar var kac kisi gecti saymak istiyorum
const puanlar =[45,67,16,79];
let gecenSayisi=0;
puanlar.forEach((puan) => { 
    //puan >=50 ? gecenSayisi++: null

    puan >=50 && gecenSayisi++;
    
});
console.log(gecenSayisi);

// örnek 
//foreach kullanarak her bir degeri büyük harf yapalim

const renkler = ["kırmızı", "lacivert", "sari"];

renkler.forEach((renk, index, arr) => arr[index] = renk.toUpperCase());
console.log(renkler);

/* -------------------------------------- *
*           3. Map Methodu
/* -------------------------------------- */

// sayilari ikiye katlamak istiyorum
const numbers1 = [1, 2, 3, 4, 5, 6];
numbers1.map((number)=> number * 2);
console.log(numbers1); // orijinal dizi değişmedi
const doubledNumbers = numbers1.map((number) => number * 2);
console.log(doubledNumbers); // yeni dizi


/*---------------------------------------*
*          reduce
/*---------------------------------------*/

/* -------------------------------------- *
*      6. Reduce (accumulator pattern)
/* -------------------------------------- */

// reduce(callback(acc, current, index, array), initialAcc)
// Kullanım Alanları:
// - Toplam alma
// - Ortalama
// - Max/Min bulma
// - Obje oluşturma / gruplama
// - Flatten (alternatif)

const maaslar = [4000, 4300, 4200];

// toplam
const maasToplam = maaslar.reduce((acc, m) => {
  console.log("acc:", acc, "m:", m);
  return acc + m
}, 0);
console.log(maasToplam);

//ortalama aldirma
const ortalamaMaas = maaslar.reduce((acc, m, i, arr) => {
    acc += m;       
    if (i === arr.length - 1) {
        return acc / arr.length;
    }

    return acc;
}, 0);

console.log(ortalamaMaas); // 4166.666666666667






//* string islemleri
const isimler = ["ayla", "Duygu", "elif", "ali"];
const buyukIsimler = isimler.map((isim) => isim.toUpperCase());
console.log(buyukIsimler); 

const ilkharfbüyükler =isimler.map((isim) => isim.charAt(0).toUpperCase() + isim.slice(1));
console.log(ilkharfbüyükler); // ["Ayla", "Duygu", "Elif", "Ali"]








//* index kullanimi
const harfler = ["a", "b", "c"];
// ['0:a','1:b','2:c'] bunu yapmak istiyorum
const indeksli = harfler.map((harf, i) => {
    console.log(harf,i);
    // return i + ":" + harf;
    return `${i}:${harf}`;
    
});

console.log(indeksli);

//* karmasik dönüsümler 
// puanlarin harf karsligini yazalim

const puanlar1 =[45,67,16,79];

const harfKarsiligi = puanlar1.map((puan) => {
    if (puan >= 85) return "A";
    else if (puan >= 70) return "B";
    else if (puan >= 50) return "C";
    else return "F";
});

console.log(harfKarsiligi); // ["F", "C", "F", "B"]

//map zincirleme ornegi
const dizi = [1, 2, 3, 4, 5,6,7,8,9];
const kareler2 = dizi.map((n) => n*n).map((n) => n+10);
console.log(kareler2); // [11, 14, 19, 26, 35, 46, 59, 74, 91]








