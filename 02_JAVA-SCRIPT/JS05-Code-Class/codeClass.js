//! Girilen yılın yüzyılını veren program 1788 > 18.yüzyıl

/*let year = +prompt("Yılı girin");

// let result = Math.trunc(year/100)+1 //noktadan keser
// let result = Math.floor(year/100)+1 // noktadan sonraki değer kaç olursa olsun zemine yuvarlar
let result = Math.ceil(year/100) // noktadan sonraki değer kaç olursa olsun yukarı yuvarlar (0 hariç)


console.log(result)
*/

//! 1 den  10 a kadar sayıları yazdıralım

/* for (let i = 1; i <= 10; i++){
    console.log(i)
} */

//! 10 dan 1 e kadar sayıları yazdıralım
/* let i = +prompt("sayı girin")
for ( ; i >= 1; ){
    console.log(i)
    i--
} */

//! 1-20 arası tek sayılar

/* for(let i = 1; i <=20; i++){
    
    if(i % 2 !== 0){

        console.log(i)
    }else{
        console.log(i + " çift sayıdır")
    }
} */

//! 1 den 15 a kadar sayıları yazdır ama 5 i atla

/* for (let i = 1; i <= 15; i++){
    
    if (i == 5) {
        continue //mevcut loop aşamasını atlar bir sonrakine geçer
    }

     if (i == 10) {
        break // mevcut looptan çıkılmasını sağlar
    }
    console.log(i)
}

console.log("Döngüden çıkıldı") */

//! 1 den 50 ye kadar sayıları yazdır. 3 bölünenlere fizz 5 e bölünenlere buzz
//! hem 3 hem de 5 e bölünenlere fizzbuzz yaz

/* for (let i = 1; i <= 50; i++){
    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzBuzz")
    }else if (i % 3 == 0 ) {
        console.log("fizz")
    } else if (i % 5 == 0) {
        console.log("buzz")
    }else {
        console.log(i)
    }
   
} */


//! 1 den 30 a kadar rastgele sayı üret. 15 gelirse döngüden çık

/* let num = 1

 while (num) {

    let num =  Math.trunc(Math.random()*30)+1
       
    if(num == 15){
        let sonuc = num
        console.log(sonuc + " Geldi")
        break
    }else{
        console.log(num)
    }
    
} 
console.log("döngüden çıkıldı", num)
 */

//! do while ile 1 den 30a kadar sayi üret. 15 gelirsa döngüden cik
/*let num=0;

do {

    let num = Math.trunc(Math.random()*30)+1 
     if( num==15){
        console.log(num + " Geldi");
        break 
     }else{
        console.log(num);        
     }
    
} while (num);// sart false döngüden cikar

console.log("döngüden cikildi",num) */













//! JS hoisting

/* console.log(a)
var a = 1;

console.log(aa)
let aa;

aa = 2
console.log("dışarıda",aa)
const aaa = 1

/* console.log(aa)
console.log(aaa)
console.log("devam")
 */
// var a = 2


// let aa = 5

/* { //ayrı bir scope açıp kullanabiliriz
    console.log("scope içi", aa)
    
}

console.log("dışarıda",aa)  */


// let sayi = +prompt("sayi gir");
// let sayac=0;

// for(let i=1; i<sayi;i++){
//     if(sayi%i ==0 ){
//         sayac++;  
//         console.log(i);      
//     }
// }
// console.log(sayac);


// let sayi = +prompt("sayi gir");
// let color = '';


// for(let i = 1; i<sayi;i++){
//     if(i % 2 ==0 ){ 
//         color = "color:yellow; font-size:16px;" 
//         console.log("%c" + i, " " +"cift sayi", color);      
//     }else {
//         color = "color:red; font-size:20px;" 
//         console.log(i, "tek sayi");  
//     }
// }





