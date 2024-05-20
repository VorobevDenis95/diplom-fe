import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <>
      <Header />
      { <Outlet />}
      <Footer/>
    </>
  )
}

export default Root;