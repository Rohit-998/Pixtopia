/**
 * Stub server-side Supabase module — no real connections.
 * Returns a deeply-chainable proxy so ANY sequence of
 * .from().select().eq().or().order().single() etc. compiles & runs.
 */

function chainProxy(): any {
  const handler: ProxyHandler<any> = {
    get(_target, prop) {
      // Terminal async methods — return demo data
      if (prop === "single" || prop === "maybeSingle") {
        return async () => ({ data: { id: "demo-team" } as any, error: null });
      }
      if (prop === "then") return undefined;        // not a real Promise
      if (prop === "subscribe") return () => ({});   // realtime stub
      // Everything else returns another chainable proxy
      return (..._args: any[]) => chainProxy();
    },
  };
  return new Proxy(() => {}, handler);
}

function createStubClient(): any {
  return {
    auth: {
      getSession: async () => ({
        data: { session: { user: { id: "demo-user-pixtopia-2026", email: "demo@pixtopia.dev" } } },
        error: null,
      }),
      getUser: async () => ({
        data: { user: { id: "demo-user-pixtopia-2026", email: "demo@pixtopia.dev" } },
        error: null,
      }),
    },
    from: (..._args: any[]) => chainProxy(),
    channel: () => ({ on: () => ({ subscribe: () => ({}) }), subscribe: () => ({}) }),
    removeChannel: () => {},
  };
}

export async function createClient() {
  return createStubClient();
}

export async function getSessionUser() {
  return { id: "demo-user-pixtopia-2026", email: "demo@pixtopia.dev" };
}

export async function createAdminClient() {
  return createStubClient();
}
