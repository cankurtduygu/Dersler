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

setTimeout(() =>{
    console.log("selamun aleykum");
}, 2000);

setTimeout(()=>{
    console.log("aleykum selam");
}, 3000)

setTimeout(()=>{
    console.log("gencler merhaba");
}, 1000)























//* 2- setInterval() (Belirli Aralıklarla Tekrarlama) Fonksiyonu
//* 3- Callback Fonksiyonlar
//* 4- Promises (Sözler)
//* 5- Async/Await Yapısı