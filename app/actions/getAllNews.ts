export async function getAllNews() {
  const response: Response = await fetch(`${process.env.API_URL}/api/news`, {
    cache: "no-cache",
  });
  return response.json();
}
