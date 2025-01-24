import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function ArticlePage() {
  const {id} = useParams();
  const data = useSelector((state) => state.news.items.find((it) => it.id === id))
  return (
    <div className="article-page">
      <img
        src={data.urlToImage}
        alt=""
        className="article-img"
      />
      <h2 className="article-title">Источник: {data.source.name}</h2>
      <h1 className="title">{data.title}</h1>
      <p className="text">
       {data.content}
      </p>
    </div>
  );
}
