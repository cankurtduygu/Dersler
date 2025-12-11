let rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);
const mesaj = document.querySelector(".msg");
const badi = document.querySelector("body");

let hak = 3;


//! her check butonuna bastigimda olacaklar

document.querySelector(".check").onclick = () => {
    hak--;

    //bu sekilde zincirleme seklinde olarak yapilan value tanimlamasinda 
    //icerde yazabilirim cunku tiklama olmasi lazim
    //disarda yapamayiz.
    const tahmin = document.querySelector(".guess").value;
    
    if (hak > 0) {
        if (tahmin == rastgeleSayi) {
            mesaj.textContent = "Tebrikler bildiniz Oyunu yeniden baslatin";
            badi.style.backgroundColor = "green";
            document.querySelector(".number").textContent = rastgeleSayi;
        
        } else if (tahmin > rastgeleSayi) {
            mesaj.textContent = " tahmininizi kücültün"

        } else if (tahmin < rastgeleSayi) {
            mesaj.textContent = " tahmininizi büyültün"

        } else {
            mesaj.textContent = " maalesef bilemediniz"
        }
        tahmin=null;
    }

    if(hak==0){
        mesaj.textContent = "Maalesef bilemediniz Oyunu yeniden baslatin";
        badi.style.backgroundColor = "yellow";
    }
}
