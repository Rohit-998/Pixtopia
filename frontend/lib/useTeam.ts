"use client";
import { useState } from "react";
import type { TeamData, SubmissionData } from "./database";

/**
 * Demo-mode useTeam hook — returns static team data.
 * No Supabase, no real-time subscriptions.
 */
export function useTeam() {
  const [team] = useState<TeamData>({
    id: "demo-team",
    team_name: "Explorer",
    points: 0,
    leader_id: "demo-user-pixtopia-2026",
    team_members_ids: [],
    password: "",
  });
  const [submission] = useState<SubmissionData | null>(null);
  const [loading] = useState(false);

  const refreshSubmission = async () => {};

  return { team, submission, loading, refreshSubmission };
}
