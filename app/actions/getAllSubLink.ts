export async function getAllSubLinks() {
  const response: Response = await fetch(`${process.env.API_URL}/api/sublink`);
  return response.json();
}
