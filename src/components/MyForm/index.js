import { useState, useEffect } from "react";
import axios from "axios";

import importedCsvData from "../main/dara.csv";

import imagem from "../main/whatsapp-logo.png";

function Form() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setTelefone] = useState("");
  const [cep, setCep] = useState("");

  const [dado, setData] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCepChange = (e) => {
    setCep(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setTelefone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://agile-caverns-13849.herokuapp.com/api/clinica/", {
        username,
        email,
        cep,
        whatsapp,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        window.location = "/retrieve"; //This line of code will redirect you once the submission is succeed
      });

    setData({ showInfo: true });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          className="dado"
          type="text"
          name=""
          placeholder="Nome da empresa"
          value={username}
          onChange={handleNameChange}
        />
        <input
          className="dado"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />

        <input
          className="dado"
          type="text"
          name=""
          placeholder="CEP"
          value={cep}
          onChange={handleCepChange}
        />

        <input
          className="dado"
          type="text"
          name=""
          placeholder="Telefone"
          value={whatsapp}
          onChange={handlePhoneChange}
        />

        <button className="enviar">Enviar</button>
      </form>

      {dado ? (
        <div className="form-card">
          <p className="clinica">Clinica</p>
          <div>
            <h1>{username}</h1>
            <div className="cep-email">
              <p>{cep}</p>
              <p>{email}</p>
            </div>
          </div>
          <div className="servicos">
            <p>Exames Clínicos</p>
            <p>Exames Complementares</p>
            <p>PPRA</p>
            <p>PCMSO</p>
          </div>
          <div className="whatsapp">
            <img className="whatsapp-image" src={imagem} />
            <p className="">{whatsapp}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MyForm() {
  const [results, setShowResults] = useState(false);
  const [fechar, setFechar] = useState(false);

  const onClick = () => setShowResults(true);
  const onClose = () => setFechar(false);

  return (
    <div>
      <div>
        <input
          className="adicionar"
          type="submit"
          value="Adicionar"
          onClick={onClick}
        />
        <input
          className="adicionar"
          type="submit"
          value="Fechar"
          onClose={onClose}
        />
        {fechar ? <Form /> : null}
        {results ? <Form /> : null}
      </div>
    </div>
  );
}

export default MyForm;
