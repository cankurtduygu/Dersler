//* ===================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread ==========================

//!table de kullanilacak degiskenler

const shipping = 15.0;
const tax = 0.18;


// Database'den cekilir bu veriler ama bu projede cekmis gibi yaptik
let sepettekiler = [
    { name: "Vintage Backpack", price: 34.99, piece: 1, img: "./img/photo1.png" },
    { name: "Levi Shoes", price: 40.99, piece: 1, img: "./img/photo2.png" },
    { name: "Antique Clock", price: 69.99, piece: 1, img: "./img/photo3.jpg" },
];

//locala kaydetmek istersek ve ordancekmek istersek
localStorage.setItem("LIST",JSON.stringify(sepettekiler))
const liste = localStorage.getItem("LIST")
console.log(liste);



//!EKRANA BASTIRMA DOM'A YAZDIRMA

sepettekiler.forEach((ürün) => {
    // console.log(ürün.name);sürekli ürün.name yapmamak icin destructuring(kisayol teknikleri uzun yapmak yerine) yapip direk icinde bunlar var diye söyleyebilirim.

    const { name, price, piece, img } = ürün;

    //burda += ile yapmasayim sadece sonuncuyu görürdüm cünkü hep üzerine yazardi eklemeden.
    document.querySelector("#product-rowlari").innerHTML += `<div class="card mb-3" style="max-width: 540px;">

  <div class="row ">

    <div class=" col-md-5">
      <img src=${img} class=" w-100 rounded-start" alt="...">
    </div>

    <div class="col-md-7 ">

      <div class="card-body">
      
        <h5 class="card-title">${name}</h5>
        
             <div class="ürün-price">
                    <p class="text-warning h2">
                      <span class="indirim-price">${(price * 0.7).toFixed(2)}</span>
                      <span class="h5 text-dark text-decoration-line-through">${price}</span>
                    </p>
                  </div>

                  
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="piece-controller">
                      <button class="btn btn-secondary btn-sm minus">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="ürün-adet">${piece}</p>
                      <button class="btn btn-secondary btn-sm plus">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>

                  </div>

                  <div class="ürün-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-product">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>

                  <div class="mt-2">
                    Ürün Toplam: $<span class="product-total">${(price * 0.7 * piece).toFixed(2)}
                    </span>
                  </div>
      </div>
    </div>
  </div>
</div>`;

})


//? en alttaki  hesaplama fonksiyonu

hesaplaCardTotal();

//! REMOVE BUTONU ILE SILME ISLEMI
document.querySelectorAll(".remove-product").forEach((btn) => {
  btn.onclick = () => {
   
   
   sil(btn)
   


  };
});


const sil=(btn)=>{
  //  console.log(btn.closest(".card-body").querySelector("h5"));
  // btn.parentElement.parentElement.parentElement.parentElement.parentElement.remove();

  //*ekrandan sildik
  btn.closest(".card").remove();

  hesaplaCardTotal();

  //* ekrandan silinen ürünü diziden de sil

  sepettekiler = sepettekiler.filter(
    (a) => a.name != btn.closest(".card-body").querySelector("h5").textContent
  );
}


//! ADET DEGISTIRME

document.querySelectorAll(".piece-controller").forEach((kutu => {

    //!ekrandakiler
    const plus = kutu.lastElementChild;
    const minus = kutu.firstElementChild;
    const adet = kutu.children[1];



    plus.onclick = () => {
        //*ekranda degisiklik
        adet.textContent = Number(adet.textContent) + 1;

        //dizide degisiklik maple dizideki degisiklk mapla deizide dolas sart ve uyan eslesen elemanin adetini degistir


        //* her card da bulunan 
        plus.closest(".card-body").querySelector(".product-total").textContent = plus.closest(".card-body").querySelector(".indirim-price").textContent * adet.textContent

        hesaplaCardTotal();
    }


    

        minus.onclick = () => {
           
            adet.textContent = Number(adet.textContent) - 1;

            //* her card da bulunan ürün toplami güncelle burda minus da olsa plus da olsa sikinti olmaz
            plus.closest(".card-body").querySelector(".product-total").textContent = plus.closest(".card-body").querySelector(".indirim-price").textContent * adet.textContent

            hesaplaCardTotal();


            //!eger adet 1 iken minus basilirsa ürün silinsin

            //!eğer adet 1 iken minus a basılırsa ürün silinsin
if(adet.textContent < 1){
    alert("sileyim mi?")

sil(minus)


}

    } 



}))




function hesaplaCardTotal() {


    //!card toplam degerlerini hesapla ve güncelleme table'i

    //!   querySelectorAll(), statik bir NodeList döndürür.
    //!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ 
    // Dizi Değil!
    // Bir NodeList bir dizi gibi görünebilir ama öyle değildir.
    // Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.
    // Ancak, bir NodeList'te reduce(), push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.

    // console.log(document.querySelectorAll(".product-total")); Nodelist getirir yani icinde spanlar olan bir nodelist

    //* Üürnlerin ekrandaki fiyatlarini hesapladik
    const productFiyatlarToplami = Array.from(document.querySelectorAll(".product-total")).reduce((toplam, fiyat) => toplam + Number(fiyat.textContent), 0)

    // console.log(productFiyatlarToplami);

    document.querySelector(".productstoplam").textContent = productFiyatlarToplami;

    document.querySelector(".vergi").textContent = productFiyatlarToplami * tax;


    document.querySelector(".kargo").textContent = shipping;

    document.querySelector(".toplam").textContent = productFiyatlarToplami + productFiyatlarToplami * tax + shipping;

}
