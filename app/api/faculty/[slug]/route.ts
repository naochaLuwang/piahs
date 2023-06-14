import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismadb";

interface IParams {
  slug?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { slug } = params;

  const faculty = await prisma.people.findFirst({
    where: {
      slug: slug,
    },
    include: {
      department: true,
      designation: true,
    },
  });

  return NextResponse.json(faculty);
}
