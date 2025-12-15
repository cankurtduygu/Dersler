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


//? operatör degiskenleri degiskenlere herkes erisebildin diye 2.sebep ise textContent diye sürekli belirtmemek icin

let ustEkranYazi = "";
let altEkranYazi = "";
let islem = "";

//? *********** herhangi bir number a basılınca
//numberbuttons degiskeninde num classli bütün sayilar var hangi sayiya basiyorsam onu alabilmek icin querySelecektorAll nodeList döndügü icin forEach ile dönebiliriz.

numberButtons.forEach((number) => {
    number.onclick = () => {
    // console.log(number);
    // altEkranYazi = number.textContent

    ekranaHazirlik(number.textContent);
    updateEkran()
  
    }
})

//!EKRANA HAZIRLIK

const ekranaHazirlik = (sayi) => {
    // console.log(sayi);
    
    // console.log(altEkranYazi);

    if(altEkranYazi== "0" && sayi != "." && sayi != "0")
     {altEkranYazi = sayi;//varolan 0 ı mesela 4 yap ama,
        return //o 4 sayısını altekransayi değişkenine ekleme bıradan yollama, eli boş çık, sadece 0 ı 4 e döndür
        }


    //*kullanici herhangi bir yerde  . girmisken, tekrar nokta girmeye kalkarsa giremesin

    if(sayi == "." && altEkranYazi.includes("."))
        return;

    //* Kullanici ilk basta 0 girer ardindan tekrar 0 girerse , girilmesin, tek 0 dönsün

    if(altEkranYazi=="0" && sayi=="0")return

    altEkranYazi += sayi;
};

//!BURADA YAPILANLARI EKRANA BASTIR

const updateEkran = () =>{
    altEkranDiv.textContent = altEkranYazi;
    
    if(String(altEkranYazi).length>9)
        altEkranYazi = String(altEkranYazi).slice(0,9)
        altEkranDiv.textContent =altEkranYazi;

    //?islem girilince

    if(islem)
        ustEkranDiv.textContent = `${ustEkranYazi} ${islem}`;
    else
        ustEkranDiv.textContent =""

}

//? ****************HERHANGI BIR ISLEME TIKLANDIGINDA

operationButtons.forEach((opr) => {
    opr.onclick =() => {
        
        if(altEkranYazi && ustEkranYazi) equalButtons.click()//1.yol

        islem = opr.textContent
        ustEkranYazi = altEkranYazi;
        altEkranYazi = "";

        updateEkran();
    }
})

//? ***************** ESITTIR BUTONUNA BASILINCA

equalButtons.onclick = () => {

  hesapla()
  updateEkran();
};

//! HESAPLA FONKSİYONU

const hesapla = () => {
     let sonuc;

  switch (islem) {
   case "+":
            sonuc = Number(ustEkranYazi) + Number(altEkranYazi);
            break;
        case "-":
            sonuc = ustEkranYazi - altEkranYazi;
            break;
        case "x":
            sonuc = ustEkranYazi * altEkranYazi;
            break;
        case "÷":
            sonuc = Number(ustEkranYazi) / Number(altEkranYazi);
            break;
        default:
      return;
  }

  ustEkranYazi = "";
  islem = "";
  altEkranYazi = sonuc;
}

//? AC Butonuna basildiginda

document.querySelector(".ac").onclick =()=>{

    islem = "";
    altEkranYazi = "";
    ustEkranYazi = "";

    updateEkran();
}

//? PM butonuna basildiginda

document.querySelector(".pm").addEventListener("click",
    () => {
    if(altEkranYazi){
        altEkranYazi = altEkranYazi * -1;
        updateEkran();
    } else return;
})

//? percent % butonuna basıldığında
const percentBtn = document.querySelector('.percent');
if (percentBtn) {
    percentBtn.onclick = () => {
        if (altEkranSayi !== "") {
            altEkranSayi = String(Number(altEkranSayi) / 100);
            updateEkran("");
        }
    }
}
    



