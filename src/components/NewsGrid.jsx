import { Link } from "react-router-dom";
import { useNews } from "../context/NewsContext";

export const NewsGrid = () => {
  const { news } = useNews();
  return (
    <div className="newsGrid">
      {news.map((article, index) => {
        return (
          <Link to={`/article/${index}`} key={index} className="newsArticle">
            {article.urlToImage ? (
              <img src={article.urlToImage} />
            ) : (
              <img src="./images/imageNotAvailable.png" />
            )}
            <div className="description">
              <h5>{article.title}</h5>
              <p>Source: {article.source.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
