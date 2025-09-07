"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function SignInClient({ redirectTo }: { redirectTo: string }) {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const withGoogle = async () => {
    try {
      const origin = window.location.origin;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${origin}${redirectTo}`,
          scopes: "openid email profile",
          queryParams: { prompt: "consent" },
        },
      });
      if (error) alert(error.message);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Unknown sign-in error";
      alert(msg);
    }
  };

  const withEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const origin = window.location.origin;
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${origin}${redirectTo}` },
      });
      if (error) throw error;
      alert("Check your email for a magic link.");
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      alert(msg);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-[60vh] grid place-items-center p-6">
      <div className="w-full max-w-sm grid gap-4">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <button onClick={withGoogle} className="border px-3 py-2 rounded">
          Continue with Google
        </button>

        <div className="text-center text-sm text-gray-500">or</div>

        <form onSubmit={withEmail} className="grid gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="border px-3 py-2 rounded"
          />
          <button
            type="submit"
            disabled={sending}
            className="border px-3 py-2 rounded disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send magic link"}
          </button>
        </form>

        <a
          href={redirectTo}
          className="justify-self-center text-sm underline opacity-80"
        >
          Continue as guest
        </a>
      </div>
    </main>
  );
}
