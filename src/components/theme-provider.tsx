"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      scriptProps={{
        // React 19 warns when a <script> is rendered from a component on the
        // client ("Scripts inside React components are never executed...").
        // next-themes injects an inline anti-flash script that only needs to
        // run on the server (it's already in the initial HTML), so render it
        // as a real script on the server and inert text/plain on the client,
        // exactly like Next.js's own InlineScript pattern. suppressHydrationWarning
        // (set by next-themes) covers the type mismatch across the boundary.
        type: typeof window === "undefined" ? "text/javascript" : "text/plain",
      }}
    >
      {children}
    </NextThemesProvider>
  );
}