// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):


//! * --------Function-Declaration----------------------------*/ 
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.
console.log("************ 1- FUNC DECLARATION *************");

//*Örnek1:****************************************************************/

//? fonksiyonun tanimlanmasi

function yazdir(){
    console.log("merhaba nasilsiniz");  
}

yazdir();

//*Örnek2:****************************************************************/

function adYazdir(name1,name2,name3){
    console.log(name1,name2,name3);
    
}

adYazdir("duygu","elif","ayla");

//*Örnek3:****************************************************************/

// function yas (ad,dogumyili) {
//    return new Date().getFullYear()-dogumyili
   
// }

// console.log(yas("ipek",1993));

//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.

// console.log(tekCiftSayi(5));


// function tekCiftSayi(a) {
//     return a%2==0 ? "ciftir" : "tektir"
// }

//* Fonksiyona gönderilen fazla adetteki sayinin toplamini hesaplayan func. yaziniz
// function sumAll () {

//     let toplam=0;
//     console.log(arguments);

//     for(let i=0;i<arguments.length;i++)
//     {
//         toplam+=arguments[i];
//     }
//     return toplam;
// }

// console.log(sumAll(34,67,89,23,12,67,123,45));
// console.log(sumAll(34,67,89,23,12,67,123,45,56));

//*fonsyione gönderilen sayilarin tek mi cift mi oldugunu bulma

// console.log(tekCift(34,67,89,23,12,67,123,45));

// function tekCift() {

//     for(let i=0;i<arguments.length;i++)
//     {
//         if(arguments[i]%2==0){
//             console.log(arguments[i]+"ciftir");
            
//         }else{
//             console.log(arguments[i]+"tektir");
//         }
//     }  
// }

// //* yildiz yazdirma

// function yildiz (a,b) {
//     let star="";
//     for(let i=1;i<=a; i++){
        
//         for(let j=1; j<=b; j++){
//             star=star+"*"; 
//         }
//         star=star+"\n"
//     }  
//     return star;
// }

// console.log(yildiz(5,3));






    
 

