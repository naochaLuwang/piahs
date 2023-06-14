export async function getFaculty(slug: string) {
  const response = await fetch(`${process.env.API_URL}/api/faculty/${slug}`);
  return response.json();
}
