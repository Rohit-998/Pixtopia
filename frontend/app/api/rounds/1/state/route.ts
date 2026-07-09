import { NextResponse } from "next/server";
import questionsData from "@/data/round1-questions.json";

/**
 * GET /api/rounds/1/state
 * Serves round 1 questions from local JSON — no Supabase.
 */
export async function GET() {
  return NextResponse.json({
    questions: questionsData,
    teamProgress: {
      current_question: 0,
      questions_answered: 0,
      question_start_times: {},
      is_completed: false,
    },
    teamPoints: 0,
    roundScore: 0,
    answers: {},
    roundStartedAt: new Date().toISOString(),
  });
}
