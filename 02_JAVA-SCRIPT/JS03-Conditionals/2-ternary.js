//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik 
// //* örnek1
//  let yas = 16;

//  let healt = "saglikli";

//  let cinsiyet = "erkek";

// // if(yas>18 && healt=="saglikli" && cinsiyet== "erkek"){
// //     console.log("askerlik yapabilir");
// // }else{ console.log("askerlik yapamaz");
// // }

// yas>18 ? console.log("askerlik yapabilir") : console.log("askerlik yapamaz");

// let cevap=(yas>18 && healt=="saglikli" && cinsiyet== "erkek") ? "askerlik yapabilir" : "askerlik yapamaz";
// console.log(cevap);

// //* örnek2
// verecegim 2 sayinin toplami 60 tan büyükse sayilari carp kücükse sayilari böl

//const sayi1 = 24;
// const sayi2 = 37;
// let sonuc = sayi1+sayi2;

// console.log(sonuc>60 ? sayi1*sayi2 : sayi1/sayi2);
 
//* örnek3

const vize = 40;
const final =70;

let sonuc = vize*0.4+final*0.6;

// sonuc>55 ? console.log("gectin") : console.log("kaldin");

console.log(sonuc>55 ? "gectiniz" : "kaldiniz");

// 85 den yüksek ise pek iyi 

console.log(sonuc>85 ? "cok iyi" : sonuc>55 ? "iyi" : "basarisiz" );


const maas = 2000;
const borc= 10000;
console.log(maas*10>5000 ? "kredi al" :"alma");







