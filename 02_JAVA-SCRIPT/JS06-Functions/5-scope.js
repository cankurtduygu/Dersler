// // ? ==========================================================
// // ?                   FONKSİYONLAR-SCOPE
// // ? ==========================================================
// console.log("************ 4- SCOPE *************");

// //! global SCOPE
// let birinci = 5;
// let ikinci = 12;
// let ucuncu = 234;


// //  let ikinci=123 globalde iken let verilen değişkeni, başka sayıya eşitlerken önüne let yazmamalıyım

// console.log(birinci, ikinci, ucuncu);

// const scopeDeneme=function(){

//     birinci = 55;

//     // yeni bir ikinci değişkenini oluşturdum ve buna dışardan erişilemez

//     console.log(ikinci);

//     let dorduncu=1234;

//     return dorduncu;
    
// }

// let x=scopeDeneme()

// console.log(scopeDeneme());

// console.log(x);

// //?global degiskenler

// let number1=44;

// const fonk1 =() =>{
//     let number1 = 456;//? function-scoped degiskendir
//     number1++

//     return number1
// }

// console.log(fonk1());
// console.log(number1);

// number1=fonk1()

// console.log(number1);



const artikYil= function (yil) {
    if(yil%4==0){
        if(yil%100!==0){
            console.log("artik yildir");
        }
        else if(yil%400==0){
            console.log("artik yil");  
        }
        }
        else{
            console.log("artik yil degil");
        }
         
    }

    artikYil(prompt("yil giriniz"));









