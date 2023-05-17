'use client'
import { useTheme } from 'next-themes'
import { IconButton } from '@mui/material'
import { DarkModeOutlined, LightMode } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTheme('dark')
    setMounted(true)
  },[])

  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else if(theme==='light'){
      setTheme('dark')
    }
  }

  return (
  <>
    { theme === 'dark' && mounted ? (
      
      <IconButton onClick={ handleTheme } >
        <LightMode sx={{ color: grey[600] }} /> 
      </IconButton>
      
      ) : (
      
      <IconButton onClick={ handleTheme } >
         <DarkModeOutlined sx={{color: grey[600] }} /> 
      </IconButton>
    
    )}
</>
  )
}
export default ThemeToggle