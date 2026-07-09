/**
 * Local-only database module — no Supabase.
 * Provides static data for the demo/showcase version.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type RoundStatus = "locked" | "active" | "completed";

export interface RoundState {
  status: RoundStatus;
  startedAt: string | null;
}

export interface GameState {
  id: string;
  round_statuses: Record<string, RoundState>;
  hackerrank_url: string;
}

export interface Question {
  id: string;
  round_id: string;
  order: number;
  question?: string;
  options?: string[];
  correct_index: number;
  image_urls?: string[];
  letters?: string[];
  answer?: string;
  points: number;
}

export interface TeamData {
  id: string;
  team_name: string;
  points: number;
  leader_id: string;
  team_members_ids: string[];
  password: string;
}

export interface SubmissionData {
  team_id: string;
  round1?: {
    answers: Record<string, number>;
    score: number;
    submitted_at: string;
  };
  round3?: {
    answers: Record<string, number>;
    score: number;
    submitted_at: string;
  };
  round4?: {
    answers: Record<string, string>;
    score: number;
    submitted_at: string;
  };
}

// ─── Static game state — Round 1 is always active ─────────────────────────────

const DEMO_GAME_STATE: GameState = {
  id: "current",
  round_statuses: {
    "1": { status: "active", startedAt: new Date().toISOString() },
    "2": { status: "locked", startedAt: null },
    "3": { status: "locked", startedAt: null },
    "4": { status: "locked", startedAt: null },
    "5": { status: "locked", startedAt: null },
  },
  hackerrank_url: "",
};

// ─── Game State ───────────────────────────────────────────────────────────────

export async function getGameState(): Promise<GameState | null> {
  return DEMO_GAME_STATE;
}

export function subscribeToGameState(
  callback: (state: GameState | null) => void,
): () => void {
  // Emit immediately — no real-time subscription needed
  callback(DEMO_GAME_STATE);
  return () => {};
}

export async function startRound(_roundId: string): Promise<void> {}
export async function endRound(_roundId: string): Promise<void> {}
export async function updateHackerrankUrl(_url: string): Promise<void> {}

// ─── Questions ────────────────────────────────────────────────────────────────

export async function getRoundQuestions(_roundId: string): Promise<Question[]> {
  return [];
}

// ─── Scoring & Submissions ────────────────────────────────────────────────────

export async function scoreQuestion(
  _teamId: string,
  _questionId: string,
  _points: number,
): Promise<void> {}

export async function submitRound1Final(
  _teamId: string,
  _answers: Record<string, number>,
  _score: number,
): Promise<void> {}

export async function submitRound(
  _teamId: string,
  _roundId: string,
  _answers: Record<string, number | string>,
  _score: number,
): Promise<void> {}

export async function getTeamSubmission(
  _teamId: string,
): Promise<SubmissionData | null> {
  return null;
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export async function getTeamByLeader(
  _leaderId: string,
): Promise<TeamData | null> {
  return {
    id: "demo-team",
    team_name: "Explorer",
    points: 0,
    leader_id: "demo-user-pixtopia-2026",
    team_members_ids: [],
    password: "",
  };
}

export function subscribeToTeam(
  _teamId: string,
  _callback: (team: TeamData) => void,
): () => void {
  return () => {};
}

// ─── Leaderboard ──────────────────────────────────────────────────────────────

export function subscribeToLeaderboard(
  callback: (data: { name: string; points: number }[]) => void,
): () => void {
  callback([
    { name: "Explorer", points: 0 },
  ]);
  return () => {};
}
