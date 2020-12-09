import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Frase from "./componentes/Frase";
import Spinner from "./componentes/Spinner";

function App() {
  const [fraseSimpsons, setFraseSimpsons] = useState({});
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    setLoader(true);
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const resp = await api.json();
    console.log(api);
    console.log(resp[0]);

    setTimeout(() => {
      setFraseSimpsons(resp[0]);
      setLoader(false);
    }, 2000);
  };

  const cargarLoader = loader ? (
    <Spinner></Spinner>
  ) : (
    <Frase fraseSi={fraseSimpsons}></Frase>
  );

  return (
    <Fragment>
      <section className="container text-center my-5">
        <article className="d-flex flex-column align-items-center">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            className="logo w-75"
          ></img>
          <button
            type="button"
            className="btn  w-50 my-5 boton"
            onClick={() => consultarAPI()}
          >
            Obtener frase
          </button>
        </article>
        {cargarLoader}
      </section>
    </Fragment>
  );
}

export default App;
