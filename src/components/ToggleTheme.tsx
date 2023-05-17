'use client'
import { IconButton } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
import { useTheme } from 'next-themes'

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <IconButton onClick={ handleTheme } >
      {theme === 'dark' ? ( <LightMode sx={{ color: grey[600] }} /> ) : ( <DarkMode className='text-slate-800' /> ) }
    </IconButton>
  )
}