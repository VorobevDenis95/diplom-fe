import './HeaderMenuNavigate.css';

const HeaderMenuNavigate = () => {
  return (
    <nav className="header__menu">
      <ul className="header__menu-container">
        <li className="header__menu-item-container">
          <a className='header__menu-link' href="/diplom-fe/#about">
            О нас
          </a>
        </li>
        <li className="header__menu-item-container">
          <a className='header__menu-link' href="/diplom-fe/#how-to-work">
            Как это работает
          </a>
        </li>
        <li className="header__menu-item-container">
          <a className='header__menu-link' href="/diplom-fe/#reviews">
            Отзывы
          </a>
        </li>
        <li className="header__menu-item-container">
          <a className='header__menu-link' href="/diplom-fe/#footer">
            Контакты
          </a>
        </li>
      </ul>
    </nav>

  )
}

export default HeaderMenuNavigate;