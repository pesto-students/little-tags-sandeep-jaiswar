import React, { Fragment, useEffect } from 'react';
import './styles/index.css';
import { getProductsFromFirestore, dataFromSnapshot } from './services/firestoreService';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Header from "./components/Header";

function App() {
  useEffect(() => {
    const unsubscribe = getProductsFromFirestore({
      next: snapshot => console.log(snapshot.docs.map(docSnapshot => dataFromSnapshot(docSnapshot))),
      error: error => console.log(error),
    });
    return unsubscribe;
  }, [])

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/registration" component={Registration}></Route>
      </Switch>
    </Fragment>
  )
}

export default App;
