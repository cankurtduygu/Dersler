import React, { useState } from 'react'

const Home = () => {

    const [name, setName] = useState("");
    const [nameError, setnameError] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();

        if(name ===""){
            setnameError(true);
        }else{
            alert(name + "gönderildi")
        }

        
        

    }


  return (
    <div>
        <form>
            <input 
            type="text" 
            placeholder='isim giriniz' 
            value={name}
            onChange={e => 
                {
                    console.log(e.target.value)
                setName(e.target.value)
                }
            }
            />
            {nameError && <span>Isim alani bos birakilamaz</span>}

            <span>{name}</span>
            <button onClick={handleClick} >Gönder</button>




        </form>


    </div>
  )
}

export default Home;