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


//! DOM'a YAZMAK (EKRANA BASTIRMAK)

sepettekiler.forEach((ürün)=>{
  const {name, price, piece, img } = ürün;

  const card = document.querySelector(".card");
  const div = document.createElement("div");
  div.className = "row"
  div.innerHTML = `<div class=" col-md-5">
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
    </div>`

    card.appendChild(div);
})

//?en alttaki hesaplama fonksiyonu
hesaplaCardTotal()


//remove ile silme islemi

const removeProduct = document.querySelectorAll(".remove-product");

removeProduct.forEach((btn)=>{
  btn.onclick=()=>{
    btn.closest(".row").remove();

    hesaplaCardTotal();

    //silinen ürünü diziden de sil
    console.log(btn.closest(".card-body").querySelector("h5"));
    
  sepettekiler = sepettekiler.filter((ürün)=> ürün.name != btn.closest(".card-body").querySelector("h5").textContent);
  console.log(sepettekiler);
    
  }
  
})

function hesaplaCardTotal(){

  //!card toplam degerlerini hesapla ve güncelleme table'i

    //!   querySelectorAll(), statik bir NodeList döndürür.
    //!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ 
    // Dizi Değil!
    // Bir NodeList bir dizi gibi görünebilir ama öyle değildir.
    // Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.
    // Ancak, bir NodeList'te reduce(), push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.

    // console.log(document.querySelectorAll(".product-total")); Nodelist getirir yani icinde spanlar olan bir nodelist

     //* Üürnlerin ekrandaki fiyatlarini hesapladik
const productTotal = Array.from(document.querySelectorAll(".product-total"));
const productFiyatlarToplami = productTotal.reduce((toplam, fiyat) => toplam + Number(fiyat.textContent), 0);


//* fiyat toplamini ekrana bastirdik
const productstoplam = document.querySelector(".productstoplam");
productstoplam.textContent = productFiyatlarToplami;

document.querySelector(".vergi").textContent = productFiyatlarToplami*tax;

document.querySelector(".kargo").textContent = productFiyatlarToplami>0 ? shipping: 0;

document.querySelector(".toplam").textContent = productFiyatlarToplami + productFiyatlarToplami*tax + shipping;

}
















