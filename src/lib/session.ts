'use client'
import { useEffect, useState } from 'react'
import { supabase } from './supabase/client'

type SessionUser = {
  id: string
  email: string | null
}

export function useSession() {
  const [user, setUser] = useState<SessionUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const load = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!mounted) return
      const u: SessionUser | null = session?.user
        ? { id: session.user.id, email: session.user.email ?? null }
        : null
      setUser(u)
      setLoading(false)
      if (u) localStorage.setItem('sb_user', JSON.stringify(u))
      else localStorage.removeItem('sb_user')
    }

    load()

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      const u: SessionUser | null = session?.user
        ? { id: session.user.id, email: session.user.email ?? null }
        : null
      setUser(u)
      setLoading(false)
      if (u) localStorage.setItem('sb_user', JSON.stringify(u))
      else localStorage.removeItem('sb_user')
    })

    return () => {
      mounted = false
      sub.subscription.unsubscribe()
    }
  }, [])

  return { user, loading }
}
