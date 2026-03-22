import style from './style.module.css';
import type React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";


type MainTemplateType = {
  children: React.ReactNode
}

export const MainTemplate = ({ children }: MainTemplateType) => {


  return (
    <div className={style.template}>
      <Header />

      {children}

      <Footer />
    </div>
  );
}