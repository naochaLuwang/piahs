export async function getSublinks(slug: string) {
  const response: Response = await fetch(
    `${process.env.API_URL}/api/sublinks/${slug}`
  );
  return response.json();
}
