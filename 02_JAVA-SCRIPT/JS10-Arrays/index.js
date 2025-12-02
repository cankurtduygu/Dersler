/*--------------------------------------- */
//              1.Dizi tanimlama          //
/*--------------------------------------- */

// yontem 1(Literal) - en cok kullanilan yontem
// const ages = [30, 24, 45, 60];
// console.log(ages);


// yontem 2 (Constructor)
// const cars = new Array("BMW", "Toyata", "Mercedes");
// console.log(cars);


// new Array(5) - 5 bosluklu deger dizisi olusturur
// const emptyArray = new Array(5); // 5 elemanli bos dizi
// console.log(emptyArray);
// console.log(emptyArray.length);

/*--------------------------------------- */
//              1.Indexleme ve length     //
/*--------------------------------------- */
// const ages = [30, 24, 45, 60];
// console.log(ages[0]);
// console.log(ages[1]);
// console.log(ages[2]);
// console.log(ages[3]);

// eleman degistirme
// ages[0] = 50;
// console.log(ages);

//length = yazilabilir(diziyi kesmek icin)
// ages.length = 3;
// console.log(ages);

// mixedArray = ["Duygu", "Ayla", "Elif", "Lee", ages, true, undefined, null, 20, 25.6, false];
// console.log(mixedArray[4][2]); // 45 nexted array access






// const cars = new Array("BMW", "Toyata", "Mercedes");

// const arr1 = ['red', 'blue', 'purple', 'white', 'orange'];

//  const bas = arr1.shift(); // basdan eleman
//  const son = arr1.pop(); // sondan eleman 

// arr1.push(bas);
// console.log(arr1);
// arr1.unshift(son); 
// console.log(arr1);

const colors = ['red', 'blue', 'purple', 'white', 'orange'];

//push metodu ile sona eleman ekleme
colors.push('green');
console.log(colors);

//pop metodu ile sondan eleman cikarma
const removedItem = colors.pop();
console.log(colors, removedItem);

//unshift metodu ile basa eleman ekleme
colors.unshift('yellow');
console.log(colors);

//shift metodu ile bastan eleman cikarma
colors.shift();
console.log(colors);

//reverse() metodu ile diziyi ters cevirme
colors.reverse();
console.log(colors);

//splice(start, deleteCount, item1, item2, ...) metodu ile diziyi degistirme
colors.splice(1, 1, 'brown');
console.log(colors);
colors.splice(2, 0, 'pink',); // 2.indexten sonra eleman ekleme
console.log(colors);

const spliceDeleted = colors.splice(3, 2); // 3.indexten itibaren 2 eleman silme
console.log(colors, spliceDeleted);

//sort() metodu ile diziyi siralama

const mixNumber =[23,53,156,67,312,72];
console.log(mixNumber.sort());

// sayisal siralama icin karsilastirma fonksiyonu kullanma
mixNumber.sort((a, b) => a - b); // kucukten buyuge
console.log(mixNumber);
mixNumber.sort((a, b) => b - a); // buyukten kucuge
console.log(mixNumber);


//fill(value, start, end) metodu ile diziyi belirli bir degerle doldurma
const fillArray = new Array(6).fill(0); // 6 elemanli 0 degeri ile doldurulmus dizi
console.log(fillArray);

fillArray.fill(5, 2, 5); // 2.indexten 5.indexe kadar 5 ile doldur

/*---------------------------------------*/
/*    4. Non-Mutating Methodlar (erisim) */
/*---------------------------------------*/

const numbers = [3,5, '2', 'Uc',2, 5,  'bes', 6, 'alti']

//includes (value, fromIndex?) - deger var mi ( === ile bakilir)
console.log(numbers.includes(5)); // true
console.log(numbers.includes('5')); //false
console.log(numbers.includes("5", 6)); // false

//indexOf() / lastIndexOf()

console.log('first 5:', numbers.indexOf(5));


//concat() - dizileri birlestirme
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'a'];
const lettersAndNubers = numbers.concat(letters);
console.log(lettersAndNubers);


/*---------------------------- */
// Modern Features//
/*---------------------------- */

//Destruction
const arr = [1,2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];
console.log(a,b,c,d);

//Destruction ile
const [a1, b1, c1, d1] = arr;
console.log(a1, b1, c1, d1);

//Spread Operator ´kopyalama/genisletme
const numbers1 = [1,2,3,4];
const numbers2 = [5,6,7]; 
const combinedNumbers = [...numbers1, ...numbers2];
console.log(combinedNumbers);


const text = "Ondia";
const reversedText = text.split('').reverse().join('');
console.log(reversedText);

const  metin = "JavaScript";
const tersMetin = metin.split('').reverse().join('');
console.log(tersMetin);

const merhaba1 = "Merhaba Dunya";
const yeniDizi = merhaba1.split(' ');
console.log(yeniDizi);
const yeniMetin = yeniDizi[0].split('').reverse().join('') + ' ' + yeniDizi[1].split('').reverse().join('');
console.log(yeniMetin);










 


