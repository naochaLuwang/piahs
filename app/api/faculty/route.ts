import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const faculty = await prisma.people.findMany({});

  return NextResponse.json(faculty);
}
