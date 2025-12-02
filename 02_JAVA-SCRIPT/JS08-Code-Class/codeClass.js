//* Zar atma uygulamasi

/*const zar = function () {

    return RandomSayiPc =Math.ceil(Math.random()*6);
    
}

console.log(zar(),zar());*/

//* zar atalim gelirse ifade ekle

/*const zar = function () {

    return RandomSayiPc =Math.ceil(Math.random()*6);
    
}

let x= zar();
let y= zar();

if(x==6 && y==6){
    console.log("tebrikler 6-6💕❤️");
    
} else{
    console.log("degil zar degerleri,",x,y);
    
}*/


//*
// // /*const zar = function () {

//     return RandomSayiPc =Math.ceil(Math.random()*6);
    
// }

// const zarAt = function (params) {

//     let x = zar()
//     let y = zar()
//     if(x == 6 && y ==6){
//         console.log("tebrikler 6-6 ❤️");
//     } else{
//         console.log(x,y);
        
//     }
// }

// zarAt()*/

//* Vize nin 30% finalin 70% gecme notu :50 final notu 50 olmali

/*const hesapla = function (vize,final) {

    let sonuc = vize*0.3 + final*0.7;

    if(sonuc>=50 && final >=50){
        console.log("gectiniz ortalamaniz",sonuc);
    } else{
        console.log("gecemediniz final notunuz:",final,"vize final ortalama",sonuc);
        
    }
    
}

hesapla(100,49);*/

//*const vücutKitleHesapla = function (kilo,boy) {

    /*let sonuc = kilo / (boy*boy) ;

    if(sonuc < 18.5){
        console.log("oooo cok zayifsin 👌 vki",sonuc);
    } else if( sonuc< 24.9 && sonuc >=18.5){
        console.log("Normal bir kilodasin😘vki",sonuc); 
    } else if(sonuc>25 && sonuc<=29.9){
        console.log("sanirim biraz kilon var😉vki",sonuc);
        
    } else 
        console.log("obezsin demek istemem ama öylesin diyetisyene git 😢vki",sonuc);   

}
vücutKitleHesapla(65,1.69);*/

//* Rastgele arka plan rengi degistirme

/*let arkaPlan = (renk)=>{
    if (renk == undefined) {
        function randomColor() { return Math.floor(Math.random()*256)}
        renk = `rgb(${randomColor()},${randomColor()},${randomColor()})`
        console.log(renk)
        document.body.style.backgroundColor = renk
    }else {
        document.body.style.backgroundColor = renk
    }
}
arkaPlan('yellow')*/

//*bip fonksiyonu
/*function beep() {
  const ctx = new AudioContext();
  const oscillator = ctx.createOscillator();
  oscillator.type = "square";
  oscillator.frequency.value = 500;
  oscillator.connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.2);
}

beep()*/

// ATM BAKIYE UYGULAMASI

