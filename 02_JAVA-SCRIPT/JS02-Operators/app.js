// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const cola = 50;
const cips = 55;
const dondurma = 100;
console.log(cola + cips + dondurma);

let toplam = cips + cola + dondurma; //205

console.log(toplam);

//! 1 arttır

toplam = toplam + 1;

console.log(toplam); //206

toplam++;
console.log(toplam); //207

//! 10 arttır

toplam = toplam + 10;

console.log(toplam); //217

toplam += 10;
console.log(toplam); //227

//? + operatörü string concatination işlemi de yapar
// convertion
const sayi1 = "12";

const sayi2 = 25;

console.log(sayi1 + sayi2);
console.log(sayi1 - sayi2);
console.log(Number(sayi1) + sayi2);

const isim = "ashley";

const soyisim = "miller";

console.log("benim adım soyadım" + " " + isim + " " + soyisim);

//!BACKTICK (tamplate literals) ``

console.log(`benim adım soyadım      ${isim} ${soyisim}`);

//?bazı fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

//toFixed(x) //*virgülden sonra x adet basamak bırak

let number1 = 1.31212;
let number2 = 1.8;

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
console.log(Math.random()); //0.6578004468809479

console.log(Math.ceil(Math.random() * 20));

//* ARTTIRMA AZALTMA

console.clear();
let a = 5;

console.log("ilk", a++);
console.log("alt satırda", a); //6

let b = a++;
console.log(b); //6
console.log(a); //7

let c = 10;

console.log(++c); //11

let d = ++c;

console.log(d); //12
console.log(c); //12
d += c; //d=d+c

console.log(d); //24
console.log(c); //12

console.log(c--); //12
console.log(c); //11

console.log(--c); //10
console.log(c); //10

console.clear();
//! sayi yi 5 ile çarp

let sayi = 4;
sayi = sayi * 5;

console.log(sayi); //20

sayi *= 5;
console.log(sayi); //100

//!sayidan 5 çıkar

sayi = sayi - 5;

console.log(sayi);

// console.log(sayi-=5); 90

sayi -= 5;
console.log(sayi); //90

console.log((sayi /= 5)); //18

console.log((sayi %= 5));

//?ÇARPMA VE ÜS ALMA

const PI = 3.14;

const yaricap = 5;

console.log(PI * yaricap ** 2);
// console.log(PI*yaricap);
// console.log(15.700000000000001**2);

//!Math pow (power) bir sayının kuvvetini üssünü almak için kullanılır
console.log(PI * Math.pow(yaricap, 2));

console.log(144 ** (1 / 2));

//! Math sqrt metodu verilen değerin karekökünü alır
console.log(Math.sqrt(144));

//*********** */ MOD ALMA********

const number = 456;

console.log("birler", 456 % 10);

console.log("onlar", Math.trunc((456 % 100) / 10));

console.log("yüzler", Math.trunc(456 / 100));

console.log("*************************************");

//! GENEL KÜLTÜR

console.log(Number("0x11")); //x=hexa 16 lık taban = 17

console.log(Number("0b101")); //b=binary 2 lik taban= 5

console.log(Number("0o11")); //o=octal 8 lik taban = 9

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
const girilenYas = "18";

// alt + shift + arrows (copy line)
console.log(kullaniciYasi == girilenYas); // sadece degere bakar (==)

// alt + arrows (carry line)
console.log(kullaniciYasi === girilenYas); // degerine ve tipine bakar (===)

//* Dogru kullanim
console.log(kullaniciYasi === Number(girilenYas)); // true

// ---

const minYas = 18;
const userYas = 16;

console.log(`18 yasindan buyuk mu veya esit mi ? ${userYas >= minYas}`);
console.log(`18 yasindan kucuk mu ? ${userYas < minYas}`);

//* Esit degil kontrolu
const urunStok = 20;
console.log(`Urun stokta var mi ? ${urunStok !== 0}`);

// * =======================================================
// *         MANTIKSAL OPERATÖRLER (&&, ||, !)
// * =======================================================

