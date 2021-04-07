import {applyMiddleware, createStore} from 'redux';
import rootReducer from "../reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

export function configureStore(){
  return createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
}