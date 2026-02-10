import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const body = await req.json();
    const { id } = await params;

    const task = await prisma.task.update({
        where: { id },
        data: {
            completed: body.completed,
        },
    });

    return NextResponse.json(task);

}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    await prisma.task.delete({
        where: { id }
    });
    return NextResponse.json({ success: true });
}