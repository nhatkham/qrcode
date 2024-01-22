import connectMongoDB from "@/app/libs/utils";
import { NPS } from "@/app/libs/models";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { bu, question, score, comment, agent, IP } = await request.json();
  await connectMongoDB();
  await NPS.create({ bu, question, score, comment, agent, IP });
  return NextResponse.json({ message: "Survey Created" }, { status: 201 });
}

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