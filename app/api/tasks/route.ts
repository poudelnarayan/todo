import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const body = await req.json();

    const task = await prisma.task.create({
        data: {
            title: body.title,
            description: body.description
        }
    });
    return NextResponse.json(task);
}


export async function GET() {
    const task = await prisma.task.findMany({
        orderBy: { createdAt: "desc", }
    });


    return NextResponse.json(task);
}