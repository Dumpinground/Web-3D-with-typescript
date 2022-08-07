import "./styles.css";
import { fallbackTo } from "./util";

const app = document.getElementById("app");
if (!app) throw new Error();

const a = 1;

const n_a = document.createElement("div");

app.appendChild(n_a);

n_a.innerHTML = `<h1>wer</h1>`;

const body = document.getElementsByTagName("body")[0];
if (!body) throw new Error();

body.appendChild(fallbackTo("index.html"));
