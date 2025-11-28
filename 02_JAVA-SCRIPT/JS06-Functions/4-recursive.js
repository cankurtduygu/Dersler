//? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.
// Bazı formülü olan  matematiksel problem için kullanılabilir

//? verilen sayıya kadar(sayı dahil olmak şartıyla) olan sayma sayılarının toplamını bulan fonksiyon

/*const toplam = (n) =>{

    let result = 0;

    for(let i=1; i<=n; i++){
        result+=i;
    }
    console.log("1 den",n, "e kadar olan sayilarin toplami",result);
}

toplam(10);*/

//! Recursive Fonksiyonun Yapısı
// Bir recursive fonksiyonun çalışması için en az iki temel bileşene ihtiyaç vardır:

//? Sonlanma Koşulu: Fonksiyonun kendi kendini çağırmasını durduran koşul. (Sayma sayısı olduğu için 1den  küçük olursa durmalı)

//? Özyineleme Adımı: Fonksiyonun, kendisini tekrar çağırdığı adım.

//* recursive fonksiyon ile

/*const toplamlar = (n) => {
    //! eğer n 0'sa 0 ı döndürsün, değilse n-1 için kendini tekrar çağırsın

    if(n < 1) {

        return 0;
    }else{
        return n + toplamlar(n-1);

    }

}

console.log(toplamlar(8));*/

//*Faktöriyel sorusu

/*const Faktöriyel = (n) => {

    if(n === 1) {
        return n;
    }else{
        return n * Faktöriyel(n-1);

    }

}

console.log(Faktöriyel(5));*/

/*const fibo = (n) => {
    if(n<1){
        return 1;

    }else{
        return fibo (n-1)+fibo(n-2)
    };
}

console.log(fibo(6));*/
