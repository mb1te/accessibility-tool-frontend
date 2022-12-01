import {createRoot} from "react-dom/client";
import App from "./App";

import "./styles/normalize.css";
import "./styles/styles.css";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App />
);

console.log('Build time: ' + new Date(process.env.BUILD_TIME).toLocaleString());
