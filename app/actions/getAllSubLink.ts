export async function getAllSubLinks() {
  const response: Response = await fetch(
    `${process.env.API_URL}/api/sublinks`,
    {
      cache: "no-cache",
    }
  );
  return response.json();
}
