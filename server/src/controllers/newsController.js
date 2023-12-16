import { scrapeNews } from "../lib/scrapeNews.js";

export const getNews = async (req, res) => {
  const news = await scrapeNews(
    "https://timesofindia.indiatimes.com/topic/disability-in-india/news"
  );
  return res.status(200).json(news);
};
