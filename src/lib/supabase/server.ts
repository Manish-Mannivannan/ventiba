import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export function getServerSupabase() {
  const cookieStore = cookies()
  return createServerComponentClient({ cookies })
}
