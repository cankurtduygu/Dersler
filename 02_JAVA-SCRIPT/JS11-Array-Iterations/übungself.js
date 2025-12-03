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

const fiyatlar = [100, 250, 75, 500, 180];

// Yöntem 1: En kısa
const indirimli = fiyatlar.map(fiyat => fiyat * 0.8);

// Yöntem 2: Açıklayıcı
const indirimli2 = fiyatlar.map(fiyat => {
    return fiyat - (fiyat * 0.2);
});

console.log(`Orijinal fiyatlar: ${fiyatlar}`);
console.log(`İndirimli fiyatlar: ${indirimli}`);






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

