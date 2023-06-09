'use client'

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

const Providers = ({ children }: {children: React.ReactNode }) => {

return (
     <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <SessionProvider>
               {children}
          </SessionProvider>     
     </ThemeProvider>
    )
}

export default Providers