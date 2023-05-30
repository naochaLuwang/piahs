export async function getProgrammes(slug: string) {
  const response = await fetch(
    `https://piahs.vercel.app/api/programme/${slug}`
  );
  return response.json();
}
