import React, { Component } from "react";
import TutorialDataService from "../servicios/dinosaurio.service";
import "../styles/Mostrar.css";

import Dinosaurio from "./dinosaruio.component"

export default class DinosauriosList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      Datos_List: [],
      currentTutorial: null,
      currentIndex: -1,
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = TutorialDataService.getAll()
      .orderBy("title", "asc")
      .onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let Datos_List = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      Datos_List.push({
        id: id,
        title: data.title,
        description: data.description,
        published: data.published,
        url: data.url,
      });
    });

    this.setState({
      datos: Datos_List,
    });
  }

  refreshList() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(Datos_List, index) {
    this.setState({
      currentTutorial: Datos_List,
      currentIndex: index,
    });
  }

  render() {
    const { datos, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <span class="Mostrar_Titulo">Dinosaurios Guardados: </span>

          {datos &&
            datos.map((Datos_List, index) => {
              return (
                <div className="card card3">
                  <div className="inner">
                    <button
                      className={+(index === currentIndex ? "active" : "")
                      }
                      onClick={() => this.setActiveTutorial(Datos_List, index)}
                      key={index}
                    >
                      {Datos_List.title}
                    </button>
                  </div>

                  <img src= {Datos_List.url} alt="a" ></img>
                </div>
              );
            })}

          <ul className="list-group"></ul>
        </div>

        <div className="col-md-6">
          {currentTutorial ? (
            <Dinosaurio
              tutorial={currentTutorial}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please click on a Dinosaurio...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
