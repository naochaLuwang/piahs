export async function getAllProgrammes() {
  const response: Response = await fetch(
    `https://piahs.vercel.app/api/programme`,
    {
      cache: "no-cache",
    }
  );
  return response.json();
}
