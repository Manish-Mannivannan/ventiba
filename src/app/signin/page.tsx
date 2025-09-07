import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import SignInClient from './signin-client'

export default async function SignInPage({
  searchParams,
}: {
  searchParams?: { redirect?: string }
}) {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const next = searchParams?.redirect || '/'
  if (session) redirect(next) // already logged in → bounce to target

  return <SignInClient redirectTo={next} />
}
