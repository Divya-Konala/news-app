import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseOutside = (event) => {
    if (event.target === event.currentTarget) {
      setOpenModal(false);
    }
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleOpen = () => {
    setOpenModal(true);
  };
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios("https://newsapi.org/v2/top-headlines", {
      params: {
        country: "in",
        apiKey: "54118098bade4c72b496ea34d70f8525",
      },
    })
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <NewsContext.Provider
      value={{
        openModal,
        setOpenModal,
        handleClose,
        handleOpen,
        handleCloseOutside,
        news,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);
