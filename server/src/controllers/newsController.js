import { scrapeNews } from "../lib/scrapeNews.js";

export const getNews = async (req, res) => {
  const { page = 1, newsPerPage = 10 } = req.query;

  const news = await scrapeNews(
    `https://timesofindia.indiatimes.com/topic/disability/news/${page}`
  );
  return res.status(200).json(news);
};
 