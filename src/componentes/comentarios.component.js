import React, { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import TutorialDataService from "../servicios/dinosaurio.service";

export default class DinosaurioComments extends Component {
  constructor(props) {
    this.state = {
      currentTutorial: {
      },
      message: "",
      comment: "",
    };
  }

  handleCommentSubmit(event) {
    event.preventDefault();
    const comment = {
      content: this.state.comment,
      date: new Date(),
    };
    firebase
      .firestore()
      .collection("CajaComentarios")
      .doc(this.state.currentTutorial.id)
      .collection("Comentarios")
      .add(comment)
      .then(() => {
        console.log("Comentario guardado!");
      })
      .catch((error) => {
        console.error("Error al guardar comentario: ", error);
      });
    this.setState({ comment: "" });
  }

  render() {
    const { currentTutorial, comment } = this.state;

    return (
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <form>{/* existing form elements */}</form>
            <div className="comment-form">
              <form onSubmit={this.handleCommentSubmit}>
                <div className="form-group">
                  <label htmlFor="comment">Ingresa un comentario: </label>
                  <input
                    type="text"
                    className="form-control"
                    id="comment"
                    value={comment}
                    onChange={this.handleCommentChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Selecciona un dinosario</p>
          </div>
        )}
      </div>
    );
  }
}
