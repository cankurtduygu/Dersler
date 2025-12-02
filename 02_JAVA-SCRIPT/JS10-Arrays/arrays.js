// ?=========================================================
// ?                 Arrays (Diziler)
// ?=========================================================
// ! Array: birden fazla veriyi tek bir değişkende tutmamızı sağlar.

// ! Array Oluşturma Yöntemleri:
// ? 1. Yöntem: Array Literal (Köşeli Parantez) ile Oluşturma
const names = ["Duygu", "Ahmet", "Mehmet", "Ceyda"];
console.log(names);
console.log(typeof names); // object    
// ! Dizilerde typeof operatörü "object" döner.

// ? 2. Yöntem: Array Constructor (Yeni Anahtar Kelimesi ile) Oluşturma
const years = new Array(1990, 1995, 2000, 2005);
console.log(years);
console.log(typeof years); // object

// ! Array İçindeki Elemanlara Erişim (Index ile)
// ! Dizilerde indeksleme 0'dan başlar.
console.log(names[0]); // Duygu
console.log(names[2]); // Mehmet
console.log(years[3]); // 2005

// ! Array Özellikleri ve Metotları
// ! length: Dizinin uzunluğunu (eleman sayısını) verir.
console.log(names.length); // 4
console.log(years.length); // 4
// ! Dizinin son elemanına erişim
console.log(names[names.length - 1]); // Ceyda
console.log(years[years.length - 1]); // 2005

// ! Dizinin İlk Elemanını Büyük Harf Yapma
names[0] = names[0].toUpperCase();
console.log(names); // [ 'DUYGU', 'Ahmet', 'Mehmet', 'Ceyda' ]  
// ! Dizi elemanları string ise string metotları kullanılabilir.

// ! Array Metotları
// ? push(): Dizinin sonuna eleman ekler.
names.push("Ayşe");
console.log(names); // [ 'DUYGU', 'Ahmet', 'Mehmet', 'Ceyda', 'Ayşe' ]
// ? pop(): Dizinin sonundaki elemanı çıkarır.
const removedName = names.pop();
console.log(removedName); // Ayşe
console.log(names); // [ 'DUYGU', 'Ahmet', 'Mehmet', 'Ceyda' ]
// ? unshift(): Dizinin başına eleman ekler.
names.unshift("Fatma");
console.log(names); // [ 'Fatma', 'DUYGU', 'Ahmet', 'Mehmet', 'Ceyda' ] 
// ? shift(): Dizinin başındaki elemanı çıkarır.
const removedFirstName = names.shift();
console.log(removedFirstName); // Fatma
console.log(names); // [ 'DUYGU', 'Ahmet', 'Mehmet', 'Ceyda' ]
// ? indexOf(): Belirtilen elemanın dizindeki indeksini döner. Eleman yoksa -1 döner.
console.log(names.indexOf("Mehmet")); // 2
console.log(names.indexOf("Ali")); // -1
// ? includes(): Belirtilen elemanın dizide olup olmadığını kontrol eder. Boolean döner.
console.log(names.includes("Ceyda")); // true
console.log(names.includes("Ali")); // false
// ? reverse(): Dizinin elemanlarının sırasını tersine çevirir.
names.reverse();
console.log(names); // [ 'Ceyda', 'Mehmet', 'Ahmet', 'DUYGU' ]  
// ? sort(): Dizinin elemanlarını alfabetik veya sayısal olarak sıralar.
years.sort();
console.log(years); // [ 1990, 1995, 2000, 2005 ]
names.sort();
console.log(names); // [ 'Ahmet', 'Ceyda', 'DUYGU', 'Mehmet' ]
// ! Dikkat: sort() metodu sayısal dizilerde beklenmedik sonuçlar verebilir.
const numbers = [3, 1, 4, 2];
numbers.sort();
console.log(numbers); // [ 1, 2, 3, 4 ] (beklenen sonuç gibi görünüyor ancak dikkatli olunmalı)
// ? join(): Dizinin elemanlarını belirtilen ayırıcı ile birleştirir ve string döner.
const joinedNames = names.join(" - ");
console.log(joinedNames); // Ahmet - Ceyda - DUYGU - Mehmet
// ? split(): Bir stringi belirtilen ayırıcıya göre parçalara ayırır ve dizi döner.
const str = "JavaScript,Python,Java,C++";
const langArray = str.split(",");
console.log(langArray); // [ 'JavaScript', 'Python', 'Java', 'C++' ]
// ? concat(): İki veya daha fazla diziyi birleştirir ve yeni bir dizi döner.
const moreNames = ["Ali", "Veli"];
const allNames = names.concat(moreNames);
console.log(allNames); // [ 'Ahmet', 'Ceyda', 'DUYGU', 'Mehmet', 'Ali', 'Veli' ]
// ? slice(): Dizinin belirli bir bölümünü seçer ve yeni bir dizi döner.
const someNames = allNames.slice(1, 4);
console.log(someNames); // [ 'Ceyda', 'DUYGU', 'Mehmet' ]

// ! Dizilerle Çalışırken Dikkat Edilmesi Gerekenler        
// ! Diziler dinamik yapılar olduğundan, eleman ekleme/çıkarma işlemleri dizinin uzunluğunu değiştirir.
// ! Dizilerde indeksleme 0'dan başladığı için son elemana erişim için length - 1 kullanılır.

// ! Dizilerde veri tipleri karışık olabilir, ancak genellikle aynı türde verilerle çalışmak daha düzenli olur. 
// ! Dizilerde metotlar orijinal diziyi değiştirebilir (örneğin, push, pop, shift, unshift, reverse, sort) veya yeni bir dizi dönebilir (örneğin, slice, concat).
// ARAMA METOTLARI:
// ! Dizilerde arama yapmak için indexOf, includes gibi metotlar kullanılır.
// ! Dizilerde döngülerle (for, for...of, forEach) elemanlara tek tek erişim sağlanabilir.

