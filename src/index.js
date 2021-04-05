import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { configureStore } from './store/configureStore';

const store = configureStore();
const rootElem = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>,
    rootElem
  );
}

if (module.hot) {
  module.hot.accept('./App', function () {
    setTimeout(render)
  })
};

render();


