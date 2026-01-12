import Message from "./Message"


const Person = (props) => {

    //! dest 1.yol

    //  const {kisi} = props
    //  const {name, tel, img} = kisi

    //! dest 2.yol
    
     const {img, name, tel} = props.kisi

    
  return (
    <h1>

        {name}

        <img style={{width:"600px"}} src={img} alt="resim" />

        <p>{tel}</p>

        <Message isim={name} telefon={tel}  />

    </h1>
    
  )
}

export default Person