// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// ReactDOM.createRoot(document.getElementById("app")).render(
//     // <React.StrictMode>
//     //     <App />
//     // </React.StrictMode>
//     <h1>Hi</h1>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// export default function Main() {
//     return <h1>HELLO</h1>;
// }

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
