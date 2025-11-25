 let toplam=0;
 let ort=0;
 let sayac=0;
 let sayi;

 do {
    sayi = prompt("sayi giriniz. Tüm sayilari girdiyseniz q/Q ya basiniz");

     if(sayi.toUpperCase() != "Q" ){
         toplam += Number(sayi);
         sayac++;
     } 

 } while (sayi.toUpperCase() != "Q" );

if (sayac > 0) {       
    ort = toplam / sayac;
    console.log("Ortalama: " + ort);
} else {
    console.log("Hiç sayı girilmedi.");
}
