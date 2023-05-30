export async function getAllProgrammes() {
  const response: Response = await fetch(
    `${process.env.API_URL}/api/programme`,
    {
      cache: "no-cache",
    }
  );
  return response.json();
}
