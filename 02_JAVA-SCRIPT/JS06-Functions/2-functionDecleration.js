// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
// console.log("******** 2- EXPRESSION*******");

// const tekCift=function (sayi) {
//     return sayi%2==0 ? "ciftir" : "tektir"  
// }

// alert(tekCift(15));

//* Örnek2:büyük sayi kontrolü
//**********************************************************/

/*const büyükBul = function (x,y,z) {
let sonuc = "";

    if(x>y && x>z)
        sonuc=x;
    else if(y>x && y>z)
        sonuc=y;
    else 
        sonuc=z;

    return sonuc;
}

console.log(büyükBul(10,2,23));*/

/*const büyükBul = function () {
    let biggest=arguments[0];

    for(let i=1; i < arguments.length; i++){
        if(arguments[i]>biggest){
            biggest = arguments[i];
        }
    }

    return biggest;
   

}

console.log(büyükBul(20,30,40,50,60,70,80,90));*/

/*const usAl = function(a,b){
    return a**b;
}

const alanBul = function(a,b){
    return a*b;
}

const cevreBul = function(a,b){
    return (a + b) * 2;
}

const hesapla = function(secim,x,y){
    
    if(secim=="alan")
     return alanBul(x,y);
    else if(secim=="cevre")
     return  cevreBul(x,y)
    else
     return  usAl(x,y)
}

console.log(hesapla("usAl",3,5));*/

// -------------------------------------------------------------------------- 
//Bir ülkedeki ortalama yaşam ömrü 75 yıl olduğuna göre, 
// doğum yılı girilen kişinin yaşını hesaplattıran
// yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program

// 0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar"
// 10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. "

/* -----------------------------------------------------------*/

/*const age =function(birthday){
   
   yas= new Date().getFullYear()-birthday;

   const ortYas=95;

   const kalanOrtYas=ortYas-yas

   if(kalanOrtYas>=0  && kalanOrtYas<=10)
    return "Sen bu değerleri önemseme hayatın tadını çıkar"
   else if(kalanOrtYas>10  && kalanOrtYas<=20)
    return " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. "
   else
    return "calismaya devam et"
}

console.log(age(1979));

document.querySelector("h1").textContent=age(1950);*/

 


