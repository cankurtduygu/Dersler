
// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const cola=50
const cips=55
const dondurma=100
console.log(cola+cips+dondurma);

let toplam=cips +cola +dondurma

console.log(toplam);
toplam=toplam+1

console.log(toplam);

toplam++
console.log(toplam);

//! 10 arttir

toplam=toplam + 10;

console.log(toplam);

toplam+=10
console.log(toplam);


//? + operatörü string concatination islemi yapar

const sayi1="12"
const sayi2=25

console.log(sayi1+sayi2);
console.log(sayi1-sayi2);
console.log(Number(sayi1)+sayi2);

const isim ="ashley"

const soyisim ="miller"

console.log("Benim adim soyadim:"+ " " + isim + " " +soyisim);

//!BACKTICK (template literals) ``

console.log(`benim adim soyadim ${isim} ${soyisim}`)

//?bazı fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

//toFixed(x) //*virgülden sonra x adet basamak bırak


let number1=1.31212
let number2=1.8

console.log(Math.floor(number1));
console.log(Math.floor(number2));

console.log(Math.ceil(number1));
console.log(Math.ceil(number2));

console.log(Math.trunc(number1));
console.log(Math.trunc(number2));

console.log(Math.round(number1));
console.log(Math.round(number2));

console.log(number1.toFixed(2));











// RANDOM: rastgele
// rastgele sayı üretmek için kullanılır
// 0-1 arasında bir sayı üretir
console.log(Math.random());
console.log(Math.ceil(Math.random()*20));


//* Arttirma azaltma

console.clear()
let a=5

    console.log("ilk", a++);
    console.log("alt satirda", a);

    let b=a++
    console.log(b);
    console.log(b=b+1);
    console.log(b++);
    console.log(b);
    console.log(b=b+1);

//! sayi yi 5 ile carpma


//? carpma us alma

const PI = 3.14
const yaricap=5
alan = PI*(yaricap**2)
console.log(alan);
console.log(PI* Math.pow(yaricap,2));
console.log(144**(1/2));
console.log(Math.sqrt(144));


// * =======================================================
// *            KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

/* 
   == (Eşit mi?) → Değer kontrolü (tip dönüşümü yapar)
   === (Kesinkes eşit mi?) → Hem değer hem tip kontrolü
   
   Profesyonel kodlamada === kullanmak daha güvenlidir!
*/

// = -> assign (atama)
// == -> comparision (karsilastirma)
// === -> comparision with type (tipleriyle karsilastirma)

const kullaniciYasi = 18;
const girilenYas = '18'

// alt + shift + arrows (copy line)
console.log(kullaniciYasi == girilenYas); // sadece degere bakar (==)

// alt + arrows (carry line)
console.log(kullaniciYasi === girilenYas); // degerine ve tipine bakar (===)

//* Dogru kullanim
console.log(kullaniciYasi === Number(girilenYas)); // true


// ---

const minYas = 18;
const userYas = 16;

console.log(`18 yasindan buyuk mu veya esit mi ? ${userYas >= minYas }`);
console.log(`18 yasindan kucuk mu ? ${userYas < minYas }`);

// Esit degil kontrolu
const urunStok = 20;
console.log(`Urun stokta var mi ? ${urunStok !== 0}`);

    
    
    





