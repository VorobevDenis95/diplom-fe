import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import About from "./About/About";
import Footer from "./Footer/Footer";
import HowItWork from "./HowItWork/HowItWork";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
}

export default Root;