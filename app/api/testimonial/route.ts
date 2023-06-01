import prisma from "../../../lib/prismadb";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const testimonial = await prisma.testimonial.findMany({});

  return NextResponse.json(testimonial);
}
