import { NextResponse } from "next/server";
import prisma from "../../../lib/prismadb";
export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, message } = body;

  const newMessage = await prisma?.message.create({
    data: {
      name: name,
      phone: phone,
      message: message,
    },
  });

  return NextResponse.json(newMessage);
}
