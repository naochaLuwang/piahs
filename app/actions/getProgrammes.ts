export async function getProgrammes(slug: string) {
  const response = await fetch(`${process.env.API_URL}/api/programme/${slug}`, {
    cache: "no-store",
  });
  return response.json();
}
