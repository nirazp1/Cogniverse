"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import AIToolsList from '@/components/AIToolsList'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) return null

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} font-sans`}>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <motion.header
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <motion.h1
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 font-serif tracking-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Cogniverse
              </motion.h1>
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <Switch
                  checked={darkMode}
                  onCheckedChange={toggleDarkMode}
                  className="bg-gray-300 dark:bg-gray-700"
                />
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </motion.div>
            </div>
          </div>
        </motion.header>

        <main className="container mx-auto px-4 py-8 pt-24 font-sans">
          <AIToolsList />
        </main>

        <motion.footer
          className="bg-gray-100 dark:bg-gray-800 py-6 mt-16 font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="container mx-auto px-4 text-center text-base text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 AI Collection. All rights reserved.</p>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}
