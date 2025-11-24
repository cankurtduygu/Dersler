// * =======================================================
// *          CONDITIONS (IF-ELSE)
// * =======================================================

/* 
    if(condition){ 
        the condition musbe be true or false
        if condtion is true this scope will work
    } 

    if(condition){
    
    if condition is true this scope will work
    
    } else {
    
    if condition is not ture, this scope will work

    }

*/

// const age = 25;

// if (age > 18 ) {
//     console.log('You can enter.');
// } else {
//     console.log("You can not enter.");
// }

// ---

// 1- degiskeni tanimla
// 2- condition olustur (if)
// 3- sarti belirle if(condition)
// 4- scope olustur if(condition){}
// 5- else condition

// const number = 17;
// const remaning = number % 2;

// if(remaning === 0){
//     console.log(`this is a even number: ${number}`);

// } else {
//     console.log(`this is a odd number: ${number}`);
// }


// //! HESAP MAKINASI

// const sayi1 = Number(prompt("1.sayiyi giriniz"));//number degil + yazarsanda onu sayi olarak algilar önemli buna bak
// const islem = prompt("bir islem giriniz(+,-,*,/");
// const sayi2 = Number(prompt("2.sayiyi giriniz"));
// let sonuc = null;

// if (islem=="+") sonuc = sayi1+sayi2;
// else if(islem=="-") {
//     if(sayi1>sayi2) sonuc = sayi1-sayi2;
//     else if(sayi2>sayi1)  sonuc = sayi2-sayi1;
// }
// else if(islem=="*") sonuc = sayi1*sayi2;
// else if(islem=="/") {
//     if(sayi1>sayi2) sonuc = sayi1/sayi2;
//     else if(sayi2>sayi1)  sonuc = sayi2/sayi1;
// }
// else {
//     console.log("yanlis giriniz");
// }

// console.log(sonuc);

// //*example

// let yas = 16;

// let healt = "saglikli";

// let cinsiyet = "erkek";

// if(yas>18 && healt=="saglikli" && cinsiyet== "erkek"){
//     console.log("askerlik yapabilir");
// }else{ console.log("askerlik yapamaz");
// }

//*example2

//verilen 3 sayidan en büyük olani bul

const n1 = 12;
const n2 = 4;
const n3 = 15;

//? kosullarin logical operatorler yardimiyla birleştirilmesi
if (n1 >= n2 && n1 >= n3) {
  console.log("Biggest:", n1)
} else if (n2 >= n1 && n2 >= n3) {
  console.log("Biggest:", n2)
} else  {
  console.log("Biggest:", n3)
}

//* 2.YONTEM
let biggest = n1

if (n2 >= biggest) {
  biggest = n2
}
if (n3 >= biggest) {
  biggest = n3
}
// 2 duruma da ayrı ayrı bakılmalı ya n1 en küçük ve n3 en büyükse, ilk sorgu n2 yi büyük yapar,
console.log(`${biggest} is biggest`)
