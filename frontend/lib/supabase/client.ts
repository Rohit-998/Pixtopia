/**
 * Stub Supabase client — no actual Supabase connection.
 * Kept so imports don't break; all real data is served from local files.
 */

export function createClient(): any {
  return {
    auth: {
      getSession: async () => ({ data: { session: null } }),
      getUser: async () => ({ data: { user: null } }),
      signInWithPassword: async () => ({ error: null }),
      signOut: async () => {},
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    },
    channel: () => ({
      on: () => ({ subscribe: () => ({}) }),
      subscribe: () => ({}),
    }),
    removeChannel: () => {},
  };
}
