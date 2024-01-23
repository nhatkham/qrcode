import connectMongoDB from "@/app/libs/utils";
import { NPS } from "@/app/libs/models";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { bu, question, score, comment, agent, IP } = await request.json();
    console.log(request.json());
    
    await connectMongoDB();
    await NPS.create({ bu, question, score, comment, agent, IP });

    return NextResponse.json({ message: "Survey Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating survey:", error);
    return NextResponse.json({ error: "Failed to create survey" }, { status: 500 });
  }
}

// Rest of your code...


export async function GET() {
  await connectMongoDB();
  const items = await NPS.find();
  return NextResponse.json({ items });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await NPS.findByIdAndDelete(id);
  return NextResponse.json({ message: "Survey deleted" }, { status: 200 });
}