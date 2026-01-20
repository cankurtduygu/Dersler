import { useState } from "react";

// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.



const Form = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState("");
    const [remember, setRemember] = useState(false);

    const sendDatabase =(e)=>{
        e.preventDefault()
        // axios.post("url",{name,password,country}); Ilerde database e bu sekilde yollacagiz

        alert(
            `ISIM: ${name}
             SIFRE: ${password}
             ULKE: ${country}
             REMEMBER: ${remember}`
        );


         // ✅ submit bittikten sonra temizle
    setName("");
    setPassword("");
    setCountry("");
    setRemember(false);
    };





  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h1>*********************************</h1>
        <h2>FORM EVENTS</h2>
      </div>

      <form onSubmit={sendDatabase}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
            <span className="text-danger">{name}</span>
          </label>
          <input onChange={(e)=>setName(e.target.value)}
          className="form-control" 
          id="name" 
          type="text" 
          required 
          value={name}
            
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
            <span className="text-danger">{password}</span>
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            required
            value={password}
            onChange={(e)=> {setPassword(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country:
            <span className="text-danger">{country}</span>
          </label>
          <select 
          onChange={(e)=>{setCountry(e.target.value)}}
          className="form-control"
          id="country"
          value={country}>
            <option>COUNTRIES</option>
            <option value="Türkiye">TURKEY</option>
            <option value="Almanya">GERMANY</option>
            <option value="Amerika">USA</option>
          </select>
        </div>

        <div className="mb-3 form-check">
          <input 
          className="form-check-input" 
          id="remember" 
          type="checkbox" 
          checked={remember}
        //   tiklaninca true yada false oldugunu e.target.checked dan aliyor
          onChange={(e)=>setRemember(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="remember">
            Remember:
            <span className="text-danger"> </span>
          </label>
        </div>

        <button className="btn btn-primary" type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
