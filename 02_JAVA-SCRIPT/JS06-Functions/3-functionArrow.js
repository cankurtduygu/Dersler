// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

// console.log("****** 3- ARROW FUNCTIONS ******");

// // //!Funct expression ve arrow func yontemlerinde
// // //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// // //! Aksi takdirde hata alırsiniz.

// //*Ornek1 3 ün katı mı diye kontrol etme
// //************************************ */

// const katMi=(sayi)=>sayi%3==0 ? "bu sayi 3'ün katidir": "bu sayi 3 ün kati degildir"

// console.log(katMi(30));


//* ORNEK5: Girilen n. terimdeki  Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, 34, ...

/*const fibonacci =(sayi)=>{
    let fiboSol=1;
    let fiboSag=1;
    let yeniFibo=0;
    let toplam=2;

    for(let i = 1; i < sayi; i++ ){
        yeniFibo= fiboSag+fiboSol;
        fiboSol=fiboSag;
        fiboSag=yeniFibo;

        toplam+=yeniFibo;
    }

    console.log(toplam);

    return yeniFibo;
}

console.log(fibonacci(8));*/

//*fonksiyona argument (parametre) olarak verilen sayıya kadar olan asal sayıları bulalım

// const asalBul = (sayi) => {


//     for(let i=2; i<sayi; i++){

//         let asaldir =true;

//         for(let j=2; j<i; j++){
//            if(i%j == 0) {
//             asaldir = false;
//             break;
//            } else asaldir = true; 
//         }
        
//         asaldir ? console.log(i, "sayisi asaldir"): console.log(i, "asal degildir");
//         ;
        
        
//     }

//     return ;
// }

console.log(asalBul(34));




