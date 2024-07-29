import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import en from "./locales/en.json";
import sv from "./locales/sv.json";
import React from "react";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: en,
    },
    sv: {
      global: sv,
    },
  },
});

let anims = [...document.querySelectorAll("[anim]")];
console.log(anims);
let click = (el: any, cb: any) => el.addEventListener("click", cb);
let toggle = (el: any) => el.classList.toggle("toggled");
let clickTog = (el: any) => click(el, () => toggle(el));
anims.map(clickTog);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
