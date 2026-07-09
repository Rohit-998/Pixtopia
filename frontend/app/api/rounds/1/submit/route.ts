import { NextResponse } from "next/server";

/**
 * POST /api/rounds/1/submit
 * No-op in demo mode — just returns success.
 */
export async function POST() {
  return NextResponse.json({ success: true });
}
