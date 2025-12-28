//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.

class Book {
  constructor(a, b, c) {
    this.title = a;
    this.yazar = b;
    this.year = c;

    this.ozetFunction = function () {
      return `${this.title} kitabını ${this.year} yılında ${this.yazar} yazmıştır`;
    };
  }

  yilHesapla(){
    return `bu kitap ${2025-this.year} yıllıktır`
  }

}

//? new keyword ü  Book Constructor ı parametrelerle çağırır.
//? Constructor, Book object in bir örneğini kalıbını oluşturur.
//? Constructor daki tüm variablelar ve functionlar, oluşturulan her  single örneğe (instance a çocuklara) eklenir
const book1=new Book("yaprak dökümü", "reşat nuri", "1960")
const book2=new Book("karamazov kardeşler", "dostyevski", "1980")

console.log(book1);
console.log(book1.ozetFunction());
console.log(book1.yilHesapla());//bellekte yer kaplamayan ama çağrılınca gelen fonksiyon


//?INHERITANCE (kalitim miras)

//* Book object kalibindan Dergi Object kalibinamiras getir

class Dergi extends Book{

    constructor(title, yazar, year, a, b){

        super(title,yazar,year)

        this.fiyat = a;
        this.mounth = b;

    }
}

const dergi1 = new Dergi("marie clara", "elon mask", 1980, 50,"september");


console.log(dergi1);
console.log(dergi1.ozetFunction());
console.log(dergi1.yilHesapla());


class Gazete extends Book{

    constructor(a,b,c,d){
        super(a,b,c)
        this.day=d
    }
}

const gazete = new Gazete("", "güneri", 1980, "13 Aralik");
console.log(gazete);

const gazete2 = new Gazete("sabah", "", 1900, "13 aralik");
//! extends edildiği zaman, atadan gelen her veriyi kullanmak zorundayız, en fazla value kısmını boş " " bırakabiliriz




