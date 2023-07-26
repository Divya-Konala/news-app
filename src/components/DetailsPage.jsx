import { useParams } from "react-router-dom";
import { useNews } from "../context/NewsContext";

export const DetailsPage = () => {
  const { id } = useParams();
  const { news } = useNews();
  const article = news[id];
  return (
    <div className="detailsPage">
      <h1>{article.title}</h1>
      <p>Source: {article.source.name}</p>
      <div className="deatilsImage">
        {article.urlToImage ? (
          <img src={article.urlToImage} />
        ) : (
          <img src="./images/imageNotAvailable.png" />
        )}
      </div>
      <p>{article.description}</p>
    </div>
  );
};
