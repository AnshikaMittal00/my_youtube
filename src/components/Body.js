import React from 'react';
import {Sidebar} from "./Sidebar";
import{MainContainer} from "./MainContainer"
import { Outlet } from 'react-router-dom';
import { Head } from './Head';
import { useSelector } from "react-redux";

export const Body = () => {
  const isMenuOpen = useSelector(
    (store) => store.app.isMenuOpen
  );

  return (
    <>
      <Head />

      <Sidebar />

      <div className={isMenuOpen ? "ml-60" : "ml-0"}>
        <Outlet />
      </div>
    </>
  );
};

