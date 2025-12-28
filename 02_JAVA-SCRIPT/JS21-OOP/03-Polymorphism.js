//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//*         (kalıtım,miras)ve(çok biçimlilik)=============================================

//? Extends keyword ü, parent class ın işlevselliğini child class a genişletmek (extend) için kullanılır..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramıdır,bir variable ın, nesnenin, yada fonksiyonun,birden çok form alma özelliğini ifade eder

//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir (overriding=aynı ada sahip iki fonksiyon tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve fonsiyona her çağrı yapıldığında, son tanımlanan fonksiyon yürütülür.)(overloading=overloading demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir ve js  direk overloading i desteklemez, manuel uğraşmak gerekir )

class Book {
    constructor(a,b,c){
        this.title = a;
        this.yatar = b;
        this.year = c;

        this.ozetFunction = function () {
      return `${this.title} kitabını ${this.year} yılında ${this.yazar} yazmıştır`;
    };
    }

     yilHesapla(){
    return `bu kitap ${2025-this.year} yıllıktır`
  }
}

//!OVERRIDING

class Dergi extends Book{
    constructor(a,b,c,d,e){
        super(a,b,c)

        this.mount = d;
        this.fiyat = e;

        //!fonksiyonu override edecegim

        this.ozetFunction=function(){
            return `${this.yazar} hat in ${this.year} buch ${this.title} geschrieben`;
        };
    }

    //!overriding
    yilHesapla(){
        retrun `duygu elif ayla`
    }
}

const dergi1 = new Dergi("hey girl", "elif ayla", 1990, "november", "100")

console.log(dergi1);
console.log(dergi1.ozetFunction());


//!OVERLOADING

function selamla(a){
    alert(a);
};

function selamla(a,b) {
    console.log(a,b); 
}

function selamla(a,b,c){
    document.querySelector("body").textContent=a+b+c;
}



// Çıktıdaki "undefined" ifadesinin nedeni şudur: JavaScript'te aynı adla iki işlev tanımlanırsa, son tanımlanan işlev önceki işlevin üzerine yazar. 
// Bu durumda, selamla(arg1) öğesinin üzerine selamla(arg1,arg2,arg3) tarafından yazılmıştır, ancak 
// işleve yalnızca bir Argüman ("naber") ilettik. Bu, ikinci ve üçüncü argümanın tanımsız olduğu anlamına gelir, yani ikinci argümanı yazdırmaya çalıştığımızda, "tanımsız" olarak yazdırılır.
// overloading işlevinin JavaScript'te desteklenmediğini gördük, ancak overloading işlevini kendi başımıza uygulayabiliriz; bu, daha fazla sayıda ve daha fazla türde argüman söz konusu olduğunda oldukça karmaşıktır. Aşağıdaki kod, JavaScript'te overloading işlevinin nasıl uygulanacağını anlamanıza yardımcı olacaktır.
//*https://www.geeksforgeeks.org/function-overloading-in-javascript/
