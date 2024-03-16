import { StateHeader } from "../../shared/types/types";
import FormDirection from "../form/FormDirection/FormDirection";
import HeaderMenuNavigate from "./headerMenuNavigate/HeaderMenuNavigate"

const Header = ({state} : StateHeader) => {
  return (
    <>
      <header className="header">
        <span className="logo">Лого</span>
        <HeaderMenuNavigate /> 
        <div>
        <h1>Вся жизнь - <b>путешествие!</b></h1>
        <FormDirection />
        </div>
      </header>
    </>
  )
}

export default Header;