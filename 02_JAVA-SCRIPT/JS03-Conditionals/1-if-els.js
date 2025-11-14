// * =====================================
// *     CONDITIONS (IF-ELSE)
//* ======================================

/* if(condition) {

    if condition is true this scope will work

    }

    if(condition) {

    if condition is true this scope will work

    } else {
        if condition is not true, this scope will work
        }
    */


const age = 25;

if(age>=18){
    console.log("You can enter");
} else{
    console.log("You can not enter.");
}


const sayim= 16;

let sonuc = sayim % 2;

if(sonuc == 0){
    console.log(`sayi ciftir: ${sayim}`);
} else{
    console.log("sayi tektir");
}
