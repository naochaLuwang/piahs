import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismadb";

interface IParams {
  slug?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { slug } = params;
  console.log(slug);
  const degreeProgramme = await prisma.programme.findMany({
    where: {
      programmeType: slug,
    },
  });

  return NextResponse.json(degreeProgramme);
}
