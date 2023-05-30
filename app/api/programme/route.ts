import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const programmes = await prisma.programme.findMany({});

  return NextResponse.json(programmes);
}
