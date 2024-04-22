import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import en from "./locales/en.json";
import sv from "./locales/sv.json";
import React from "react";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/gallery",
    element: <GalleryPage></GalleryPage>,
  },
]);

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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
