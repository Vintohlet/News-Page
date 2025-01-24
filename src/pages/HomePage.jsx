import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomePage() {
  const {isAuth, username} = useSelector((state) => state.user);
  return (
    <div className="home">
      <h1 className="title mb24">Добро пожаловать, {isAuth ? username : "гость"}</h1>
      <p className="text mb40">
        На нашем новостом блоге вы можете найти все самые актуальные новости
        всего мира!
      </p>
      <Link to="/news" className="btn">
        Начать
      </Link>
    </div>
  );
}
