//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar

//* ornek1 :
// const s1 = +prompt("1.sayıyı giriniz");
// const islem2 = prompt("+,-,*,/ işlemlerinden birini giriniz");
// const s2 = Number(prompt("2. sayıyı giriniz"));
// let result=null;

// switch (islem2) {
//     case "+":
//         result=s1+s2;
//         break
//     case "-":
//         result=s1-s2;
//         break
//     case "*": 
//         result=s1*s2;
//         break
//     case "/": s2!=0 ? result = s1/s2 : console.log("payda sifir olamaz");
    
//         // result=s1/s2;
//         break;

//     default:
//         alert("yanlis islem girdiniz");
//         break
// }

// console.log(result);

//*ornek2 :


//  const ay = prompt("ay giriniz");

//  switch (ay) {
//     case "eylül"|| "ekim" ||"kasim" :
//         console.log("sonbahar");
//         break;
//     case "aralik"|| "ocak" ||"subat" :
//         console.log("kis");
//         break;
//     case "mart"|| "nisan" ||"mayis" :
//         console.log("ilkbahar");
//         break;
//     default:
//         console.log("yaz");
//         break;
//  }

// const day = new Date().getDay()

// switch (day) {
//     case 0:
//         console.log("Sunday");
//     break;
//     case 1:
//         console.log("Monday");
//     break;
//     case 2:
//         console.log("Tuesday");
//     break;
//     case 3:
//         console.log("wednesday");
//     break;
//     case 4:
//         console.log("Thursday");
//     break;
//     case 4:
//         console.log("Friday");
//     break;
//     case 4:
//         console.log("Satuday");
//     break;
// }

// const randomSayiPc = Math.ceil(Math.random() * 50);
// const input = prompt("lütfen tahmininizi giriniz");
// console.log(input);

// if (input === null) {
//     console.log("aasasa");
// } else {
//     const tahminSayi = Number(input);
//     if (Number.isNaN(tahminSayi) || tahminSayi < 0 || tahminSayi > 50) {
//         console.log("yanlış giriş yaptınız");
//     } else if (randomSayiPc === tahminSayi) {
//         console.log("tebrikler👏");
//     } else if (randomSayiPc < tahminSayi) {
//         console.log("AZALT 📉");
//     } else {
//         console.log("ARTTIR📈");
//     }
// }



// 6.switch-case yapısı kullanılarak bir sıcaklık değerine göre hangi kıyafeti giymeniz gerektiğini belirleyen bir JavaScript kodu yazınız. Kod, sıcaklık değerine bağlı olarak şunları yapmalıdır:

// Eğer sıcaklık 0°C'den düşükse, "Kalın mont giyin" yazdırmalıdır.
// Eğer sıcaklık 0°C ile 10°C arasında ise, "Ceket giyin" yazdırmalıdır.
// Eğer sıcaklık 10°C ile 20°C arasında ise, "Kazak giyin" yazdırmalıdır.
// Eğer sıcaklık 20°C ve üzerindeyse, "Tişört giyin" yazdırmalıdır.
// Herhangi bir geçersiz sıcaklık değeri için "Geçersiz sıcaklık" yazdırmalıdır.

// let deger =+prompt("sicaklik degerini giriniz");
// console.log(deger);


// switch (true) {
//         case deger>=20:
//         console.log("Tişört giyin");
//         break;
//         case deger<20 && deger>=10:
//         console.log("Kazak giyin");
//         break;
//         case deger<10 && deger>0:
//         console.log("Ceket giyin");
//         break;
//         case deger<0:
//         console.log("kalin mont giyin");
//         break;

//         default:
//             console.log("gecersiz sicaklik");
//         break;
            
// }


//* Girilen not degerinin harf karsiligini gösterme switch case
// let not = Number(prompt("notunuzu giriniz"));

// switch (true) {
//     case not>=0 && not<=25:
//         console.log("notunuz FF");
//         break;
//     case not>=26 && not<=45:
//         console.log("notunuz DD");
//         break;
//     case not>=46 && not<=65:
//         console.log("notunuz CC");
//         break;
//     case not>=66 && not<=75:
//         console.log("notunuz BB");
//         break;
//     case not>=76 && not<=90:
//         console.log("notunuz BA");
//         break;
//     case not>=91 && not<=100:
//         console.log("notunuz AA");
//         break;

//     default:
//         console.log("Notunuzu yanlis girdiniz");
        
//         break;
// }

// const mevsim =prompt("Mevsim ismini giriniz");


//*ÖDEV2
// switch (mevsim) {
//     case "Ocak":
//         console.log("1");
//         break;
//     case "Subat":
//         console.log("2");
//         break;
//     case "Mart":
//         console.log("3");
//         break;
//     case "Nisan":
//         console.log("4");
//         break;
//     case "Mayis":
//         console.log("5");
//         break;
//     case "Haziran":
//         console.log("6");
//         break;
//     case "Temmuz":
//         console.log("7");
//         break;
//     case "Agustos":
//         console.log("8");
//         break;
//     case "Eylül":
//         console.log("9");
//         break;
//     case "Ekim":
//         console.log("10");
//         break;
//     case "Kasim":
//         console.log("11");
//         break;
//     case "Aralik":
//         console.log("12");
//         break;

//     default:
//         console.log("yanlis bir deger girdiniz");
//         break;
// }

// //*ÖDEV3

// "use strict";
//  const sayi1=10;
//  const sayi2=20
//  const sayi3=30;

// // let toplam = sayi1+sayi2+sayi3;
// //  let carpim = sayi1*sayi2*sayi3;

// // console.log(`girilen sayilarin toplami: ${toplam}`);    
// //  console.log(`girilen sayilarin carpimi: ${carpim}`);

//  let big=sayi1;
//  if(sayi2>big) 
//      big=sayi2;
//  if(sayi3>big)
//      big=sayi3;
//  console.log(`${big} en büyük sayidir`)

// let small=sayi1;
//  if(sayi2<small) 
//    small=sayi2;
//  if(sayi3<small)
//     small=sayi3;
//  console.log(`${small} en kücük sayidir`)

//*ÖDEV4

// let sayi = prompt("Sayi giriniz");

// console.log(sayi%2==0 ? "sayi ciftir" :"sayi tektir");


"use strict";

x=5;

if(x>4){
    console.log("false");
}






