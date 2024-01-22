import connectMongoDB from "@/app/libs/utils";
import { NPS } from "@/app/libs/models";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const item = await NPS.findOne({ _id: id });
  return NextResponse.json({ item }, { status: 200 });
}