import React from "react";
import { useState, useEffect } from "react";
import * as d3 from "d3";
import axios from "axios";

import "./style.css";

import imagem from "./whatsapp-logo.png";

import importedCsvData from "./dara.csv";
import MyForm from "../MyForm";

function Page() {
  const [dados, setDados] = useState([]);

  var csvFilePath = importedCsvData;
  console.log("min/index.jsx rows:");

  useEffect(() => {
    axios
      .get("https://agile-caverns-13849.herokuapp.com/api/clinica/")
      .then((res) => {
        console.log(res);
        setDados(res.data.docs);
      });

    /*
    d3.csv(csvFilePath).then(function (csvFile) {
      console.log(csvFile);

      setDados(csvFile);
    });
    */
  }, []);

  return (
    <div>
      <div className="">
        <MyForm />
        <div className="app">
          {dados.map((i) => (
            <div key={i._id} className="card">
              <p className="clinica">Clinica</p>
              <div className="main-data">
                <h1>{i.username}</h1>
                <div className="cep-email">
                  <p>{i.cep}</p>
                  <p>{i.email}</p>
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
                <p className="">{i.whatsapp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
