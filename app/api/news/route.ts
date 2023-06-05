import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const news = await prisma.news.findMany({});

  return NextResponse.json(news);
}
