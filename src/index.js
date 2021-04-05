import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElem = document.getElementById('root');

function render(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElem
  );
}

if(module.hot){
  module.hot.accept('./App',function(){
    setTimeout(render)
  })
};

render();


