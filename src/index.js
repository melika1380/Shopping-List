import headerComponent from "./header/index.js";
import mainComponent from "./main/index.js";
import footerComponent from "./footer/index.js";
import "./index.scss";

const header = document.querySelector("body > header");
const main = document.querySelector("body > main");
const footer = document.querySelector("body > footer");

header.innerHTML = headerComponent;
main.innerHTML = mainComponent;
footer.innerHTML = footerComponent;
