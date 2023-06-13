import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismadb";

interface IParams {
  id?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { id } = params;

  const faculty = await prisma.people.findUnique({
    where: {
      id: id,
    },
    include: {
      department: true,
      designation: true,
    },
  });

  return NextResponse.json(faculty);
}
