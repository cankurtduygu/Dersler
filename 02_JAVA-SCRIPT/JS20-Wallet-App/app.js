//?SELECTORS
//! Harcama Formu
const form = document.querySelector("#harcama-formu");
const formTarih = document.querySelector("#tarih");
const formMiktar = document.querySelector("#miktar");
const formHarcamaAlani = document.querySelector("#harcama-alani");
//! harcama tablosu
const harcamaTablosu = document.querySelector("#harcama-tablosu");
const harcamaBody = document.querySelector("#harcama-body");

//?VARIABLES (harcamalar dizisi)

let dizi = JSON.parse(localStorage.getItem("einkaufen")) || [];
let einkommen = 0;

//!İLK- HARCAMA FORMU DOLDURMA (sarı)

form.addEventListener("submit", function (e) {
  e.preventDefault();
  diziKaydet();
  ekranaYazdirma();
  kalanHesapla();
})

console.log(dizi);

//! EKLE FORMU
//!Ekle formu (yeşil-kırmızı)
const ekleFormu = document.querySelector("#ekle-formu");

const gelirInput = document.querySelector("#gelir-input");

//! SONUÇ TABLOSU
const gelir = document.querySelector("#geliriniz");
const gider = document.querySelector("#gideriniz");
const kalan = document.querySelector("#kalan");


ekleFormu.addEventListener("submit", function (e) {
  e.preventDefault();
  kalanHesapla();
})


const kalanHesapla = () => {
  einkommen = gelirInput.value;
  gelir.textContent = einkommen;
  kalan.textContent = Number(gelirInput.value) - Number(gider.textContent);
  const toplam = dizi.reduce((acc, dizi) => acc + Number(dizi.miktar), 0)
  gider.textContent = toplam;
}


//!!!localStoage kullandığımızda refresh te ekranda localdeki kayıtlı bilgiler gelsin diye
const diziKaydet = () => {
  dizi.push({ tarih: formTarih.value, miktar: formMiktar.value, alan: formHarcamaAlani.value })
  //!!!!!!localStorage a kaydet
  localStorage.setItem("einkaufen", JSON.stringify(dizi));
}
const ekranaYazdirma = () => {
  harcamaBody.innerHTML = ""; // tabloyu temizle
  dizi.forEach((item,index) => {
    harcamaBody.innerHTML += `<tr>
            <th scope="row">${item.tarih}</th>
            <td>${item.alan}</td>
            <td>${item.miktar}</td>
            <td><i class="fa fa-trash fa-lg" data-index="${index}"></i></td>
          </tr>`

harcamaBody.addEventListener("click", function(e) {
  if (e.target.classList.contains("fa-trash")) {
  
    e.target.closest("tr").remove(); // ekrandan silmek için
    const index = Number(e.target.getAttribute("data-index"));
    dizi.splice(index,1); //diziden sil
    localStorage.setItem("einkaufen", JSON.stringify(dizi)); // localStorage güncelle
    ekranaYazdirma();
  }
});


  })
};

ekranaYazdirma();
kalanHesapla();


