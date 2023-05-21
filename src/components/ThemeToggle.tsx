'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { HiOutlineMoon } from 'react-icons/hi';
import { FiSun } from 'react-icons/fi';


const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTheme('dark')
    setMounted(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div onClick={ handleTheme } className='flex w-30 text-slate-300 h-30 cursor-pointer mt-1 rounded-full border border-transparent p-2 hover:bg-slate-800 hover:text-slate-200 transition'>
        <FiSun size={18} />  
      </div>
    ) : (
      <div onClick={ handleTheme } className='flex w-30 h-30 text-slate-700 cursor-pointer mt-1 rounded-full border p-2 hover:bg-slate-200 hover:text-slate-900 transition'>
        <HiOutlineMoon size={18} />  
      </div>
      )
    }
  </>
  )
}

export default ThemeToggle