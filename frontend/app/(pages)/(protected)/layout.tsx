"use client";

/**
 * Protected layout — auth bypass for demo/showcase mode.
 * All pages are accessible without login.
 */
export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
