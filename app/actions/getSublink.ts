export async function getSubLink(slug: string): Promise<SubLinkProps> {
    const response = await fetch(`${process.env.API_URL}/api/sublinks/${slug}`);
    return response.json();
}
