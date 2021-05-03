import React, { lazy, Suspense } from "react";
const SliderMain = lazy(() => import("./Componats/Slider"));
const Menu = lazy(() => import("./Componats/Menu"));
const Footer = lazy(() => import("./Componats/Footer"));
import Loader from "./Componats/Loader";
import Slider_new from "./Componats/Slider";
import Footer_new from "./Componats/Footer";
import Menu_new from "./Componats/Menu";
import "./styles.css";
export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Menu />
        <SliderMain />
        <Footer />
      </Suspense>
    </>
  );
}
