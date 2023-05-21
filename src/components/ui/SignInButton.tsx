'use client'

import { signIn } from 'next-auth/react'
import { FC, useState } from 'react'
import { Button } from '../ui'

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */


const SignInButton: FC = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true)
      await signIn('google')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button onClick={ signInWithGoogle } isLoading={isLoading}>
      Sign in
    </Button>
  )
}

export default SignInButton