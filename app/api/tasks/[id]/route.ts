import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
    req: Request,
    { params }: { params: { id: String } }
) {
    const body = await req.json();

    const task = await prisma.task.update({
        where: { id: params.id },
        data: {
            completed: body.completed,
        },
    });

    return NextResponse.json(task);
    
}

export async function DELETE(
    req: Request, 
    {params} : {params: {id:String}}
) {
    await prisma.task.delete({
        where:{id:params.id}
    })
    return NextResponse.json({success:true})
}