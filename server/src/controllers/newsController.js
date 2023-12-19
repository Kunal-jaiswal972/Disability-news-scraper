import { scrapeNews } from "../lib/scrapeNews.js";
import { CacheSchema } from "../models/cacheSchema.js";

export const getNews = async (req, res) => {
  const { page = 1, newsPerPage = 10 } = req.query;

  const url = `https://timesofindia.indiatimes.com/topic/disability/news/${page}`;

  const existingNews = await CacheSchema.findOne({
    url,
  });

  //implement time function
  if (existingNews) {
    console.log(`Data for ${url} already exists in the database.`);
    return res.status(200).json(existingNews);
  }

  const scrapedNews = await scrapeNews(url);

  await CacheSchema.create({
    url,
    news: scrapedNews,
  });

  return res.status(200).json({ news: scrapedNews });
};
