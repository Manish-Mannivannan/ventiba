'use client'

import { useEffect, useState } from 'react'
import { supabase } from './supabase'

export type SessionState = {
  user: Awaited<ReturnType<typeof supabase.auth.getUser>>['data']['user'] | null
  accessToken: string | null
  loading: boolean
}

export function useSession() {
  const [state, setState] = useState<SessionState>({
    user: null,
    accessToken: null,
    loading: true,
  })

  useEffect(() => {
    let mounted = true

    const load = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!mounted) return
      setState({
        user: session?.user ?? null,
        accessToken: session?.access_token ?? null,
        loading: false,
      })
      // optional: keep a lightweight mirror for your app logic
      if (session?.user) {
        localStorage.setItem('sb_user', JSON.stringify({
          id: session.user.id,
          email: session.user.email,
        }))
      } else {
        localStorage.removeItem('sb_user')
      }
    }

    load()

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setState({
        user: session?.user ?? null,
        accessToken: session?.access_token ?? null,
        loading: false,
      })
      if (session?.user) {
        localStorage.setItem('sb_user', JSON.stringify({
          id: session.user.id,
          email: session.user.email,
        }))
      } else {
        localStorage.removeItem('sb_user')
      }
    })

    return () => {
      mounted = false
      sub.subscription.unsubscribe()
    }
  }, [])

  return state
}
