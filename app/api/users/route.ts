import { NextRequest, NextResponse } from "next/server";
import prisma from "prisma/client/client";
import { Schema } from "app/api/users/schema";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const users = await prisma.users.findMany();

  return NextResponse.json(users, { status: 200 });
}
export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = Schema.safeParse(body);

  const user = await prisma.users.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user) {
    return NextResponse.json(
      { error: "User already exists!" },
      { status: 400 }
    );
  }

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }

  const newUser = await prisma.users.create({
    data: {
      name: body.name,
      email: body.email,
      size: body.size || "medium",
    },
  });

  return NextResponse.json({ newUser }, { status: 201 });
}
export async function PUT(request: NextRequest) {
  const body = await request.json();

  const user = await prisma.users.findUnique({
    where: {
      id: body.id,
    },
  });

  if (!user) {
    return NextResponse.json(
      {
        error: "User not found!",
      },
      {
        status: 404,
      }
    );
  }

  const updatedUser = await prisma.users.update({
    where: {
      id: user?.id,
    },
    data: {
      name: body.name,
      email: body.email,
      followers: body.followers,
      isActive: body.isActive,
      size: body.size,
    },
  });

  return NextResponse.json({ updatedUser }, { status: 200 });
}
export async function DELETE(request: NextRequest) {
  const body = await request.json();

  const user = await prisma.users.findUnique({
    where: {
      id: body.id,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found!" }, { status: 404 });
  }

  await prisma.users.delete({ where: { id: user?.id } });

  return NextResponse.json(
    {
      message: "User has been successfullt deleted!",
    },
    { status: 200 }
  );
}
