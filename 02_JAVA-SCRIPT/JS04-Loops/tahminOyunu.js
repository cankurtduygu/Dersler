//? : Tahmin Oyunu
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

// const rastgelePc = Math.ceil(Math.random() * 20);

// console.log(rastgelePc);


// let hak=3;

// for(i=1;i<=3;i++){
//     const tahmin =prompt("sayi tahmin ediniz");
//     hak--;
//     if(hak>0){
//         if(rastgelePc==tahmin){
//         console.log("tebrikler bildiniz");  
//         break;
//     }else if(rastgelePc>tahmin){
//         console.log("Arttir");  

//     }else{
//         console.log("Azalt");
//     }

//     } 
//     if(hak==0)  console.log("üzgünüz bilemediniz");
// }


//* 1den 20 ye kadar olan sayılardan bilgisayar bir sayı tutacak
//* Kullanıcı bu sayıyı bulmaya çalışacak
//* Kullanıcının işini kolaylaştırmak için küçük girdiyse ARTTIR, büyük girdiyse AZALT gibi yönlendirmeler yapalım
//* Bulduğunda TEBRİKLER yazalım
//* kullanıcıya oyuna devam etmek istermisin diye soralım, kullanıcı e tuşuna basarsa, oyun baştan kurulsun, herşey tekrarlansın


//* while ile yapimi

// const rastgelePc = Math.ceil(Math.random() * 20);

// console.log(rastgelePc);
// let hak = 5;

// while (hak > 0) {
//   const tahmin = +prompt("sayı tahmin ediniz");

//   hak--;

//   if (rastgelePc == tahmin) {
//     console.log("tebrikler bildiniz🥳");

//      break;


//   } else if (rastgelePc > tahmin) {
//     console.log("ARTTIR 📈");
//     console.log(hak + "hakkınız kaldı");

//   } else {
//     console.log("AZALT📉");

//     console.log(`${hak} hakkınız kaldı`);
//   }
// }


// if(hak==0)
// console.log("üzgünüz bilemediniz");



//* 1den 20 ye kadar olan sayılardan bilgisayar bir sayı tutacak
//* Kullanıcı bu sayıyı bulmaya çalışacak
//* Kullanıcının işini kolaylaştırmak için küçük girdiyse ARTTIR, büyük girdiyse AZALT gibi yönlendirmeler yapalım
//* Bulduğunda TEBRİKLER yazalım
//* kullanıcıya oyuna devam etmek istermisin diye soralım, kullanıcı e tuşuna basarsa, oyun baştan kurulsun, herşey tekrarlansın


const rastgelePc = Math.ceil(Math.random() * 20);

console.log(rastgelePc);
let hak = 5;
let devamMi;

do {

    while (hak > 0) {
        const tahmin = +prompt("sayı tahmin ediniz");
        hak--;

        if (rastgelePc == tahmin) {
            console.log("tebrikler bildiniz🥳");

            break;

        } else if (rastgelePc > tahmin) {
            console.log("ARTTIR 📈");
            console.log(hak + "hakkınız kaldı");
        } else {
            console.log("AZALT📉");

            console.log(`${hak} hakkınız kaldı`);
        }
    }

    if (hak == 0)
        console.log("üzgünüz bilemediniz");
    devamMi = prompt("devam temek ister misiniz, evetse e ye basin")

} while (devamMi.toUpperCase() = "e");

