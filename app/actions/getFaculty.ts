export async function getFaculty(id: string) {
  const response = await fetch(`${process.env.API_URL}/api/faculty/${id}`);
  return response.json();
}
