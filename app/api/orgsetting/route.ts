import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const orgsetting = await prisma.orgsetting.findMany({});

  return NextResponse.json(orgsetting);
}
