export async function getNews(slug: string) {
  const response = await fetch(`${process.env.API_URL}/api/news/${slug}`);
  return response.json();
}
