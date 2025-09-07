import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import SignInClient from './signin-client'

export default async function SignInPage({
  searchParams,
}: {
  searchParams?: Promise<{ redirect?: string }>
}) {
  const sp = (await searchParams) ?? {}
  const next = sp.redirect ?? '/'

  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) redirect(next)

  return <SignInClient redirectTo={next} />
}
