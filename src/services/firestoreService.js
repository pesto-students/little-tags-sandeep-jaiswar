import firebase from '../config/Firebase'

const db = firebase.firestore();

export function dataFromSnapshot(snapshot){
  if(!snapshot.exists) return undefined;
  const data = snapshot.data();
  return {
    ...data,
    id: snapshot.id
  }
}

export function getProductsFromFirestore(observer) {
  return db.collection('Products').onSnapshot(observer);
}