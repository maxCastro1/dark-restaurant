import React from 'react'
import Header from './pages/header/header'
import Home from './pages/home/home'
import {Outlet } from "react-router";
const Main = () => {
  return (
    <>
    <Header/>
     <main>
     <Outlet />
    </main>
    </>
  )
}

export default Main