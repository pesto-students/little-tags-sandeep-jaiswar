import React, { Fragment, useEffect } from 'react';
import './styles/index.css';
import { getProductsFromFirestore, dataFromSnapshot } from './services/firestoreService';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import MyOrders from './pages/MyOrders';
import MyCart from './pages/MyCart';
import LikedProducts from './pages/LikedProducts';

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
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/orders" component={MyOrders}></Route>
        <Route path="/liked" component={MyCart}></Route>
        <Route path="/cart" component={LikedProducts}></Route>
      </Switch>
    </Fragment>
  )
}

export default App;
