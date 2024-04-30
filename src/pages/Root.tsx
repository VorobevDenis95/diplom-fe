import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "./Footer/Footer";
// import { useAppSelector } from "../shared/redux/redux-hooks";

const Root = () => {

  // const {items} = useAppSelector(state => state.direction);

  return (
    <>
      <Header />
      { <Outlet />}
      <Footer/>
    </>
  )
}

export default Root;