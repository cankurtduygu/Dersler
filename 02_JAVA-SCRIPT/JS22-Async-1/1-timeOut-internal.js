//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.

//* Asenkron Programlama Ornekleri
//* --------------------------------------------------------------
//* 1- setTimeout() (Zaman Aşımı) Fonksiyonu 1 seferlik Gecikmeli Calistirma

// setTimeout(() =>{
//     console.log("selamun aleykum");
// }, 2000);

// setTimeout(()=>{
//     console.log("aleykum selam");
// }, 3000)

// setTimeout(()=>{
//     console.log("gencler merhaba");
// }, 1000)

//!-Selamun Aleyküm-Aleyküm Selam- gençler merhaba  çalışır, 3. nün süresi 1.den azsa, 2-3-1 sırasında çalışır
//!settimeout müsait zamanda ortaya çıkar, onun sırası geçtiğinde alttaki işlemler bitince çalışır


//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir
//***************************** */

//?setInterval non-blocking (kod burada takılı kalmaz alttaki kodlarda çalışır)
//* 2- setInterval() (Belirli Aralıklarla Tekrarlama) Fonksiyonu

// setInterval(() => {
//     console.log("merhaba");
// }, 5000);


//? clearInterval() ile setInterval durdurulabilir
// let sayac = 0;

// const interval1 = setInterval(()=>{
//     console.log(++sayac);

//     if(sayac === 5){
//         clearInterval(interval1); //sayac 5 e gelince interval durur
//     }
// }, 1000);

setTimeout(() =>{
    console.log("deneme");
    setTimeout(() =>{
        console.log("deneme 2");
    }, 1000);
}, 9000);


//* ================================================================    
//* 2- setTimeout() ve setInterval() İç Yapısı
//* ---------------------------------------------------------------
//? setTimeout() ve setInterval() fonksiyonlari, Web API'lerin icerisinde bulunur. Tarayicilar, bu Web API'leri saglayarak JavaScript'in asenkron islemlerini gerceklestirmesine olanak tanirlar.

//? setTimeout() veya setInterval() cagrildiginda, ilgili Web API zamanlayiciyi baslatir ve belirtilen sureyi takip eder. Sure doldugunda, Web API, callback fonksiyonunu JavaScript'in mesaj kuyuguna (message queue) ekler. JavaScript'in event loop'u, mesaj kuyugundaki fonksiyonlari kontrol eder ve ana thread bos oldugunda, bu fonksiyonlari call stack'e ekler ve calistirir.
//? Bu mekanizma, JavaScript'in tek is parçacikli (single-threaded) yapisini korurken, asenkron islemlerin gerceklestirilmesine olanak tanir.

//* Not: setTimeout() ve setInterval() fonksiyonlarinin kesin calisma suresi garanti edilmez. Belirtilen sure, en az o kadar bekleme suresini ifade eder. Ancak, ana thread yogunlugu veya diger asenkron islemler nedeniyle, gercek calisma suresi daha uzun olabilir.
  






























//* 3- Callback Fonksiyonlar
//* 4- Promises (Sözler)
//* 5- Async/Await Yapısı