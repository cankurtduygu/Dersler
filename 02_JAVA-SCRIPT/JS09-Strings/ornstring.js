
//******************************************* */
//! EXTRA NOTES ON STRINGS
//******************************************* */


//! ÖRNEK: basit bir email doğrulama fonksiyonu yazınız.
// email en az bir "@" içermeli
// email ".com" veya ".net" ile bitmeli
// email boşluk karakteri içermemeli

// const emailKontrol = (email) => {

//   email.includes("@") && (email.endsWith(".com") || email.endsWith(".net")) && !email.includes(" ") ? console.log("geçerli email") : console.log("geçersiz email");


// }

// emailKontrol(prompt("lütfen email giriniz"));


//! ÖRNEK2:kullanicidan aldigin isim soyisim verisini düzenle
 const adSoyad = "duygu özcan";
 const yeni =adSoyad.split(" ");
 console.log(yeni);
 for(let i=0; i<yeni.length; i++){
  yeni[i]=yeni[i][0].toUpperCase()+yeni[i].slice(1).toLowerCase();}
 
 // 
  console.log(yeni.join(" "));
 

 

