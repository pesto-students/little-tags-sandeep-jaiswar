import React, { useEffect } from 'react';
import './styles/index.css';
import {getProductsFromFirestore,dataFromSnapshot} from './services/firestoreService'
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Registration from './pages/Registration';

function App() {
  useEffect(()=>{
    const unsubscribe = getProductsFromFirestore({
      next: snapshot => console.log(snapshot.docs.map(docSnapshot => dataFromSnapshot(docSnapshot))),
      error: error => console.log(error),
    });
    return unsubscribe;
  },[])

  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/registration" component={Registration}></Route>
    </Switch>
  )
}

export default App;