/* 
   Boolean değerleri:
   TRUE olan: sayılar (0 hariç), dolu stringler, diziler, objeler
   FALSE olan: 0, null, undefined, "", NaN, false
   
   && (VE) → Tümü true ise true
   || (VEYA) → En az biri true ise true
   ! (DEĞİL) → true ↔ false çevirir
*/

console.log("===True Boolean Degerler===");
console.log(`Boolean(5) ${Boolean(5)}`);
console.log(`Boolean(-5) ${Boolean(-5)}`);
console.log(`Boolean('Merhaba ch11') ${Boolean("Merhaba ch11")}`);
console.log(`Boolean([1,2,3]) ${Boolean([1, 2, 3])}`);

console.log("===False Boolean Degerler===");
console.log(`Boolean(0) ${Boolean(0)}`);
console.log(`Boolean(null) ${Boolean(null)}`);
console.log(`Boolean(undefined) ${Boolean(undefined)}`);
console.log(`Boolean('') ${Boolean('')}`);
console.log(`Boolean(NaN) ${Boolean(NaN)}`); // gecersiz bir sayisal islem
// console.log(0/0);

//* || (VEYA) -> Ilk TRUE degerini doner

console.log(0 || 1);

const varsayilanIsim = "" || "Misafir";
console.log(`Hos geldin, ${varsayilanIsim}`);

const kullaniciPuani = 0 || 85 || 100
console.log(`Puan: ${kullaniciPuani}`);

const email = "" || null || 'user@test.com' || 'default@test.com'
console.log(`Email: ${email}`);

//* && (VE) -> Ilk FALSE degerini dondurur (hepsi true is sonuncuyu doner)

console.log(0 && 1);

const hataliGiris = true && 0 && 'bu calismaz';
console.log(`Hatali giris: ${hataliGiris}`);

const girisBasarili = true && 'Token123' && "Giris yaptiniz";
console.log(`Basarili giris: ${girisBasarili}`);

//* ! (DEGIL) -> Tersine cevirir

console.log(Boolean(!0));

const kullaniciGirisYapti = false;
console.log(`Giris yapilmadi mi ? ${!kullaniciGirisYapti}`);


// * =======================================================
// *               TİP DÖNÜŞÜMLERİ (Type Convertion)
// * =======================================================

/* 
   JavaScript'te tip dönüşümü çok önemlidir çünkü:
   - Kullanıcı input'ları hep STRING gelir
   - API'lerden gelen veriler string olabilir
   - Form verilerini işlerken tip dönüşümü şarttır
*/

// Online alisveris sepeti
let urun1Fiyat = '1500.50';
let urun2Fiyat = '2300.90';

// yanlis kullanim
console.log(`Yanlis toplam: ${urun1Fiyat + urun2Fiyat}`);

//* Number()
// dogru kullanim
const toplamFiyat = Number(urun1Fiyat) + Number(urun2Fiyat)
console.log(`Dogru toplam: ${toplamFiyat}`);

//* parseInt() - tam sayiya ceviri
console.log(parseInt('123.99')); // ondalik kismi atar
console.log(parseInt('123abc')); // rakamlardan sonrasini atar

//* parseFloat() - ondalikli sayiya cevirir
console.log(parseFloat('123.99243')); 
console.log(parseFloat('123abc')); 

//* + operatoru - hizli donusum
const hisliDonusum = +"759"
console.log(hisliDonusum); 
console.log(typeof hisliDonusum); 


//* toString() - sayiyi stringe cevirir

const sayi123= 19;
console.log(sayi123.toString());
console.log(typeof sayi123.toString());

// // Promptan alinan yas bilgisi 
// const kullaniciYasiInput = prompt("Yasiniz: ");//terminalde calismaz prompt browser da consol da bak
// console.log(typeof kullaniciYasiInput);

// *toFixed() -> veriyi cikti olarak string verir
let hassasSayi = 19.2324
let yuvarlanmis = hassasSayi.toFixed(2)
console.log(yuvarlanmis);
console.log(typeof yuvarlanmis);

// * =====================================
// *     NULL , UNDEFINED ; NaN FARKLARI
//* =========================================

// * NULL -> kasitli olarak bos deger.

const kullaniciFotografi = null;
console.log(typeof kullaniciFotografi);


    
    
    





