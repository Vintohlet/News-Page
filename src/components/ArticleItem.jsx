import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

export default function ArticleItem({id,imageUrl, title, text}) {
  const isAuth = useSelector((state) => state.user.isAuth);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="article">
        <img
          src={imageUrl}
          alt="img"
          className="article-img"
        />
        <div className="article-body">
          <h3 className="article-title">{title}</h3>
          <p className="article-text">
            {text}
          </p>
          {isAuth ? (
            <Link to={"/news/"+ id} className="article-link">
              Подробнее <IoIosArrowForward />
            </Link>
          ) : (
            <div
              className="article-link"
              onClick={() => setModalIsOpen(true)}
            ></div>
          )}
        </div>
      </div>
      {modalIsOpen && (
        <div className="modal" onClick={() => setModalIsOpen(false)}>
          <div className="modal-container">
            <p className="modal-text">
              Для того, чтобы посмотреть новость в полной версии вам нужно
              авторизоваться!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
