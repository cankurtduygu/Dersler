//! soru1 forEach()
/*
const sepetFiyatlari = [120, 450, 80, 200, 350];
let toplam=0;
sepetFiyatlari.forEach((fiyat)=>
    {
        toplam += fiyat
        fiyat > 100 ? console.log(fiyat, "100den büyük") : null ;

    }  );

console.log(toplam);*/

//! soru2 forEach()
const users = [
  { id: 1, name: "Ahmet", role: "admin", active: true },
  { id: 2, name: "Ayşe", role: "user", active: false },
  { id: 3, name: "Mehmet", role: "admin", active: true },
  { id: 4, name: "Fatma", role: "user", active: true },
  { id: 5, name: "Ali", role: "moderator", active: false }
];

//* görev1
/*let activeUsersNum = 0;

users.forEach((item) => {
   console.log(item);
   item.active ? activeUsersNum++ : null;
})

console.log(activeUsersNum);*/

//* görev2
/*
let adminNames = [];
users.forEach((user) => {
    user.role === "admin" ? adminNames.push(user.name) : null; 
} )
console.log(`Adminler: ${adminNames.join(",")}`);*/

//* görev3

/*
users.forEach((user,i) => {
    let situation = "Aktif✅";

    if(user.active){
        situation = "Aktif ✅";
    } else situation = "Pasif ❌";
    console.log("Kullanici #",i,":", user.name," ", "(",user.role.charAt(0).toUpperCase() + user.role.slice(1),")"," - ", situation )
}  )
*/

//! soru3 forEach()
const notlar = [45, 78, 92, 33, 88, 67, 55, 90, 41, 73];

/*let counter=0;
notlar.forEach((not)=>{
    not >=50 ? counter++ : null;
} )
console.log(`Gecen ögrenci sayisi: ${counter}`)*/

//* görev2
/*
let toplam = 0;

notlar.forEach((not) =>{
    toplam+=not;
} )

let avg = toplam/notlar.length;
console.log(`Notlarin ortalamasi: ${avg}`);*/


// 

//*görev3

/*
console.log(start);

let biggest = notlar[0];

notlar.forEach( (sayi)=> {
    sayi>biggest ? biggest = sayi : null; 
})

console.log(biggest)*/

//*

//*görev4
/*
let yeniDizi = [];

notlar.forEach((not) => {
    not >= 90 ? yeniDizi.push(not) : null;
} )

console.log(`90 ve üzeri notlar:${yeniDizi.join(",")}`)*/






//! map() soru1
/*
const fiyatlar = [100, 250, 75, 500, 180];

// Yöntem 1: En kısa
const indirimli = fiyatlar.map(fiyat => fiyat * 0.8);

// Yöntem 2: Açıklayıcı
const indirimli2 = fiyatlar.map(fiyat => {
    return fiyat - (fiyat * 0.2);
});

console.log(`Orijinal fiyatlar: ${fiyatlar}`);
console.log(`İndirimli fiyatlar: ${indirimli}`);*/






//! MAP() - SORU 2
/*const ogrenciler = ["ahmet", "ayşe", "mehmet", "fatma", "ali"];

// 1. Tümünü BÜYÜK harf

const büyükHarf = ogrenciler.map((item)=>{return item.toUpperCase()} );
console.log(büyükHarf);


// 2. İlk harf büyük

const ilkHarfBüyük = ogrenciler.map((item)=>{return item.charAt(0).toUpperCase()+ item.slice(1)} );
console.log(ilkHarfBüyük);


// 3. Numaralandır

const numarali = ilkHarfBüyük.map((item,index)=>{return `${index + 1}.${item}` })
console.log(numarali);

// 4. Uzunluklar

const uzunluk = ogrenciler.map((item)=> {return item.length})
console.log(uzunluk);


// Tüm sonuçları yazdır*/






//! MAP() - SORU 3 (ZİNCİRLEME)
/*
const hamNotlar = [45, 78, 92, 33, 88, 67, 55, 90, 41, 73];

const yeni = hamNotlar.filter((sayi)=> sayi>=50).map((item)=> item+10).map((say)=> say>100 ? say=100 : say).map((num)=>{
    if(num>=90 ) return num = "A"
    else if(num>=80) return num = "B"
    else if(num>=70) return num = "C"
    else if(num>=60) return num = "D"
    else return num = "E"
})

console.log(yeni);*/

