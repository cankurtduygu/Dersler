//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.

import './Msg.css';

// ? Dahili bir resim eklemek icin import yapmak gereklidir.
// ? ancak public klasöründeki resimler importsuz bir şekilde
//? erisilebilir.

import resim from '../assets2/tree.webp'

const Msg = () => {

  //! internal css

  const styleA = {
    color:"green",
    border: "1px solid blue",
    fontFamily: "Tahoma"
  }

  const imgA = {
    width:"300px"
  
  }

  return (
    <div>
    <h2 style={styleA}>Burasi Msg alani</h2>

    {/* Inline Css */}
    <p style={{color:"red", border:"1px solid red"}}>Hosgeldin React</p>


    <img className='msg-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="" />

    <img style={imgA} src={resim} alt="" />

    <img style={imgA} src="./assets/images.webp" alt="" />
  
    </div>
  )
}

export default Msg