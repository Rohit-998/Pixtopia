/**
 * Stub server-side Supabase module — no real connections.
 * Kept so imports from API routes don't break.
 */

export async function createClient() {
  return {
    auth: {
      getSession: async () => ({ data: { session: null } }),
      getUser: async () => ({ data: { user: null } }),
    },
    from: () => ({
      select: () => ({
        eq: () => ({
          single: async () => ({ data: null, error: null }),
          maybeSingle: async () => ({ data: null, error: null }),
          order: () => ({ data: [], error: null }),
        }),
        or: () => ({
          single: async () => ({ data: null, error: null }),
        }),
        limit: () => ({
          single: async () => ({ data: null, error: null }),
        }),
        order: () => ({ data: [], error: null }),
      }),
      upsert: async () => ({ data: null, error: null }),
      insert: async () => ({ data: null, error: null }),
      update: async () => ({ data: null, error: null }),
    }),
  };
}

export async function getSessionUser() {
  return { id: "demo-user-pixtopia-2026", email: "demo@pixtopia.dev" };
}

export async function createAdminClient() {
  return (await createClient());
}