//? Palindrome Kontolü
//Bir string'in palindrome (tersten de aynı) olup olmadığını kontrol eden fonksiyon yaz.
/*
const isPalindrome = (message) => {
    const temiz = message.replaceAll(" ", "").toLowerCase(); // ✅ Büyükleri küçült
    const reversed = temiz.split("").reverse().join("");
    
    reversed === temiz 
        ? console.log("palindromdur") 
        : console.log("palindrom degildir");
}

isPalindrome("racecar") // true
isPalindrome("hello")   // false
isPalindrome("A man a plan a canal Panama") // true (boşluk ve büyük harf önemsiz)
*/



//? Soru 2: Array İçinde Tekrar Eden İlk Eleman

//Bir array'de tekrar eden ilk elemanı bulan fonksiyon yaz.
/*
const findFirstDuplicate = (arr) => {
    const gorulenler = [];
    
    return arr.find(eleman => {
        if (gorulenler.includes(eleman)) {
            return true;  // Bulundu!
        }
        gorulenler.push(eleman);
        return false;
    });
}

 console.log(findFirstDuplicate([2, 1, 3, 5, 3, 2]) );
   
console.log(findFirstDuplicate([1, 2, 3, 4]) );// undefined
console.log(findFirstDuplicate([5, 5, 1, 2]))  */     // 5

// bos objekt ile cözüümü
/*
const findFirstDuplicate = (arr) => {
    const gorulenler = {};
    
    for (let eleman of arr) {
        if (gorulenler[eleman]) {
            return eleman;
        }
        gorulenler[eleman] = true;
    }
    
    return undefined;
}
*/

//?Soru 2.5: İlk Tekrar Etmeyen Karakter
//Bir string'de ilk tekrar etmeyen karakteri bulan fonksiyon yaz.
/*
const findFirstUnique = (metin) => {

    const sayilar= {};

     // 1. DÖNGÜ: SAY
    for (let char of metin) {
        sayilar[char] = (sayilar[char] || 0) + 1;
    }
    
    // 2. DÖNGÜ: BUL
    for (let char of metin) {
        if (sayilar[char] === 1) {
            return char;
        }
    }

return undefined;
}

console.log(findFirstUnique("aabbcde"));*/

//? Soru 2.6: En Çok Tekrar Eden Karakter
/*
const findMostFrequent = (metin) => {

    const sayilar = {};

    for (let char of metin){
        sayilar[char] = (sayilar[char] || 0) + 1;
    }

    let maxChar = metin[0];  // İlk karakteri al
    let maxCount = sayilar[metin[0]];  // Onun sayısını al
    
    for(let char of metin){
        if(sayilar[char] > maxCount) {
            maxCount = sayilar[char];
            maxChar = char;
        }
    }

    return maxChar;

}

console.log(findMostFrequent("aaabbc"))  // "a" */

//! Objektlerle ilgili basit sorular
//* En basit object sorusu: Key'leri bul
/*const person = {name: "Ali", age: 20};

console.log(Object.keys(person));
console.log(Object.values(person));


for (let key in person) {
    console.log(key);
    console.log(person[key]); 
}

// VEYA
Object.values(person).forEach(value => {
    console.log(value);         // "Ali", 20
});*/


//* Objedeki Tüm KEY'leri Array Olarak Döndür
/*
const person  = {name: "Ali", surname: "Davut",  age: 20};

console.log(Object.keys(person));

const anahtar = [];

for( let key in person){
    anahtar.push(key);
    // console.log(key); 
}

console.log(anahtar);
*/


//*  objedeki Tüm VALUE'ları Array Olarak Döndür                                                                                     Soru 4: Objedeki Tüm VALUE'ları Array Olarak Döndür
/*
const getValues = (obj) => {
    // return Object.values(obj)
    let dizi = [];
    for(let key in obj){
        dizi.push(obj[key]);
    }
     return dizi
}

console.log(getValues({name: "Ayşe", age: 28, city: "İzmir"}));
// Beklenen: ["Ayşe", 28, "İzmir"]

// console.log(getValues({a: 10, b: 20, c: 30}));
// Beklenen: [10, 20, 30]
*/

//* Soru 5: İki Objeyi Birleştir (Object Merge)
// İki objeyi birleştiren fonksiyon yaz. 
// Eğer aynı key varsa, ikinci objenin değeri öncelikli olsun.

