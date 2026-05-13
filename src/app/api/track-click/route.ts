import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log structured data to server console
    console.log("[TRACK-CLICK]", JSON.stringify(data, null, 2));

    // Future: Save to Supabase or Vercel Postgres here
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[TRACK-CLICK ERROR]", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
