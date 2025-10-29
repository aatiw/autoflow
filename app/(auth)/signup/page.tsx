import { RegisterForm } from '@/features/auth/components/register-form';
import { requireUnauth } from '@/lib/auth-utils';
import React from 'react'

async function Page() {
  await requireUnauth
  return (
    <div>
        <RegisterForm />
    </div>
  )
}

export default Page;