//h1 baslik kirmizi olsun ortalansin
const baslik = document.getElementsByTagName("h1")[0]
baslik.style.textAlign = "center";
baslik.style.color = "red";

const resim = document.querySelector(".resim")
const telses = document.querySelector(".telses")

document.querySelector(".ara").onclick=()=>{
    resim.src="./img/img.gif";

    //play() komutu html deki audio etiketinin js de çalışmasını sağlar
    telses.play();

    //audio sesinin volume ünü volume komutu ile, 0 -1 arasında ölçü vererek ayarlayabilirsiniz
    telses.volume=0.1
}
document.querySelector(".baglat").onclick=()=>{
    resim.src="./img/telbagla.gif"
    telses.pause();
}
document.querySelector(".konus").onclick=()=>{
    resim.src="./img/telefon.gif";  
    telses.pause();
}