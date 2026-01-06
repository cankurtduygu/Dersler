//* ===========================================================
//*                3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//!throw ile hata fırlatırsak kodumuz o satırda durur. kodumuzu durdurmak istemezsek diğer sayfadaki kodları kullanırız

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)
//? Örnek 1: Basit Fetch Kullanimi
let dizi = [];

// fetch("https://api.github.com/users").then((response) => response.json()).then((veri)=> console.log(veri));

const getirData = () => {
    fetch("https://api.github.com/users")
        .then((response) => {
            
            if(!response.ok){
                throw new Error("Birseyler Ters Gitti");
            }
            
            return response.json()
        })
        .then((data) => ekranaBastir(data))
        .catch((error) => console.log("Hata Yakalandı:", error.message));

};

document.querySelector("button").onclick = () => getirData();

const ekranaBastir = (data) => {

    data.forEach((person) => {

        document.querySelector("section").innerHTML += `<h1>${person.login}</h1>
                                                        <img width="50%" src=${person.avatar_url}/>
                                                        <h3 class="text-danger">${person.node_id}</h3>`;
        
    })
}





