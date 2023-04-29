import firebase from "../firebase/firebase";

const db = firebase.collection("/dinosaurios");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(starts,dinosaruio) {
    return db.doc(dinosaruio).set(starts);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new TutorialDataService();