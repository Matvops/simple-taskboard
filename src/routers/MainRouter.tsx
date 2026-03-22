import type React from "react";
import { BrowserRouter, Routes } from "react-router";

type MainRouterType = {
  children: React.ReactNode
};

export const MainRouter = ({ children }: MainRouterType) => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {children}
        </Routes>
      </BrowserRouter>
    </>
  );
}