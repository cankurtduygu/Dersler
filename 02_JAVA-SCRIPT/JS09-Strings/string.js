// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");
//! klasik yöntemle tanımlanan string ilkel (primitive) dir

const str1 = "clarusway";
const str2 = "hello";
const str3 = "all the world";
console.log(str2 + str3, typeof (str1 + str2));
console.log(str2[4]);
console.log(str2[str2.length - 1]);

//! String constructor ile tanımlanan String non-primitive dir

const str4 = new String("yeni bir String");

console.log(typeof str4);

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

//* -------------------------------------------------------------------------- */
//*                             Escape karakterleri                            */
//* -------------------------------------------------------------------------- */
// \ işareti ile kullanılır
// \n new line - Yeni bir satıra geçmek için kullanılır
// \t tab 8 karakterlik boşluk bırakır

const parag = "\tMerhaba  DE11 sakinleri,\nGününüz güzel geçsin";
console.log(parag);
const parag2 = `   Merhaba  DE11 sakinleri,
Gününüz güzel geçsin`;
console.log(parag2);

//*** INDEXLEME */

let course = "Clarusway";
console.log(course[0]);
console.log(course[3]);
console.log(course[course.length - 1]);
course = "ipek";
course[0] = "V";
console.log(course);
// Stringler,primitive bir tür olduğu için parça olarak değiştiremezsiniz
// immutable - not mutable

/* -------------------------------------------------------------------------- */
//!                        STRING METHODS AND PROPERTIES                      */
/* -------------------------------------------------------------------------- */

//! ************STRING PROPERTY (Özellikleri) ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur

//? lenght
//? prototype

console.log(course.length); //4

// course = "ipek";

// course kelimesinin harflerini tek tek yazdır

for (let i = 0; i < course.length; i++) {
  console.log(course[i]);
}

const emoji = "🎃";
console.log(emoji.length); //2 emojiler 2 karakter sayılır

//! ************STRING METHODS ************
// String metodları () kullanılır.
//? Chaining yani zincirleme olarak birden fazla metod birlikte kullanılabilir.
//! -------------------------------------------------------------------------- */
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.

// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================
const s1 = "hello";
const s2 = "world";

console.log(s1.concat(s2));
console.log(s1);

const s3 = s1.concat(s2);
console.log(s3);

//! orjinal değer  değişmez, assigning ile kalıcı değiştirebilirsiniz

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================

const myName = "Ashley Miller";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

console.log(myName.toLocaleUpperCase("tr"));
//! toLocaleUpperCase("tr")= Türkçe büyüt demek  boş bırakınca  eng (ingilizce) karakterlere uygun büyütebiliriz

//?örnek

const esitMi = (str1, str2) =>
  str1 == str2.toLocaleUpperCase("tr") ? "eşittir" : "eşit değildir";

console.log(esitMi("İSMAİL", "ismail"));

// *=========================================================
// *   charAt()
// *=========================================================
const s4 = "primitive \n veri tiplerinin \nproperty ya \n da methodu olmaz.";

console.log(s4);
console.log(s4.charAt(5));//t
console.log(s4.charAt(9));//" "
console.log(s4.charAt());//p index yazmazsanız ilk karakteri döndürür
console.log(s4.charAt(s4.length-1));//.

// *=========================================================
// *   indexOf()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const kelime1 = "to be or ( be ) not to be, that is The questions.";
console.log(kelime1.indexOf("be"));//3
console.log(kelime1.lastIndexOf("be"));//23
console.log(kelime1.indexOf("the"));//-1 olmayan karakter için -1 döndürür
console.log(kelime1.indexOf("TO BE"));//-1
console.log(kelime1.indexOf(" "));//2
console.log(kelime1.indexOf("be",4));//11
console.log(kelime1.indexOf("be",kelime1.indexOf("be")+1));//11
console.log(kelime1.indexOf("be"));
console.log(kelime1[kelime1.indexOf("b")].toUpperCase());




// *=========================================================
// *   search()  
// *=========================================================
const kelime3 = "tA, be or not to be, 5 that is The questions.";

console.log(kelime3.search(/[.]/));//44
console.log(kelime3.indexOf("."));//44

//! REGEX-REGULAR EXPRESSION

console.log(kelime3.search(/[A-Z]/));//1
console.log(kelime3[kelime3.search(/[A-Z]/)].toLowerCase());


console.log(kelime3.search(/[a-z]/));//0
console.log(kelime3.search(/[0-9]/));//21
console.log(kelime3.search(/[^0-9a-zA-Z]/));//2 virgül için
console.log(kelime3.search(/[aeıiouöü]/));//5
console.log(kelime3.search(/[aeıiouöü]/i));//1 i harfi incase-sensitive, büyük küçük harfe duyarsız olarak search et dedik

