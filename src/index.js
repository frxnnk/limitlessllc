import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-41h-z2e6.us.auth0.com"
    clientId="2E6YPQcWwZck4yUuetLB3EGy3ILag3UY"
    authorizationParams={{
      //redirect_uri: 'http://localhost:3000/dashboard'
      redirect_uri: 'https://finfreedom.us/dashboard'
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);