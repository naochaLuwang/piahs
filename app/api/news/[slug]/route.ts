import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismadb";

interface IParams {
  slug?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { slug } = params;
  console.log(slug);
  const news = await prisma.news.findUnique({
    where: {
      slug: slug,
    },
  });

  return NextResponse.json(news);
}
