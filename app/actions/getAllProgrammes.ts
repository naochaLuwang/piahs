export async function getAllProgrammes() {
  const response: Response = await fetch(`http:127.0.0.1:3000/api/programme`, {
    cache: "no-store",
  });
  return response.json();
}
