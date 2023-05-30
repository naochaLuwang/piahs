export async function getProgrammes(slug: string) {
  const response = await fetch(`http://127.0.0.1:3000/api/programme/${slug}`, {
    cache: "no-store",
  });
  return response.json();
}
