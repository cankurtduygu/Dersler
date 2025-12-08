//? METHOD-1 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol
//?---------------------------------------------------------------
//*example-1 (onmouseover-onmouseout)

const selam = document.querySelector("#selam");


selam.onmouseover=()=>{

selam.style.fontSize="50px"
selam.style.background="pink"
}

selam.onmouseout=()=>{

selam.style.fontSize="24px"
}


//*example-1 (onclick-ondblclick)


const birinci=document.querySelector(".birinci")
const ikinci=document.querySelector(".ikinci")

//*1.yol
birinci.onclick=()=>{

birinci.src="./img/js_logo.png"
ikinci.src="./img/logo2.png"

}

birinci.ondblclick=()=>{

birinci.src = "./img/logo2.png";
ikinci.src = "./img/js_logo.png";

}

//*2.yol

// birinci.onclick = () => {
//   birinci.src = "./img/js_logo.png";
//   ikinci.src = "./img/logo2.png";

// ikinci.onclick = () => {
//   birinci.src = "./img/logo2.png";
//   ikinci.src = "./img/js_logo.png";
// };

// };
birinci.onclick = () => {
  birinci.src = "./img/js_logo.png";
  ikinci.src = "./img/logo2.png";

 iki()
};

const iki=()=>{
ikinci.onclick = () => {
  birinci.src = "./img/bir.jpeg";
  ikinci.src = "./img/iki.webp";
};
}

//*example-3
const badi = document.querySelector("#badi");
const buton =document.querySelector("#btn");

btn.onclick=()=>{
    buton.style.fontSize="50px"
    buton.textContent="SEARCH"

    badi.style.backgroundImage="linear-gradient(purple,gray)"

    ikinci.src = "./img/iki.webp";
}

// ? METHOD-2 (sadece JAVASCRIPT te yazılır- addEventListener())  2.yol
// ? ---------------------------------------------------------------

buton.addEventListener("click",()=>{

  buton.style.fontSize = "50px";

  buton.textContent = "SEARCH";

  badi.style.backgroundImage = "linear-gradient(to right,purple,gray)";

  ikinci.src = "./img/iki.webp";
})

//?METHOD-3 (HTML-INLINE)
//?---------------------------------------------------------------

