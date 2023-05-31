import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const album = await prisma.albulm.findMany({
    include: {
      images: true,
    },
  });

  return NextResponse.json(album);
}
