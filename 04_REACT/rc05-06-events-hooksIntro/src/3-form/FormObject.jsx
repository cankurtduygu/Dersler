import React, { useState } from "react";

const FormObject = () => {
  const [bilgi, setBilgi] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = bilgi; //dest

  const handleBilgi = (e) => {
    // console.log([e.target.id]);

    // console.log(e.target.value);

    setBilgi({ ...bilgi, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `İSİM: ${name}
ŞİFRE: ${password}
EMAİL: ${email}
`,
    );

    setBilgi({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h1>*********************************</h1>
        <h2>FORM EVENTS</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
            <span className="text-danger">{name} </span>
          </label>
          <input
          value={name}
            className="form-control"
            id="name"
            type="text"
            required
            // onChange={(e) => setBilgi({ ...bilgi, name: e.target.value })}

            onChange={handleBilgi}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email: <span className="text-danger">{email} </span>
          </label>
          <input
          value={email}
            type="email"
            className="form-control"
            id="email"
            required
            // onChange={(e) => setBilgi({ ...bilgi, email: e.target.value })}
            onChange={handleBilgi}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
            <span className="text-danger">{password} </span>
          </label>
          <input
          value={password}
            className="form-control"
            id="password"
            type="password"
            required
            // onChange={(e) => setBilgi({ ...bilgi, password: e.target.value })}
            onChange={handleBilgi}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default FormObject;