// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

//?örnek1- ekrana 7 kere merhaba yazdirin
// for(let i=1;i<=7;i++){
//     console.log(i,"Merhaba");
// }

// //?örnek2- 1den N e kadar olan sayilarin toplami;

// const N =prompt("Lütfen bir sayi giriniz");
// let toplam =0;

// for(i=0;i<=N;i++){
//     toplam+=i;
// }

// console.log(toplam);

//? ÖRNEK3: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// const sayi = prompt("Lütfen  bir sayi giriniz");
// let asal=true;

// for(i=2;i<sayi;i++){
//     if(sayi%i===0){
//         asal=false;  
//         break; 
//     }
// }

// console.log(asal==true ?"asaldir": "asal degildir");


// //? Ornek4: 0-100 Arasinda 7 adet rasgele tamsayi sayi ureten kodu
// //? for dongusu ile yaziniz..
// for(i=1;i<=7;i++){
// const randomSayiPc = Math.ceil(Math.random() * 100);
// console.log(randomSayiPc);
// }


//****************************WHILE DÖNGÜSÜ******************** */

// 1 den 10a kadar olan sayilari yazdirin
// let i=0;

// while(i<=10){
//     console.log(i);
//     i++;
// }

// console.log("döngü bitti");

//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz
// let number = +prompt("lütfen 1 ile 100 arasinda bir sayi girin");
// while(number<1 || number>100){

//     console.error("sayi 1 ile 100 arasinda olmali");
//     number= +prompt("tekrar sayi girmeyi deneyin");
// }

// console.log("tebrikler", number);

//! while daki şart true old sürece altındaki süslü işler, false old anda süslünün dışına çıkılır
//*ayni soruyu do-while ile yap

// let number=0;

// do {
//     number = +prompt("lütfen 1 ile 100 arasinda bir sayi girin");
//     console.log(number);
    
// } while (number<1 || number>100);
//   console.log("do-while bitti");

//! şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir


//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.



// let devamMi;


// do {
//     let vize = +prompt("vize gir");
//     let final= +prompt("final gir");


//     console.log( "gecme notum:", vize*0.4+final*0.6);

//     devamMi = prompt("devam etmek isterseniz e/E basiniz");
    
// } while (devamMi==="e" || devamMi==="E")
//     console.log("hesaplama bitti");
    
//? ORNEK2: klavyeden q karakteri girilene kadar sayı girişi yapan bir programı döngü kullanarak yazınız.

let sayi;
do {
    sayi = prompt("lütfen bir sayi gir");
    
} while (sayi.toUpperCase() !="Q");

console.log("program bitti");


