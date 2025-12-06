//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

const car = {
    title : "BMW",
    model : 1990,
    engine : 1.6
}

//* 1. klasik yol

console.log(car.title);
console.log(car["model"]);

//* 2. yol destructuring

const{title,model} = car;

console.log(title,model,car.engine);

const arabalar = {
    car1: {
    marka: "BMW",
    model: 1990,
    renk: "red",
  },
  car2: {
    marka: "MERCEDES",
    model: 1992,
    renk: "blue",
  },
  car3: {
    marka: "AUDI",
    model: 2000,
    renk: "gray",
  },
};

console.log(arabalar.car1.marka);

const {car1,car2,car3}=arabalar

const {marka} = car1
console.log(marka);




console.log(car1.marka);
console.log(car2.model);

//! car1 için marka model ismini kullandık, o yüzden car2 de yeni isimler verdik. ilk object i oluştururken key leri (marka,model..) farklı verebilirdik, bu sayede yeni isim vermekle uğraşmazdık, ama o zamanda for in ile dönerken her bir marka yı yazdır diyemezdik, çünkü car2 nin içinde mesela marka2 yazıyor olacağından, onu tanıyamazdı

//* OBJECT icinde OBJECT GEZINME

for (let i in arabalar){
    // console.log(i); //car1 car2 car3
    // console.log(typeof(i));
    // console.log(arabalar[i].marka);

    const {marka,renk} = arabalar[i];
    console.log(marka,renk);  
}

//* ornek: Array-Object gezinme-DEST
const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];

 //* 1.yol - destructuring icerde
people.forEach((kisi) => {
   const{name,surname,job,age} = kisi
     console.log(name);
     console.log(surname);
})

//* 2.yol - destructuring dogrudan parametrede

people.forEach(({name, surname, job, age}) => {
    console.log(name);
    console.log(surname);
    console.log(job);
    console.log(age);
})

//?Fonksiyonlar object parametreleri destructuring yapabilir
console.clear();
const kontrol =(veri) => {

    console.log(veri); 
    console.log(veri.adi);

    const{adi,renk,yildiz}=veri

    console.log(adi);
}

const kontrol2 = ({ adi, renk, yildiz }) => {
  console.log(adi);
  console.log(renk);
};

kontrol2({ adi: "FB", renk: "sari-lacivert", yildiz: 3 });

kontrol2({ adi: "FB", renk: "sari-lacivert", yildiz: 3 });

kontrol({adi: "GS", renk:"sari-kirmizi", yildiz:5})

//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************

const personel = {
  pName: "Johny",
  surname: "Deep",
  job: "actor",
  age: 55,
  memleket: "USA",
};





const { pName, surname, ...gerisi } = personel;
console.log(gerisi); //{job: 'actor', age: 55, memleket: 'USA'}
console.log(pName);
console.log(gerisi.job);




//* OBJECT KOPYA (rest)

//? orjinal diziyle aynı şartlarda bir kopya oluşturalım

const ikizPersonel = personel;
console.log(ikizPersonel);

//? orjinal diziden farklı bir kopya oluşturalım

const { ...personel2 } = personel;
console.log(personel2);


//*** orjinal diziden farklı bir kopya oluşturduğumuz için, bu kopyaya yapılan değişiklik orjinal diziyi bozmaz*/
personel2.age = 66;

console.log(personel.age);
console.log(personel2.age);


//***** orjinal diziyle aynı şartlarda bir kopya oluşturduk, bu yüzden kopyada yapılan değişiklik orjinal diziyi de etkiledi */
ikizPersonel.job = "mathTeacher";

console.log(ikizPersonel.job);
console.log(personel.job);

//*ARRAY KOPYA (rest)

const cosmetics=["ruj", "rimel", "oje", "far", "kalem"]

const ikizCosmetics=cosmetics

const [...cosmetics2]=cosmetics

cosmetics2.push("eyeliner")

console.log(cosmetics);
console.log(cosmetics2);

ikizCosmetics.shift("ruj")

console.log(cosmetics);
console.log(ikizCosmetics);

//! 2- bir fonksiyonun argument lerini diziye çevirmek için kullanılabilir


//* yanlis cözüm

// console.clear();

const sum =(x,y) => x+y
    console.log(sum(1,2,3,4,5,6));

//*dogru cözüm

const sum2 = (...dizi) => console.log(dizi.reduce((acc,a)=> acc+a,0));

sum2(1, 2, 3, 4, 5, 6);


//*örnek 2

const show = (isim, soyisim,  ...title  ) => {

    console.log(title);
    console.log(`${isim} ${soyisim} kisinin görevleri ${title.join(" and ")}`);
    
    

}

show("ayla", "meltem", "developer", "mom", "wife", "computer science")

//? ------------------------------------------------------
//?  SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,içinde gezin vs
//? ------------------------------------------------------

//* Ornek people (object li ) dizisinden yaşları değişmiş olarak yeni bir object li dizi oluşturalım

const insanlar = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];

const yeniInsanlar = insanlar.map((kisi) => ({
  name: kisi.name,
  surname: kisi.surname,
  job: kisi.job,
  age: kisi.age + 5,
}));

console.log(yeniInsanlar);

//* SPREAD  obje de değişmesini istemediğimiz elemanlar için ... kullanıyoruz ÖNEMLİ***!!!!!
// ...kisi=  name: kisi.name,
//   surname: kisi.surname,
//   job: kisi.job,

const yeniInsanlar2 = insanlar.map((kisi)=>({
    ...kisi,
    age: kisi.age+5,
}))

console.log(yeniInsanlar2);

// ******************* job:father olsun ve location:USA ekleyelim (spread ile yapalım) sonucu yeni bir diziye atalım

console.clear();


    







