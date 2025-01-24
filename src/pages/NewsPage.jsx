import { useEffect } from "react";
import ArticleItem from "../components/ArticleItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/slices/newsSlice";

export default function NewsPage() {
  const API_KEY = import.meta.env.VITE_API_KEY
  const dispatch = useDispatch();
  const {items, isLoading, error} = useSelector((state)=> state.news)
  useEffect(() =>{
   dispatch(fetchNews())
  },[dispatch]);
  
  return (
    <div className="news">
      <h1 className="title">Последние новости</h1>
      {!items &&isLoading && <p className="message">Загрузка...</p>}
      {!items && error && <p className="message">Ошибка:{error} </p>}
      <div className="news-grid">
        {items.map((item) => {
          if (item.urlToImage) {
            return (
              <ArticleItem
                imageUrl={item.urlToImage}gi
                title={item.title}
                text={item.description}
                id={item.id}
                key={item.id}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
