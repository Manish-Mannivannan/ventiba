'use client'

import { supabase } from './supabase'

export async function signInWithGoogle(redirectTo?: string) {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: redirectTo ?? window.location.origin },
  })
  if (error) throw error
}

export async function signInWithEmail(email: string) {
  const { error } = await supabase.auth.signInWithOtp({ email })
  if (error) throw error
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
