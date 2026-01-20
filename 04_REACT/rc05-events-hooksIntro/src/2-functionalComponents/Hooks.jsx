//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimini cok azaltmistir.

import { useState } from "react"

import { use } from "react"
import Events from "../1-events-hookIntro/Events"

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanimlanmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

const Hooks = () => {

    //!usestate hook u daima en tepeye yazilmalidir
    const[sayac, setSayac]= useState(0); //0 initial value
    //let sayac = 0;

    const [kisi, setKisi] = useState({
        isim:"Duygu",
        meslek:"Developer", 
        yas:32, 
        renk:"blue"
    });

    const arttir =()=>{
        setSayac(sayac+1)
    };

    const degistir =()=>{

        if(kisi.isim==="Duygu"){

        setKisi({
            isim: "Ayla",
            meslek: "Senior Developer",
            yas: 28,
            renk: "red",
            });
        }else{
            setKisi({
                isim: "Duygu",
                meslek: "Developer",
                yas: 32,
                renk: "blue",
                });
        }


    }




  return (
    <div className="container">

    <h1>USESTATE</h1>

    <h2>COUNT : {sayac}</h2>

    <button onClick={arttir} className="btn btn-primary">Arttir</button>
    <button className="btn btn-danger">Azalt</button>

    <h1>****************************</h1>
    <div className="text-center">
    <h1>object ile usestate kullanimi</h1>
    <h2 className="text-danger">{kisi.isim}</h2>
    <h3 className="text-primary">{kisi.meslek}</h3>
    <h5 className="text-success">{kisi.yas}</h5>
    <button onClick={degistir} className="btn m-4 p-2" style={{background:kisi.renk, color : "white"}}>ToogleDegistir</button>


    </div>

    <h1>**Event component cagrilmasi sarta bagli****</h1>
    {/* {kisi.renk==="red" && <Events />}// alternatif yontem */}
    {kisi.renk==="red" ? <Events /> : null}


    <button onClick={() => setKisi({
        ...kisi,
        isim: "Ayse",
        
    })}
    className="btn m-4 p-3" style={{background:kisi.renk}}>ISIM DEGISTIR</button>

    <button 
    onClick={() => setKisi({...kisi,yas:55,meslek: "Esnaflik",})}
    className="btn m-4">
        isim kalsin digerleri degissin
    </button>

    

























    </div>
  )
}

export default Hooks