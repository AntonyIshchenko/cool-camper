import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';
import sprite from '../../assets/sprite.svg';

export default function AppBar() {
  return (
    <header className={css.header}>
      <div className="container">
        <nav className={css.navigation}>
          <NavLink className={`${css.link} ${css.logo}`} to="/">
            <svg width={40} height={28}>
              <use href={`${sprite}#fullyIntegrated`}></use>
            </svg>
            <span>Cool Camper</span>
          </NavLink>
          <ul className={css.menu}>
            <li>
              <NavLink className={css.link} to="/catalog">
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink className={css.link} to="/favorites">
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
