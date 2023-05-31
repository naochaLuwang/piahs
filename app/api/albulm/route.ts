import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization");

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "Unauthorized",
      }),
      {
        status: 401,
      }
    );
  }

  const album = await prisma.albulm.findMany({
    include: {
      images: true,
    },
  });

  return NextResponse.json(album);
}
