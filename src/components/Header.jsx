import { Link } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import classNames from "classnames";

export default function Header() {
  const isDark = useSelector((state) => state.theme.isDark);
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  return (
    <header className={classNames("header",{
      dark: isDark
    })}>
      <nav className="nav">
        <div className="nav-part">
          <h1 className="logo">TestApp</h1>
        </div>
        <div className="nav-part">
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Главная
            </Link>
            <Link to="/news" className="nav-link">
              Новости
            </Link>
           {
            isAuth ? (<Link to="/profile" className="nav-link">Мой профиль</Link>) : (<Link to="/login" className="nav-link">
            Войти
          </Link>)
           }
            <div className="light" onClick={() => dispatch(toggleTheme())}>
              { isDark ?  <MdOutlineNightlight/> :<MdOutlineLightMode /> }
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
