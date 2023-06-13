export async function getAllFaculty() {
  const response: Response = await fetch(`${process.env.API_URL}/api/faculty`, {
    cache: "no-cache",
  });
  return response.json();
}
