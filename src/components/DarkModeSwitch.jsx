'use client';
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme
    useEffect(() => setMounted(true), []);
  return (
    <div>
        {mounted && (currentTheme === 'dark' ? ( 
        <MdLightMode 
            onClick={() => setTheme('light')} 
            className='text-xl mx-2 cursor-pointer hover:text-sky-500 transition-[.3s]' 
        />
    ) : (
        <MdDarkMode 
            onClick={() => setTheme('dark')} 
            className='text-xl mx-2 cursor-pointer hover:text-sky-500 transition-[.3s]' 
        /> 
        ))}
    </div>
  )
}
