import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import AddDinosaurio from "../componentes/add-dino.component";
import DinosauriosList from "../componentes/dinosaurios-list.component";
import { Component } from "react";
import { Informacion, Imagen, Alumno } from "./Inicio";
import Header from "./Header";
import { Router, Switch } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <div>
      <Header />
      <Imagen />
      <div className="container mt-3">
        <h2>React Firestore CRUD</h2>
          <Switch>
            <Route exact path={["/", "/Inicio"]} component={Alumno } />
            <Route exact path={["/", "/dinosaurios"]} component={DinosauriosList} />
            <Route exact path="/add" component={AddDinosaurio} />
          </Switch>
      </div>
    </div>
  );
};

export default App;
