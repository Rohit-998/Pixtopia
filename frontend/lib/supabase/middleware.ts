import { type NextRequest, NextResponse } from "next/server";

/**
 * Stub middleware — no Supabase session management needed in demo mode.
 */
export async function updateSession(request: NextRequest) {
  return {
    response: NextResponse.next({ request }),
    user: { id: "demo-user-pixtopia-2026", email: "demo@pixtopia.dev" },
  };
}
