import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismadb";

interface IParams {
  slug?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { slug } = params;
  console.log(slug);
  const sublink = await prisma.links.findMany({
    where: {
      title: slug,
    },
    include: {
      sublinks: true,
    },
  });

  return NextResponse.json(sublink);
}
