import firebase from "../firebase/firebase";
const db = firebase.collection("/dinosaurios");

class DinoService {
  getAll() {
    return db;
  }

  create(fullmetal) {
    return db.add(fullmetal);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

const DinoServiceDataServiceInstance= new DinoService();
export default DinoServiceDataServiceInstance