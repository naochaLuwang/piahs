import { getServerSession } from "next-auth/next";


export async function getAllLinks() {


    const response: Response = await fetch(`${process.env.API_URL}/api/links`)
    return response.json();
}
