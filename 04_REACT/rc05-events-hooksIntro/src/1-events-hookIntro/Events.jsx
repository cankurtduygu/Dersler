

const Events = () => {

  //!js alani
  let baslik = "Merhaba"
  let sayac = 0;

  const arttir =()=>{
    sayac=sayac+1;
    console.log(sayac);
    document.querySelector("span").textContent=sayac;
  }

  const changeTitle =(title)=> {
    // console.log(title);
    document.querySelector("h1").textContent=title;
  }

    const click =()=>{
        document.querySelector(".btn-danger").textContent="TIKLANDI";
        
    }

  return (

  //!jsx (react) alani
    <div className='conatiner text-center mt-4'>
      <h1>Info: {baslik}</h1>
      <h2>Count: <span className='text-danger'>{sayac}</span></h2>

      {/* Parametre göndermiyorsak func. asagidaki gibi cagrilabilir */}
      <button onClick={arttir} className='btn btn-primary m-2'>ARTTIR</button>

      {/*Asagidaki satirda arrow function ile parametre gonderiyoruz parametre oldugu icin.parametre gondermek icin arrow function kullaniyoruz */}
      <button onClick={() => changeTitle("Yeni Baslik")} className='btn btn-success m-2'>BASLIK DEGISTIR</button>
      <button onClick={click} className='btn btn-danger m-2'>TIKLA</button>
    </div>
  )
}

//?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------

export default Events