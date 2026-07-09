import { NextResponse } from "next/server";

/**
 * GET /api/game/state
 * Returns static game state — Round 1 active, rest locked.
 */
export async function GET() {
  return NextResponse.json({
    id: "current",
    round_statuses: {
      "1": { status: "active", startedAt: new Date().toISOString() },
      "2": { status: "locked", startedAt: null },
      "3": { status: "locked", startedAt: null },
      "4": { status: "locked", startedAt: null },
      "5": { status: "locked", startedAt: null },
    },
    hackerrank_url: "",
  });
}

/**
 * POST /api/game/state — no-op in demo mode
 */
export async function POST() {
  return NextResponse.json({ success: true });
}
