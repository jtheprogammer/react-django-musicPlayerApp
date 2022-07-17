import React from "react";
import ReactDOM from "react-dom/client";

export const App = () => {
  return (
    <h1>App</h1>
  )
}

export default App

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
  <App />
);
