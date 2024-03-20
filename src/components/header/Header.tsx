import { StateHeader } from "../../shared/types/types";
import FormDirection from "../form/FormDirection/FormDirection";
import HeaderMenuNavigate from "./headerMenuNavigate/HeaderMenuNavigate"
import './Header.css';

const Header = ({state} : StateHeader) => {
  return (
    <>
      <header className="header" id='header'>
        <div className="logo">Лого</div>
        <HeaderMenuNavigate /> 
        <div className="header__container">
          <div className="header__container-body">
            <h1 >
              <p className="bold500">
            Вся жизнь - 
              </p>
              <span>
              путешествие!
              </span>
              </h1>
          <FormDirection state='home' />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;