/*
const mergeObjects = (obj1, obj2) => {
    const yeniObje = {};
   for (let keys in obj1){
       yeniObje[keys] = obj1[keys]; 
   }
   for (let keys in obj2){
       yeniObje[keys] = obj2[keys]; 
   }
   return yeniObje;
}

// altrenatif
const mergeObjects2 = (obj1, obj2) => ({...obj1, ...obj2});

console.log(mergeObjects(
    {name: "Ahmet", age: 25, city: "İstanbul"},
    {age: 30, job: "Developer"}
));
// Beklenen: {name: "Ahmet", age: 30, city: "İstanbul", job: "Developer"}

console.log(mergeObjects(
    {a: 1, b: 2},
    {b: 3, c: 4}
));
// Beklenen: {a: 1, b: 3, c: 4}

*/

//? Soru 6: Obje İçinde Belirli Bir Key Var mı?

 //Bir obje içinde belirli bir key'in olup olmadığını kontrol eden fonksiyon yaz.
 //true veya false döndürsün.
/*
const hasKey = (obj, key) => {
    
    for(let a in obj){
        if (a === key){
            return true;
        }
        
    }

    return false;
}

console.log(hasKey({name: "Ali", age: 20}, "name"));  // true
console.log(hasKey({name: "Ali", age: 20}, "city"));  // false
console.log(hasKey({a: 1, b: 2, c: 3}, "b"));         // true
console.log(hasKey({a: 1, b: 2, c: 3}, "d"));         // false
*/
/*
//? Soru 7: Objedeki Değerlerin Toplamını Bul
//* Bir objenin tüm sayısal değerlerini toplayan fonksiyon yaz.

const sumValues = (obj) => {

    let yeniDizi = Object.values(obj);
    
    
    return yeniDizi.reduce((acc,num) =>  acc + num, 0 )
}

console.log(sumValues({a: 10, b: 20, c: 30}));           // 60
console.log(sumValues({x: 5, y: 15, z: 25}));            // 45
console.log(sumValues({price: 100, tax: 18, fee: 12}));  // 130
*/

//! İÇ İÇE OBJELER (NESTED OBJECTS) + DESTRUCTURING

//? Soru 8: Nested Object'ten Değer Çıkar
// İç içe bir objeden belirli değerleri destructuring ile çıkar.
/*
const person = {
    name: "Ahmet",
    age: 30,
    address: {
        city: "İstanbul",
        district: "Kadıköy",
        zipCode: 34710
    },
    job: {
        title: "Developer",
        salary: 15000
    }
};
*/
// GÖREV 1: name, city ve salary'yi destructuring ile çıkar
 /*
 const { name, address: { city }, job: { salary } } = person;
 console.log(city);
 console.log(salary);
 */
 
 

// GÖREV 2: Bir fonksiyon yaz: getPersonInfo(person)
// Destructuring kullanarak şunu döndürsün:
// "Ahmet, İstanbul'da yaşıyor ve Developer olarak çalışıyor"
/*
const getPersonInfo = (person) => {
   const {name, address: { city }, job: { title } } = person;
   return `${name} ${city}'da yasiyor ve ${title} olarak calisiyor`;
   
}

console.log(getPersonInfo(person));
*/

//? Soru 9: Array of Objects + Destructuring
// Birden fazla kişinin olduğu bir array'den belirli bilgileri çıkar.

const people = [
    { name: "Ali", age: 25, city: "Ankara" },
    { name: "Ayşe", age: 30, city: "İzmir" },
    { name: "Mehmet", age: 28, city: "İstanbul" }
];
/*
// GÖREV 1: Her kişi için sadece isim ve şehri yazdıran fonksiyon yaz
// Destructuring kullan!

const printNameAndCity = (people) => {

    people.forEach(element => {
        const { name, city } = element;
        console.log(`${name} - ${city}`);
    });


    // Kodunu buraya yaz
    // İpucu: forEach + destructuring
}

// daha kisa version
people.forEach(({ name, city }) => {
    console.log(`${name} - ${city}`);
});

printNameAndCity(people);
// Beklenen çıktı:
// Ali - Ankara
// Ayşe - İzmir
// Mehmet - İstanbul
*/

// GÖREV 2: 25 yaşından büyük olanların isimlerini array olarak döndür
// filter + map + destructuring kullan



/*

const getAdultNames = (people) => {
    return people
        .filter(({ age }) => age > 25)
        .map(({ name }) => name);
}

console.log(getAdultNames(people));*/


// Beklenen: ["Ayşe", "Mehmet"]*/

//? Soru 10: people array'indeki her kişinin yaşını 5 artır ve yeni bir array döndür. Orijinal array değişmemeli.

const yeni = people.map((person)=>({ ...person, age: person.age+5  }));
console.log(yeni);


