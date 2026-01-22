import { useState } from 'react';

const State = () => {

    const [sayac, setSayac] = useState(0);
  const [isim, setIsim] = useState("duygu");
  const [ogrenci, setOgrenci] = useState({
    'ISIM': "zafer",
    'MESLEK': "developer",
    'YAS' : 23
  })



  return (
    <div >
    <button onClick={()=> setSayac(sayac + 1)} >Arttir</button>
      <h1>sayi: {sayac}</h1>
      <h1>ISIM: {isim}</h1>
      <h1>OGRENCI : {ogrenci.ISIM}</h1>
    <button onClick={()=>setIsim("ayse")}>Isim degistir</button>
    <button onClick={()=> setSayac(sayac-1)}>Azalt</button>


    {console.log(sayac)}

    </div>
  )
}

export default State