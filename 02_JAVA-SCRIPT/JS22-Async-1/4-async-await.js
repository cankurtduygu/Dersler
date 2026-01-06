//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//* Bir fonksiyonu async  hale getirmek icin fonksiyon keyword'nun onune async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi satirdaki kodun durdurulmasini saglar. Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.
//! JavaScript try anahtar kelimesi kod bloğundaki kodları çalışma zamanında test etmek için kullanılır.

//! JavaScript catch anahtar kelimesi çalışma zaman hatası sonucu oluşan hataları ekrana yazdırmak için kullanılır.

//! JavaScript throw anahtar kelimesi özel hata oluşturmayı sağlar.

//! JavaScript finally anahtar kelimesi hata oluşması veya oluşmaması durumunda (her durumda) çalışacak kodları yazdırmak için kullanılır.

const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg";

const getData = async () => {
    try {
        const response = await fetch("https://api.tvmaze.com/search/shows?sdsdf");

        //? Hata yakalama (error handling)
        if (!response.ok) {
            throw new Error(`url de hata var ${response.status}`);
        }

        const data = await response.json();
        ekranaBastir(data);
    } catch (error) {
        console.log("Hata Yakalandı:", error.message);
        console.log("console log sayesinde devam ediyor");
        
    }
};

    

  getData();

    const ekranaBastir = (data) => {
        data.forEach((item) => {

            const kutu = document.createElement("div");
            document.querySelector("button").after(kutu);

            data.forEach(({show}) => {
                kutu.innerHTML += `<h1>${show.name}</h1>
                                  <img src="${show.image?.medium || defaultImage}"/>
                                  <h4>${show.language}</h4>
                                  <p>${show.summary}</p>
                                  <hr/>`;
            });

    }
    )
}
