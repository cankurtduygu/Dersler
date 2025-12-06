//* ======================================================
//*                 NESNELER (OBJECTS)
//* ======================================================

//? Diziler (Arrays) sıralı bellek yapısıdır. Böylece, onlara indeksleyerek erişebiliriz.
//? Object leri daha karmaşık (yapılandırılmamış) bellek ihtiyaçları için kullanabiliriz

//?  herhangi bir veriye erişmek için Key-value (property-value) kullanılır

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1-   Object (new) örneği oluşturalım
//* ---------------------------------------------------------

const car1 = new Object({ name: "BMW", engine: 1.6, model: 2000 })
const car2 = new Object({ name: "Mercedes", engine: 1.6, model: 2000 })
const car3 = new Object({ name: "Audi", engine: 1.6, model: 2000 })

console.log(car1);
console.log(car1.name);//? dot nataion
console.log(car1["engine"]);//?square bracket

//* ---------------------------------------------------------
//* 2-   Object Constructor (OOP ile ayrıntılı göreceğiz)
//* ---------------------------------------------------------


function Calisanlar(id, isim, maas) {
    this.calisanId = id;
    this.name = isim;
    this.salary = maas;
}

const kisi1 = new Calisanlar(101, "Duygu", 80000)
const kisi2 = new Calisanlar(102, "Elif", 80000)
const kisi3 = new Calisanlar(103, "Ayla", 80000)

console.log(kisi1);

//* ---------------------------------------------------------
//* 3-   Object Literal (en çok kullanılan yol)
//* -------------------------------------------------------

const person = {
    name: "ipek",
    surname: "bilir",
    birth: "1979",
    job: "actrist",
    hasDriverLicense: true,
    languages: ["C", "C++", "JAVA", "PHYTON"]
}

//? READ

console.log(person.languages[2]);


//? WRITE

person.birth += 5

console.log(person.birth);
person.languages.map((a) => a.toLowerCase()).forEach((b) => console.log(b))

//? yeni bir property ekleyebiliriz.

person.location = "Turkey"
console.log(person);

//* ---------------------------------------------------------
//*    Objects teki Yöntemler
//* ---------------------------------------------------------

const mensch = {
    name: "duygu",
    surname: "bilir",
    birth: 1979,
    job: "developer",
    hasDriverLicense: true,

    yasHesapla: function () {
        return new Date().getFullYear() - this.birth;  //arrow this kjelimesini desteklemedigi icin expression methiodu kullandik
    },
    ozet: function () {
        return `${this.name} oyuncusu ${this.yasHesapla()} yasindadir`
    },

    nameSurname: () => {
        return `${this.name} ${this.surname}`
    }
};

console.log(mensch);
console.log(mensch.yasHesapla());
console.log(mensch.ozet());
console.log(mensch.nameSurname());

//? arrow func'lar aslinda this keyword'lerini kaldirmak icin gelistirilmis bir fonksiyon yazma yontemidir. Bu sebeple, dogrudan global scope'a baglidir.
//!NOTE: arrow functions ın sözcüksel bağlamı vardır. Yani this keyword ü bir arrow function içinde kullanırsak beklenmedik değerler alabiliriz. arrow kullanınca,  object in içindeki this keyword ü, global scope u (window) ifade ettiği için, this value nun global scope a bağlanmasını önlemek için, object yöntemi içinde normal function u kullanın.

console.log(Object.values(mensch));//mensch objesinin value larini bir diziye atar.
console.log(Object.keys(mensch));

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
// key lerin belirli bir sırası (index) olmadığı için, diziye alırsak object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.

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
console.clear(),
    console.log(people);

//* Ornek1: people dizisindeki job ları göster

people.forEach((a) => console.log(a.job)
)

//* Ornek2 yasları 1 er arttır ve sonucu yeni diziye aktar
/*let x=[];
const yaslar = people.map((kisi,i)=> x[i]=kisi.age+1)
console.log(x);*/

//* Ornek3 yasları 1 er arttır, sonucu dizide kalıcı değiştir

people.map((kisi, i, arr) => arr[i].age = kisi.age + 1)

console.log(people);

//* Ornek4 people (object li ) dizisinden yaşları değişmiş olarak yeni bir object li dizi oluşturalım

const yeniPeople = people.map((kisi) => ({
    isim: kisi.name,
    soyisim: kisi.surname,
    meslek: kisi.job,
    yas: kisi.age + 5,
    kurs: "clarusway"
}))

console.log(yeniPeople);

//* Ornek5 yası 33 ün üstünde olan kişilerin name lerini listele

people.filter((kisi) => kisi.age > 30).forEach((a) => console.log(a.name))

//* ornek6 people dizisine yeni object veri ekleyelim

people.push({ name: "Ayla", surname: "Elif", job: "tester", age: 34 })

console.log(people);

//* Ornek7 her elemanın name ini büyük harfli yaz, yaslarını 2 kat yap, job larının önüne senior kelimesi ekleyelim ve bunları yeni bir diziye atalım

// console.log(people.map((kisi)=> kisi.name.charAt(0).toUpperCase()+ kisi.name.slice(1)));

const yeniInsanlar = people.map((kisi) => ({
    name: kisi.name.charAt(0).toUpperCase() + kisi.name.slice(1),
    surname: kisi.surname,
    age: kisi.age * 2,
    job: "Senior " + kisi.job
}))

console.log(yeniInsanlar);


//* ornek8:
const update = people
    .filter((a) => a.job == "tester" && a.age < 35)
    .map((a) => ({
        yas: a.age,
        ad: a.name,
    }));
console.log(update);

//* Ornek9: ortalama yasi hesaplayiniz.
console.log((people.reduce((toplam, eleman1) => toplam + eleman1.age, 0) / people.length).toFixed(2));

// (people.reduce((toplam, eleman1) =>  toplam + eleman1.age) / people.length).toFixed(2)

//?nested objects

const INSANLAR = {

    kisi1: {
        name: "Duygu",
        surname: "Canan",
        dob: "1990",
        job: "developer",
        salary: "140000",
        drivingLicense: true
    },

    kisi2: {
        name: "Ayla",
        surname: "Canan",
        dob: "1990",
        job: "tester",
        salary: "120000",
        drivingLicense: true
    },

    kisi3: {
        name: "Elif",
        surname: "Canan",
        dob: "1990",
        job: "devops",
        salary: "150000",
        drivingLicense: true
    }
}

console.log()
Object.values(INSANLAR).forEach((kisi)=>console.log(kisi.name))
Object.keys(INSANLAR).forEach((key)=>console.log(INSANLAR[key].name))





























