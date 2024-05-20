import { useLocation } from "react-router-dom"
import ReviewsContainer from "../../components/Reviews/ReviewsContainer"
import About from "../About/About"
import HowItWork from "../HowItWork/HowItWork"
import { useEffect } from "react"
import { useAppDispatch } from "../../shared/redux/redux-hooks"
import { clearTrainState } from "../../shared/redux/slice/trainSlice"
import { clearDirectionState } from "../../shared/redux/slice/directionSlice"
import { clearOrderState } from "../../shared/redux/slice/orderSlice"

const Main = () => {

  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(clearDirectionState());
      dispatch(clearTrainState());
      dispatch(clearOrderState());
    }
  }, [location])

  return (
    <>
      <About />
      <HowItWork />
      <ReviewsContainer />
    </>
  )
}

export default Main;

