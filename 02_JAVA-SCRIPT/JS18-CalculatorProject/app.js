//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const aC = document.querySelector(".ac");
const pm = document.querySelector(".pm");
const ustEkranDiv = document.querySelector(".previous-display");
const altEkranDiv = document.querySelector(".current-display");

let ustEkranSayi = "";
let altEkranSayi = "";
let islem = "";
let son = "";


//?*********** herhangi bir number a basılınca

//   console.log(altEkranDiv);
numberButtons.forEach((number) => {
    number.onclick = () => {
        // console.log(number.textContent);
        updateEkran(number.textContent);
    };
});

equalButtons.onclick = () => {
    console.log(equalButtons.textContent);
    son = hesapla();
    ekranaHazirlik(son);
    updateEkran(""); // Sonucu ekrana yazdırmak için
}

//!EKRANA HAZIRLIK

const ekranaHazirlik = (number) => {
    altEkranSayi = number;
    altEkranDiv.textContent = altEkranSayi;
};

//!BURADA YAPILANLARI EKRANA BASTIR
const updateEkran = (number) => {
    //?ilk sayılar altekranda görünsün
    //?işlem girilince

 //Sifir durumu kontrolü
    if (altEkranSayi[0] === "0") {
        altEkranSayi = number;
    }
    else if (altEkranSayi[0] === "0" && altEkranSayi.length === 2) {
        // Örneğin önce 0 sonra 5 girildiyse, altEkranSayi "05" olur, bunu "5" yap
        altEkranSayi = altEkranSayi[1];
    } else {
        if (number === "." && altEkranSayi.includes(".")) return;
        if(altEkranSayi.length>9) return;
        altEkranSayi += number;
    }
    altEkranDiv.textContent = altEkranSayi;
    console.log(altEkranSayi);

};



//?**************HERHANGİ BİR İŞLEME TIKLANDIĞINDA
operationButtons.forEach((op) => {
    op.onclick = () => {
        // Eğer sayı girilmediyse operatör çalışmasın
        if (altEkranSayi === "") return;
        if (islem !== "" && altEkranSayi !== "" && ustEkranSayi !== "") {
            son = hesapla();
            ekranaHazirlik(son);
            updateEkran(""); // Otomatik hesaplama sonrası sonucu ekrana yazdırmak için
        }

        // ...existing code...
        islem = op.textContent;
        ustEkranSayi = altEkranSayi;
        altEkranSayi += op.textContent;
        ustEkranDiv.textContent = altEkranSayi;
        altEkranSayi = "";
        altEkranDiv.textContent = altEkranSayi;
        // ...existing code...
    };
});

//! HESAPLA FONKSİYONU
const hesapla = () => {
    let sonuc;
    //   console.log(altEkranSayi);
    //   console.log(ustEkranSayi);
    switch (islem) {
        case "+":
            sonuc = Number(ustEkranSayi) + Number(altEkranSayi);
            break;
        case "-":
            sonuc = ustEkranSayi - altEkranSayi;
            break;
        case "x":
            sonuc = ustEkranSayi * altEkranSayi;
            break;
        case "÷":
            sonuc = Number(ustEkranSayi) / Number(altEkranSayi);
            break;
        default:
            break;
    }

    console.log(sonuc);

    return sonuc;


};


//?AC butonuna basıldığında

aC.onclick = () => {
    console.log(aC.textContent);

    ustEkranSayi = "";
    altEkranSayi = "";
    altEkranDiv.textContent = altEkranSayi;
    ustEkranDiv.textContent = ustEkranSayi;
    updateEkran(""); // Temizleme sonrası ekranı güncelle

}

//? PM butonuna basıldığında


//?percent % butonuna basıldığında
