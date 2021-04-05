import React, { useEffect } from 'react';
import './styles/index.css';
import {getProductsFromFirestore,dataFromSnapshot} from './services/firestoreService'

function App() {
  useEffect(()=>{
    const unsubscribe = getProductsFromFirestore({
      next: snapshot => console.log(snapshot.docs.map(docSnapshot => dataFromSnapshot(docSnapshot))),
      error: error => console.log(error),
    });
    return unsubscribe;
  },[])

  return (
    <div>
      
    </div>
  )
}

export default App;
