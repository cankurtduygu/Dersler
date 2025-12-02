// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");

//!klasik yöntemle tanimlanan string ilkel (primitive) dir.

const str1 = "clarusway";
const str2 = "hello";
const str3 = "all the world";

//* String karakter sayisi: length
console.log(str1.length); // 10

//* Belirli bir karaktere erişme: charAt() ve [] kullanımı
console.log(str1.charAt(0));
console.log(str1[0]);

//* Büyük harf yapma: toUpperCase()
console.log(str2.toUpperCase()); // HELLO
console.log(str2); // hello
//* Küçük harf yapma: toLowerCase()
console.log(str2.toLowerCase()); // hello
console.log(str2); // hello 
//* Belirli bir karakterin indexini bulma: indexOf()
console.log(str3.indexOf("the")); // 4
console.log(str3.indexOf("world")); // 8
console.log(str3.indexOf("o")); // 6
console.log(str3.indexOf("z")); // -1 (bulamazsa -1 döner)      
//* Belirli bir karakterin son indexini bulma: lastIndexOf()
console.log(str3.lastIndexOf("l")); // 10
//* Belirli bir karakterin var olup olmadığını kontrol etme: includes()
console.log(str3.includes("world")); // true        
console.log(str3.includes("World")); // false (büyük küçük harf duyarlıdır)
//* Belirli bir karakterle başlayıp başlamadığını kontrol etme: startsWith()
console.log(str3.startsWith("all")); // true
console.log(str3.startsWith("All")); // false           
//* Belirli bir karakterle bitip bitmediğini kontrol etme: endsWith()
console.log(str3.endsWith("world")); // true
console.log(str3.endsWith("World")); // false
//* Belirli bir karakteri değiştirme: replace()
console.log(str3.replace("world", "universe")); // all the universe             
//* Belirli bir karaktere göre bölme: split()
console.log(str3.split(" ")); // [ 'all', 'the', 'world' ]
console.log(str3.split(""));    // [ 'a', 'l', 'l', ' ', 't', 'h', 'e', ' ', 'w', 'o', 'r', 'l', 'd' ]
//* Belirli bir kısmı alma: slice()
console.log(str3.slice(4, 7)); // the
console.log(str3.slice(8)); // world
//* Boşlukları temizleme: trim()
const str4 = "   Hello World!   ";
console.log(str4.trim()); // "Hello World!"
console.log(str4.trimStart()); // "Hello World!   "
console.log(str4.trimEnd()); // "   Hello World!"
//* Tekrar etme: repeat()
const str5 = "Hi! ";
console.log(str5.repeat(3)); // Hi! Hi! Hi!                 
//* Alt stringi kontrol etme: substring()
console.log(str3.substring(4, 7)); // the
console.log(str3.substring(8)); // world            
//* Karakter kodunu alma: charCodeAt()
console.log(str2.charCodeAt(0)); // 104 (h'nin karakter kodu)
console.log(str2.charCodeAt(1)); // 101 (e'nin karakter kodu)
//* Karakterden karakter kodu alma: fromCharCode()
console.log(String.fromCharCode(104, 101, 108, 108, 111)); // hello
//* Tüm karakterleri diziye dönüştürme: Array.from()
console.log(Array.from(str2)); // [ 'h', 'e', 'l', 'l', 'o' ]
//* Template literals (şablon dizeleri)
const name = "John";
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`); // My name is John and I am 30 years old.
//* String concatenation (birleştirme)
const greet1 = "Hello, ";
const greet2 = "world!";
console.log(greet1 + greet2); // Hello, world!
console.log(greet1.concat(greet2)); // Hello, world!        
//* Arama yapma: search()
console.log(str3.search("the"));
console.log(str3.search(/WORLD/i)); // büyük küçük harf duyarsız arama
//* Tüm eşleşmeleri değiştirme: replaceAll()
const str6 = "The cat sat on the mat.";
console.log(str6.replaceAll("the", "a"));
console.log(str6.replaceAll(/the/gi, "a")); // büyük küçük harf duyarsız
//* Karakter kodunu alma: codePointAt()
console.log(str2.codePointAt(0)); // 104
console.log(str2.codePointAt(1)); // 101            
//* Karakterden karakter kodu alma: fromCodePoint()
console.log(String.fromCodePoint(104, 101, 108, 108, 111)); // hello
//* Büyük/küçük harf duyarsız karşılaştırma: localeCompare()
console.log(str2.localeCompare("Hello", undefined, { sensitivity: 'base' })); // 0 (eşit)
console.log(str2.localeCompare("hello")); // 0 (eşit)                   
//* Şablon dizeleri ile çok satırlı string oluşturma
const multiLineStr = `This is line 1.
This is line 2.
This is line 3.`;
console.log(multiLineStr);
//* String başına veya sonuna ekleme: padStart() ve padEnd()
const str7 = "5";
console.log(str7.padStart(3, "0")); // 005
console.log(str7.padEnd(3, "0"));   // 500              
//* String normalleştirme: normalize()
const str8 = "café";
const str9 = "cafe\u0301";

console.log(str8 === str9); // false
console.log(str8.normalize() === str9.normalize()); // true
//* String iterator kullanımı
const str10 = "hello";
const iterator = str10[Symbol.iterator]();

for (const char of iterator) {
  console.log(char);
}           
//* String prototipine yeni bir metot ekleme
String.prototype.reverse = function() {
  return this.split("").reverse().join("");
};

console.log(str2.reverse()); // olleh   
//* String raw kullanımı
const rawStr = String.raw`C:\Development\profile\aboutme.html`;
console.log(rawStr); // C:\Development\profile\aboutme.html
//* String metot zincirleme
const str11 = "   JavaScript is Awesome!   ";
const result = str11.trim().toLowerCase().replace("awesome", "great").split(" ");
console.log(result); // [ 'javascript', 'is', 'great!' ]        

//* Belirli bir karakterin tüm indexlerini bulma
function getAllIndexes(str, char) {
  const indexes = [];       
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indexes.push(i);
        }       
    }
    return indexes;
}           
console.log(getAllIndexes("hello world", "o")); // [4, 7]
console.log(getAllIndexes("clarusway", "a")); // [2, 6]
//* Belirli bir karakterin kaç kez geçtiğini sayma
function countOccurrences(str, char) {
  let count = 0;        
    for (let i = 0; i < str.length; i++) {  
        if (str[i] === char) {
            count++;
        }           
    }
    return count;
}   
console.log(countOccurrences("hello world", "o")); // 2
console.log(countOccurrences("clarusway", "a")); // 2
//* Palindrome kontrolü
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}       
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false                                                                                                        
//* İlk harfleri büyük yapma
function capitalizeWords(str) {
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}
console.log(capitalizeWords("hello world from clarusway")); // Hello World From Clarusway
console.log(capitalizeWords("JAVA script LANGUAGE")); // Java Script Language
//* Belirli bir karakterle başlayan kelimeleri bulma
function findWordsStartingWith(str, char) {
    const words = str.split(" ");   
    return words.filter(word => word.startsWith(char));
}
console.log(findWordsStartingWith("hello world from clarusway", "c")); // [ 'clarusway' ]
console.log(findWordsStartingWith("apple banana apricot", "a")); // [ 'apple', 'apricot' ]
//* Belirli bir karakterle biten kelimeleri bulma
function findWordsEndingWith(str, char) {
    const words = str.split(" ");   
    return words.filter(word => word.endsWith(char));
}   

console.log(findWordsEndingWith("hello world from clarusway", "y")); // [ 'clarusway' ]
console.log(findWordsEndingWith("apple banana apricot", "a")); // [ 'banana' ]
//* Ters çevirme
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // olleh
console.log(reverseString("clarusway")); // yawsuralc
//* Belirli bir karakterin tüm indexlerini bulma (RegExp kullanımı)
function getAllIndexesRegExp(str, char) {
  const indexes = [];
    const regex = new RegExp(char, "g");
    let match;  
    while ((match = regex.exec(str)) !== null) {
        indexes.push(match.index);
    }   
    return indexes;
}   
console.log(getAllIndexesRegExp("hello world", "o")); // [4, 7]
console.log(getAllIndexesRegExp("clarusway", "a")); // [2, 6]
//* Belirli bir karakterin kaç kez geçtiğini sayma (RegExp kullanımı)
function countOccurrencesRegExp(str, char) {
  const regex = new RegExp(char, "g");          
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}
console.log(countOccurrencesRegExp("hello world", "o")); // 2
console.log(countOccurrencesRegExp("clarusway", "a")); // 2
//* Palindrome kontrolü (RegExp kullanımı)
function isPalindromeRegExp(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
console.log(isPalindromeRegExp("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeRegExp("hello")); // false              
//* İlk harfleri büyük yapma (RegExp kullanımı)
function capitalizeWordsRegExp(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase()).toLowerCase();
} 
console.log(capitalizeWordsRegExp("hello world from clarusway")); // Hello World From Clarusway
console.log(capitalizeWordsRegExp("JAVA script LANGUAGE")); // Java Script Language
//* Belirli bir karakterle başlayan kelimeleri bulma (RegExp kullanımı)
function findWordsStartingWithRegExp(str, char) {   
    const regex = new RegExp(`\\b${char}\\w*`, "g");
    return str.match(regex) || [];
}
console.log(findWordsStartingWithRegExp("hello world from clarusway", "c")); // [ 'clarusway' ]
console.log(findWordsStartingWithRegExp("apple banana apricot", "a")); // [ 'apple', 'apricot' ]
//* Belirli bir karakterle biten kelimeleri bulma (RegExp kullanımı)
function findWordsEndingWithRegExp(str, char) { 
    const regex = new RegExp(`\\b\\w*${char}\\b`, "g");
    return str.match(regex) || [];
}
console.log(findWordsEndingWithRegExp("hello world from clarusway", "y")); // [ 'clarusway' ]
console.log(findWordsEndingWithRegExp("apple banana apricot", "a")); // [ 'banana' ]
//* -------------------------------------------------------------------------- */
//*                             Escape karakterleri                            */
//* -------------------------------------------------------------------------- */

// \ işareti ile kullanılır 
// \n new line - Yeni bir satıra geçmek için kullanılır 
// \t tab 8 karakterlik boşluk bırakır    
console.log("Hello\nWorld");
console.log("Hello\tWorld");
console.log("Hello\\World");      
console.log("He said, \"Hello World!\"");
console.log('It\'s a beautiful day!');
console.log("First Line\rSecond Line"); // Carriage return
console.log("Column1\tColumn2\tColumn3");
console.log("This is a backslash: \\");
//*****INDEXLEME*********/
let course ="Clarusway"
console.log(course[0]);   
console.log(course.charAt(0));
console.log(course[4]);
console.log(course.charAt(4));
console.log(course[course.length - 1]);
console.log(course.charAt(course.length - 1));
console.log(course.length);

// String immutability (değiştirilemezlik)
course[0] = "B";
console.log(course); // Clarusway 
course = "B" + course.slice(1);
console.log(course); // Blarusway

// Örnek: Bir stringin tersini yazdırma
let str = "Clarusway";
let reversedStr = ""; 
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}   
console.log(reversedStr); // yawsuralC
// Örnek: Bir stringteki sesli harfleri sayma
let sentence = "Hello World from Clarusway";
let vowelCount = 0;
const vowels = "aeiouAEIOU";
for (let i = 0; i < sentence.length; i++) {
  if (vowels.includes(sentence[i])) {
    vowelCount++;
  }   
}
console.log(vowelCount); // 8
/* -------------------------------------------------------------------------- */
//!                        STRING METHODS AND PROPERTIES                      */
/* -------------------------------------------------------------------------- */    
//! ************STRING PROPERTY (Özellikleri) ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur
//? length
//? prototype 
let message = "Clarusway";
console.log(message.length); // 10
console.log(String.prototype);
//! ************STRING METHODS (Yöntemleri) ************
// Method bir stringin fonksiyonudur bu nedenle parantez açıp kapatmaya gerek vardır
//? toUpperCase()  toLowerCase()
console.log(message.toUpperCase()); // CLARUSWAY
console.log(message.toLowerCase()); // clarusway
//? trim() trimStart() trimEnd()
let message2 = "   Hello World!   ";      

console.log(message2.trim()); // "Hello World!"
console.log(message2.trimStart()); // "Hello World!   "
console.log(message2.trimEnd());  
// "   Hello World!"
//? concat()
let strA = "Hello, "; 
let strB = "world!";
let strC = strA.concat(strB);
console.log(strC);  
// Hello, world!
//? split()
let message3 = "Hello World from Clarusway";    
let words = message3.split(" ");
console.log(words);
// [ 'Hello', 'World', 'from', 'Clarusway' ]  
//? replace()
let message4 = "Hello World";
let newMessage = message4.replace("World", "Universe");
console.log(newMessage); 
// Hello Universe
//? slice()
let message5 = "Clarusway";
let subMessage = message5.slice(0, 6);  
console.log(subMessage);
// Clarus
//? indexOf() lastIndexOf()
let message6 = "Hello World from Clarusway";  
console.log(message6.indexOf("o")); // 4
console.log(message6.lastIndexOf("o")); // 7
//? includes()
let message7 = "Hello World from Clarusway";  
console.log(message7.includes("World"));
// true
console.log(message7.includes("world"));  
// false
//? startsWith() endsWith()
let message8 = "Hello World from Clarusway";
console.log(message8.startsWith("Hello")); // true
console.log(message8.endsWith("Clarusway")); // true  
//? charAt() charCodeAt()
let message9 = "Clarusway";

console.log(message9.charAt(0)); // C
console.log(message9.charCodeAt(0)); // 67 (C'nin Unicode değeri)   
//? fromCharCode()
console.log(String.fromCharCode(67, 108, 97, 114, 117, 115, 119, 97, 121)); 
// Clarusway    
//? repeat()
let message10 = "Hi! ";
console.log(message10.repeat(3)); 
// Hi! Hi! Hi!    
//? search()
let message11 = "Hello World from Clarusway";   
console.log(message11.search("World")); // 6
console.log(message11.search(/world/i));  
// 6 (büyük küçük harf duyarsız)
//? substring()
let message12 = "Clarusway";      
console.log(message12.substring(0, 6)); // Clarus
//? toLocaleLowerCase() toLocaleUpperCase()
let message13 = "Clarusway";      
console.log(message13.toLocaleUpperCase()); // CLARUSWAY
console.log(message13.toLocaleLowerCase()); // clarusway
//? toString()
let message14 = new String("Clarusway"); 
console.log(message14.toString());
// Clarusway
//? valueOf()
let message15 = new String("Clarusway"); 
console.log(message15.valueOf()); 
// Clarusway
// *=========================================================
// *               concat() immutable=değiştirmez
// *========================================================= 
let strX1 = "Hello, ";
let strX2 = "world!";
let strX3 = strX1.concat(strX2);
console.log(strX3); 
// Hello, world!
console.log(strX1); 
// Hello, 
// strX1 değişmedi  
console.log(strX2);
// world!
// strX2 değişmedi  
// concat() metodu orijinal stringleri değiştirmez, yeni bir string döner.
// Benzer şekilde diğer string metodları da orijinal stringi değiştirmez, yeni bir string döner.
// Örnek:
let originalStr = "clarusway";
let upperStr = originalStr.toUpperCase();
console.log(upperStr);
// CLARUSWAY
console.log(originalStr); 
// clarusway
// originalStr değişmedi
// Bu nedenle string metodları kullanılırken sonucu bir değişkene atamak önemlidir.
// Örnek:
let messageX = "hello world";
messageX = messageX.replace("world", "universe");
console.log(messageX); 
// hello universe
// replace() orijinal stringi değiştirmez, yeni bir string döner.
// Bu nedenle sonucu tekrar messageX'e atadık.
// !=========================================================
//! toLocaleUpperCase("tr")= Türkçe büyüt demek  boş bırakınca  eng (ingilizce) karakterlere uygun büyütebiliriz
//! =========================================================
const myName="John"
console.log(myName.toLocaleUpperCase("tr")); // JOHN
console.log(myName.toLocaleUpperCase());    // JOHN
console.log("iğdır".toLocaleUpperCase("tr")); // İĞDIR
console.log("iğdır".toLocaleUpperCase());    // IĞDIR
console.log("IĞDIR".toLocaleLowerCase("tr")); // ığdır
console.log("IĞDIR".toLocaleLowerCase());    // ığdır
console.log("İĞDIR".toLocaleLowerCase("tr")); // iğdır
console.log("İĞDIR".toLocaleLowerCase());    // iğdır

console.log("istanbul".toUpperCase()); // ISTANBUL
console.log("istanbul".toLowerCase()); // istanbul
console.log("İSTANBUL".toLowerCase()); // i̇stanbul
console.log("İSTANBUL".toUpperCase()); // İSTANBUL  
console.log("Istanbul".toUpperCase()); // ISTANBUL
console.log("Istanbul".toLowerCase()); // istanbul

// *=========================================================
// *   indexOf()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const kelime1 = "to be or not to ( be ), that is The questions.";
console.log(kelime1.indexOf("be")); // 3
console.log(kelime1.lastIndexOf("be"));
console.log(kelime1.indexOf("The")); // 21
console.log(kelime1.indexOf("the")); // -1  büyük küçük harf duyarlı olduğu için bulamadı
//3 4 tane be varsa 2.beyi bulmak
console.log(kelime1.indexOf("be", 4)); // 11
//4 i baska nasil kast edebiliriz
const firstBe = kelime1.indexOf("be");
const secondBe = kelime1.indexOf("be", firstBe + 1);
console.log(secondBe); // 11

// *=========================================================
// *   search()  
// *=========================================================
const kelime3 = "to, be or not to be, 5 that is The questions.";  
console.log(kelime3.search("be")); // 4

//! REGEX - REGULAR expression
console.log(kelime3.search(/BE/i)); // 4  büyük küçük harf duyarsız arama yaptı
//? indexOf() ve search() farkı nedir?
//? indexOf() methodu sadece düz metin aramalarında kullanılır.
//? search() methodu ise regex (düzenli ifadeler) ile arama yapabilir.
//? search() methodu ikinci parametre almaz, oysa indexOf() alır. 
//? search() methodu negatif değer döndüremez, oysa indexOf() döndürebilir.

console.log(kelime3.search(/[.]/));
console.log(kelime3.indexOf("."));
console.log(kelime3.search(/[A-Z]/));
console.log(kelime3[kelime3.search(/[A-Z]/)].toLowerCase());
// HARFLER VE RAKAMLKAR DISINDAKI karakterlere döndürmek istiyorsak
console.log(kelime3.search(/[^a-zA-Z0-9]/));
// boşluk karakterinin indexini bulma
console.log(kelime3.search(/\s/));
// rakam karakterinin indexini bulma
console.log(kelime3.search(/\d/));
// harf karakterinin indexini bulma
console.log(kelime3.search(/[a-z]/i));
// sesli harfleri getirmek
console.log(kelime3.search(/[aeiou]/i)); //i harfi incasesitive demek ,büyük küçük harf duyarsız



//* ----------------------------------------------------------
//* startsWith(), endsWith() -- case sensitive
//* ----------------------------------------------------------

const kelime4="Salına salına  sinsice olurum sana!"
console.log(kelime4.startsWith("S")); // true
console.log(kelime4.startsWith("s")); // false

console.log(kelime4.startsWith("salına", 7)); // true
console.log(kelime4.endsWith("salına", 13)); // true 



console.log(kelime4.endsWith("!")); // true
console.log(kelime4.endsWith("S")); // false      
//? startsWith() ve endsWith() metotları büyük küçük harfe duyarlıdır (case sensitive). 
//? Eğer büyük küçük harfe duyarsız (case insensitive) kontrol yapmak isterseniz,
//? stringi önce toLowerCase() veya toUpperCase() ile dönüştürüp sonra kontrol edebilirsiniz.
console.log(kelime4.toLowerCase().startsWith("s")); // true
console.log(kelime4.toUpperCase().endsWith("!")); // true


//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable (değiştirmez)
//* ----------------------------------------------------------

let oku="Oku Johny gibi saf olma saf olma saf olma";
let yeniOku=oku.replace("saf","kurnaz");
console.log(yeniOku);
//bütün saf olmaları değiştirmek istersek
yeniOku=oku.replace(/saf/gi,"kurnaz");
console.log(yeniOku);

yeniOku=oku.replace(/olma/gi,"ol");
console.log(yeniOku);

// *=========================================================
// *   includes()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const kelime="to be or not to be, that is The questions."

//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//* ----------------------------------------------------------

const veysel="UZUN İNCE BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE";
console.log(veysel.slice(10));
console.log(veysel.slice(17,21));
console.log(veysel.substring(10));
console.log(veysel.substring(17,21));
//? slice() ve substring() metotları benzer şekilde çalışır, ancak bazı farklar vardır:
//? 1. slice() negatif indeksleri destekler, substring() desteklemez.
//? 2. slice()'da beginIndex endIndex'ten büyükse boş string döner, substring() ise indeksleri değiştirir.
//substring ile GECE kisimiyni alalim
console.log(veysel.substring(veysel.length - 4));
console.log(veysel.slice(-4));
//? Genellikle slice() metodu daha esnek olduğu için tercih edilir. Ancak her iki metot da yaygın olarak kullanılır.

//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
// //* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------


const tarkan="Gel gündüzle gece olalım";
console.log(tarkan.split(" "));
console.log(tarkan.split("")); //her karakteri ayırır
console.log(tarkan.split(" ",3)); //3 elemanlı dizi döndürür
console.log(tarkan.split("e")); // e lere göre ayırır
console.log(tarkan.split("x")); // x yoksa orjinal stringi tek elemanlı dizi olarak döndürür
//? split() metodu bir stringi belirli bir ayırıcıya (seperator) göre böler ve bir dizi (array) döner.
//? Ayırıcı belirtilmezse tüm string tek elemanlı bir dizi olarak döner.
//? Limit parametresi, döndürülecek maksimum dizi elemanı sayısını belirler.
//? split() metodu orijinal stringi değiştirmez, yeni bir dizi döner.
// Örnek: Bir cümledeki kelimeleri ters sırayla yazdırma
const cumle = "JavaScript is a versatile language";
const kelimeler = cumle.split(" ");
const tersKelimeler = kelimeler.reverse();
console.log(tersKelimeler.join(" ")); // language versatile a is JavaScript

let date = "01.12.2025";
//ben 01 i alip yazdirmak istyiroum nasil
console.log(date.split(".")[0]);


//**********************/

const sarki="batsin bu dünya bitsin bu rüya";
const kelimelerDizisi=sarki.split(" ").reverse().join(" ");
console.log(kelimelerDizisi);
//kelimleri tersine harf harf tersine yapmak istersek
const harfTers=sarki.split("").reverse().join("");
console.log(harfTers);

//* ----------------------------------------------------------
//*  trim();
//* ----------------------------------------------------------
const cumle2="     Hos geldin ya Sehr i Ramazan    ";
console.log(cumle2.trim());
console.log(cumle2.trimStart());
console.log(cumle2.trimEnd());  
//? trim() metodu bir stringin başındaki ve sonundaki boşlukları (whitespace) kaldırır.
//? trimStart() metodu sadece baştaki boşlukları kaldırır.
//? trimEnd() metodu sadece sondaki boşlukları kaldırır.
//? Bu metodlar orijinal stringi değiştirmez, yeni bir string döner.

//*Chaining
let abc = "         Clarusway Full Stack";

//clarusway kelimesini sec



let sonuc = abc.trim().slice(0,abc.trim().indexOf("y")+1).toUpperCase();
console.log(sonuc);
// FULL STACK kelimesini sec
let sonuc2 = abc.trim().slice(abc.trim().indexOf("F")).toLowerCase();
console.log(sonuc2);

//*örnek
let selamla = "ey edip adanada pide ye";
//bu cümlenin polimdrom oldugunu ispatlayın
let duz = selamla.replace(/\s/g,"").toLowerCase();
let ters = selamla.replace(/\s/g,"").toLowerCase().split("").reverse().join("");
console.log(duz === ters ? "polimdromdur" : "polimdrom degildir");
