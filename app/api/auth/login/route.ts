import {  NextResponse } from "next/server"
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const req = await request.json();
  return NextResponse.json({ success: true, req })
}

export const GET = async () => { }