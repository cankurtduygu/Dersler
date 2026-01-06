// https://www.themealdb.com/api.php

let dizi = [];

//! TUM MEALLARI GETIRME

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((resp) => resp.json())
    .then((veri)=>{

        dizi = veri;
        showScreen(dizi.meals);  
});


//! EKRANA BASTIRMA FONKSİYONU

function showScreen(data){

    const mealDiv = document.querySelector(".food");

    console.log(data);

    mealDiv.innerHTML=``;

    data.forEach(a => {

        mealDiv.innerHTML += `
        <div class="col-md-3 m-1 border border-3 border-dark p-3 text-center">
            <p class="fs-3 m-3 text-primary">${a.strMeal}</p>
            <img src="${a.strMealThumb}" />  
 
        </div>
        `; 
    });
}

//! arama inputuna yazdigim harfleri iceren meals i ekrana bastirma(oninput kullanacagim : her harf girisinde arama yapacak)

// fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${input.value}`);

document.querySelector("input").oninput =(e)=>{
    // console.log(dizi);
    // console.log(e.target.value);

    let harfDizi= dizi.meals.filter(a => a.strMeal.toLowerCase().includes(e.target.value.toLowerCase()));
    // console.log(harfDizi);

    showScreen(harfDizi);

    //!2. Secenek
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`)
         .then((res) => res.json())
         .then((veri)=> showScreen(veri.meals));
};

//!Bayraklara tiklaninca tiklanan bayragin ülkesinin mealsi gelsin
// https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

document.querySelectorAll("img").forEach((img) => img.onclick=()=> 
    
    (
        img.onclick = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${img.className}`).then((res) => res.json())
            .then((veri) => showScreen(veri.meals));
        }
    )



);

    
