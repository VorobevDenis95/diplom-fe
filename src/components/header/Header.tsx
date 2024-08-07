import { StateHeader } from "../../shared/types/types";
import FormDirection from "../form/FormDirection/FormDirection";
import HeaderMenuNavigate from "./headerMenuNavigate/HeaderMenuNavigate"
import './Header.css';
import StageWrapper from "./stageWrapper/StageWrapper";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [classState, setClassState] = useState<StateHeader['state']>('home');
  const [isMain, setMain] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('routes') ||
      location.pathname.includes('passengers') ||
      location.pathname.includes('payment') ||
      location.pathname.includes('confirmation')
    ) {
      !isMain ? setMain(true) : isMain;
      if (classState !== 'main') setClassState('main');
    }
    if (location.pathname === '/order') {
      setMain(false);
      setClassState('order');
    }
    if (location.pathname === '/') {
      setMain(false);
      setClassState('home');
    }
  }, [location])

  return (
    <>
      <header className={`header header__${classState}`} id='header'>
        <div className="logo">
          <span className="logo-item">Лого</span></div>
        <HeaderMenuNavigate />
        <div className="header__container">
          <div className="header__container-body">
            {!isMain && classState !== 'order' && <h1 >
              <p className="bold500">
                Вся жизнь -
              </p>
              <span>
                путешествие!
              </span>
            </h1>}
            <FormDirection state={classState} />
          </div>
        </div>
        {isMain && <StageWrapper />}

      </header>
    </>
  )
}

export default Header;