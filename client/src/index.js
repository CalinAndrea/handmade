import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import App from "./App";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <ToastProvider placement='top-center' autoDismiss={true} autoDismissTimeout='5000'>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ToastProvider>,
  document.getElementById("root")
);

serviceWorker.register();
