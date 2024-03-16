import './HeaderMenuNavigate.css';

const HeaderMenuNavigate = () => {
  return (
    <nav className="header__menu">
      <ul className="header__menu-container">
        <li className="header__menu-item-container">
          <a className='header__menu-link' href="#">
            О нас
          </a>
        </li>
        <li className="header__menu-item-container">
          <a className='header__menu-link' href="#">
            Как это работает
          </a>
        </li>
        <li className="header__menu-item-container">
          <a className='header__menu-link' href="#">
            Отзывы
          </a>
        </li>
        <li className="header__menu-item-container">
          <a className='header__menu-link' href="#">
            Контакты
          </a>
        </li>
      </ul>
    </nav>

  )
}

export default HeaderMenuNavigate;