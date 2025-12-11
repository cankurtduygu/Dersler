//h1 baslik kirmizi olsun ortalansin
const baslik1 = document.getElementsByTagName("h1")[0]
baslik1.style.textAlign = "center";
baslik1.style.color = "red";


const resim = document.querySelector(".resim")
const telses = document.querySelector(".telses")

document.querySelector(".ara").onclick = () => {
    resim.src = "./img/img.gif";

    //play() komutu html deki audio etiketinin js de çalışmasını sağlar
    telses.play();

    //audio sesinin volume ünü volume komutu ile, 0 -1 arasında ölçü vererek ayarlayabilirsiniz
    telses.volume = 0.1
}
document.querySelector(".baglat").onclick = () => {
    resim.src = "./img/telbagla.gif"
    telses.pause();
}
document.querySelector(".konus").onclick = () => {
    resim.src = "./img/telefon.gif";
    telses.pause();
}

//! mouse ile üzerine glindiginde ne olacak

// resim.onmouseover=()=>{

// }

resim.addEventListener("mouseover", () => {

    resim.src = "./img/aslan2.jpeg"

    document.querySelector(".aslanses").play()
})

//! mouse ile resim üzerinden ayrilma
resim.addEventListener("mouseout", () => {

    resim.src = "./img/aslan1.jpeg"


    document.querySelector(".aslanses").pause()
})

//! inputa veri girisi yapilirken klavyeden elimi cektigimde varolan degisiklik


const textInput = document.querySelector("#textbox")
const check = document.querySelector("#check")

//checked = metodu inputun tikli olup olmadigini kontrol eder.Tikliyse bu method true döndürür.

textInput.onkeyup = () => {

    if (check.checked == true) {
        textInput.value = textInput.value.toUpperCase()

    } else {
        textInput.value = textInput.value.toLowerCase()
    }

}

//inputa veri girişi yaptığımızda, küçük input tikliyse benim büyük inputa girdiğim harfleri büyüt,
//  aksi durumda küçült

//?HTML DE h1 elementi oluşturmak

const baslik = document.createElement("h1")

{
    /* <h1></h1> */
}
//? baslik2 icin title class ismi atayalım

baslik.className = "title"

{
    /* <h1 class ="title"></h1> */
}


//?Programlama Dilleri şeklinde text oluşturduk

const yazi = document.createTextNode("Programlama Dilleri")

//?h1 elementi için oluşturduğum text i h1 e child yapalım

baslik.appendChild(yazi)
{
    /* <h1 class="baslik2">Programlama Dilleri</h1> */
}
//?input-div in sonrasına h1 i ekledim

document.querySelector(".input-div").appendChild(baslik)

//!!  "append" metodu ile seçtiğimiz Html etiketi bitmeden önceki son kısma ekleme yapabiliriz (<div>merhaba -buraya-  </div>).  "prepend" metodu ile seçtiğimiz Html etiketi başladıktan sonraki ilk kısma ekleme yapabiliriz  (<div> -buraya-  merhaba   </div>).  "after" metodu ile ile seçtiğimiz Html etiketi bittikten sonraki ilk kısma ekleme yapabiliriz (<div> merhaba </div>  -buraya-).

//! kisayol ***************** bir etiketin icine monte etmek zorundasin yani bu yolla yeni etkiet olusturtup ekleyemiyorsun yada after before yapamiyorsun.

const section = document.querySelector("section")

console.log(section.innerHTML);


section.innerHTML = `<h1 class="title">Programlama Dilleri</h1>` + section.innerHTML

//! dilEkle inputune girilen degerleri, ul ye li olarak ekleme


//* uzun yol
const dilEkle = document.querySelector(".dilEkle")

const ekle = document.querySelector(".ekle")
const liste = document.querySelector(".liste")

// ekle.onclick = () => {

//     //* yeni girilecek dil icin bir li olusturalim

//     const yeniLi = document.createElement("li")

//     //* yeniLi nin icine yazi (textNode) olusturmak

//     const text = document.createTextNode(dilEkle.value)

//     //* olusturdugumuz textNode yeniLi'ye baglayalim

//     yeniLi.appendChild(text)

//     //* yeni eklenen ici inputtan gelen value ile dolu li yi, dom agacindaki ul ye baglayalim

    
//     liste.appendChild(yeniLi);

//     dilEkle.value = ""
// }

//* kisayol

ekle.onclick=() =>{

    liste.innerHTML =liste.innerHTML + `<li> ${dilEkle.value} </li>`
    dilEkle.value=""

}

//! sil butonuna basilinca ul listesinden herhangi bir li elemanini silme
document.querySelector(".sil").onclick =()=>{
    // liste.removeChild(liste.lastElementChild)//son eleman silindi
    // liste.removeChild(liste.firstElementChild)//ilk eleman silindi
    liste.removeChild(liste.children[2])
}

//! klavyedeki key kodlari kullanilarak kod yazma(mesela enter a basinca ekle butonuna basilmis gibi olsun)

dilEkle.onkeydown=(tus) =>{
    
    // if (tus.key === "Enter") {
    //     ekle.click();
    // }

    if(tus.keyCode==13)
        ekle.click()
}




