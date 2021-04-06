import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { configureStore } from './store/configureStore';
import ScrollToTop from "./components/ScrollToTop";

const store = configureStore();
const rootElem = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <ScrollToTop/>
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


