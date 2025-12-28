//* ======================================================
//*                    (OOP)
//* Object Oriented Programming
//* ======================================================
//* object literals

const book1={
    title:"karamazov kardesler",
    yazar:"Dostyevski",
    year:1980,
    ozetFunction:function(){
        retrun `${this.title} kitabini ${this.year} yilinda ${this.yazar} yazmistir`
    }
}

//? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir, ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
  // DRY (Dont Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)