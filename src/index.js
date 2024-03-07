import React from "react";
import {createRoot} from "react-dom/client";
import {Provider}from 'react-redux';
import App from "./App";
import "./styles/index.css";
import { NavigationProvider } from "./context/navigation";
import { store } from "./store";
import "bulma/css/bulma.css";

const root = createRoot(document.getElementById("root"));
root.render(
   <Provider store={store}> 
      <NavigationProvider>
        <App />
      </NavigationProvider> 
    </Provider>
);