//* ----------------------------------------------------------
//* startsWith(), endsWith() -- case sensitive
//* ----------------------------------------------------------

const kelime4="Salına salına sinsice olurum you to!"

console.log(kelime4.startsWith("sa"));//false
console.log(kelime4.startsWith("Sa"));//true
console.log(kelime4.startsWith("Salına"));//true
console.log(kelime4.startsWith("sa",7));//true 7.karakterden bakmaya başla

console.log(kelime4.endsWith("!"));
console.log(kelime4.endsWith("lına",13));//bitişteki sayı dahilkabul edilmez, yani 13 e kadar demek en son 12. karakteri al demektir. dolayısıyla Salına salına=true

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable (değiştirmez)
//* ----------------------------------------------------------

let oku="Oku Johny gibi saf olma saf olma saf olma"


oku=oku.replace("saf olma","basarılı ol" )
console.log(oku);

console.log(oku.replace(/SAF/i, "fakir")); //incase-sensitive

console.log(oku.replace(/Saf olma/gi, "zengin ol "));//bütün saf olma ları büyük-küçük harfe duyarsız seçmek ve değiştirmek istiyorsak gi yazmalıyız

//*replaceAll()

let degistir = "Oku Johny gibi saf olma saf olma SAF olma";

console.log(degistir.replaceAll("saf olma", "akıllı ol"));


// *=========================================================
// *   includes()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const kelime="to be or not to be, that is The questions."


console.log(kelime.includes("TO BE"));//FALSE
console.log(kelime.includes("to be"));//true
console.log(kelime.includes("quest"));//true
console.log(kelime.includes(" "));//true
console.log(kelime.includes(""));//true
console.log(kelime.includes("to be",14));//false
console.log(kelime.toUpperCase().includes("TO BE"));//true


// includes() sorgusu bize true false cevabı döndürür


//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//* ----------------------------------------------------------

const veysel="UZUN İNCE BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE";

console.log(veysel.slice(10));
console.log(veysel.slice(17,21));//DAYI
console.log(veysel.substring(17,21));//DAYI

console.log(veysel.slice(-10));//UNDUZ GECE sondan -1 indexle başlar

console.log(veysel.slice(-11,-6));//GUNDU

console.log(veysel.substring(-10));//Substring de - index çalışmaz

console.log(veysel.substring(veysel.length-4));//GECE

//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
// //* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------


const tarkan="Gel gündüzle gece olalım"

console.log(tarkan.split());//şart belirtmezsek tek elemanlı bir diziye çevirir

console.log(tarkan.split(" "));//boşluklardan ayırıp diziye çevir
console.log(tarkan.split(""));//hiçliklerden ayırarak dizi yapma
console.log(tarkan.replaceAll(" ","").split(""));

console.log(tarkan.split("e"));
console.log(tarkan.split("e",3));//e lerden ayır ilk 3 elemanı al

console.log(tarkan);

let months =
  "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec";

console.log(months.split("/"));

let date="1.12.2025"

console.log(date.split("."));

console.log(`bu gün ayın ${date.split(".")[0]} i`);



//************* */
//! join ve reverse metodları string metodu değildir, Array metodlarıdır. Ama split ile çok kullanıbilir.

const sarki="batsın bu dünya bitsin bu rüya"

console.log(sarki.split(" ").reverse().join(" "));
// önce string i kelime kelime ayırıp dizi yaptım, sonra dizilerde geçerli reverse() metoduyla diziyi ters çevirdim, sonra dizileri string e çeviren join()
//  metodunu kullandım. join(" "), dizinin her elemanını boşluklu string yap demek



console.log(sarki.split(""));
console.log(sarki.split("").reverse());
console.log(sarki.split("").reverse().join(""));

//* ----------------------------------------------------------
//*  trim(); string in başındaki ve sonundaki boşlukları siler
//* ----------------------------------------------------------
const ramazan = "     Hos geldin ya Sehr i Ramazan      ";

console.log(ramazan);
console.log(ramazan.length);//39

console.log(ramazan.trim());
console.log(ramazan.trim().length);



//*chaining
let abc = "         Clarusway Full Stack";



let ABC=abc.trim().slice(0,9).toUpperCase()

console.log(ABC);//CLARUSWAY


//*ÖRNEK

let selamla = "ey edip adanada pide ye"; 
// cümlesinin polindrom olduğunu ispatlayın

let tersten=selamla.split("").reverse().join("")

if(selamla==tersten){

    console.log(selamla, "cümlesi polindrom dur");
    
}else console.log(selamla, "cümlesi polindrom değildir");

