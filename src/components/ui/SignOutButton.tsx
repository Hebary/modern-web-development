'use client'

import { signOut } from 'next-auth/react'
import { FC, useState } from 'react'
import { Button } from '../ui'

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */

const SignOutButton: FC = () => {

  const signUserOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button onClick={signUserOut}>
      Sign out
    </Button>
  )
}

export default SignOutButton
