"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Moon, Sun, ExternalLink } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const aiWebsites = [
  { name: "ChatGPT", url: "https://chat.openai.com", description: "Powerful language model for conversation and text generation", category: "Generative AI" },
  { name: "DALL-E", url: "https://labs.openai.com", description: "AI system that creates realistic images and art from text descriptions", category: "Image Generation" },
  { name: "Midjourney", url: "https://www.midjourney.com", description: "AI-powered tool for generating images from textual descriptions", category: "Image Generation" },
  { name: "Anthropic Claude", url: "https://www.anthropic.com", description: "Advanced AI assistant for various tasks and conversations", category: "Generative AI" },
  { name: "Hugging Face", url: "https://huggingface.co", description: "Platform for building, training and deploying state-of-the-art ML models", category: "Machine Learning" },
  { name: "Runway ML", url: "https://runwayml.com", description: "Creative tools powered by artificial intelligence", category: "Video Generation" },
  { name: "Replika", url: "https://replika.ai", description: "AI companion for conversations and emotional support", category: "Chatbots" },
  { name: "DeepL", url: "https://www.deepl.com", description: "AI-powered language translation tool", category: "Language Processing" },
  { name: "Jasper", url: "https://www.jasper.ai", description: "AI writing assistant for creating content", category: "Content Generation" },
  { name: "Lensa", url: "https://prisma-ai.com/lensa", description: "AI-powered photo and video editing app", category: "Image Editing" },
  { name: "Stable Diffusion", url: "https://stability.ai", description: "Open-source text-to-image generation model", category: "Image Generation" },
  { name: "Synthesia", url: "https://www.synthesia.io", description: "AI video generation platform", category: "Video Generation" },
]

const categories = ["All", ...new Set(aiWebsites.map(website => website.category))]

export default function AICollection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Check for saved theme preference or use light mode as default
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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

  const filteredWebsites = aiWebsites.filter(website =>
    (selectedCategory === "All" || website.category === selectedCategory) &&
    (website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    website.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    website.category.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} font-sans`}>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <motion.header
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
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
                AI Collection
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

        <main className="container mx-auto px-4 pt-24 pb-12">
          <motion.div
            className="relative max-w-4xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Input
              type="text"
              placeholder="Search AI tools..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-all duration-300 shadow-md text-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </motion.div>

          <motion.p
            className="text-center text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the latest and greatest in artificial intelligence tools and platforms
          </motion.p>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-lg'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <AnimatePresence>
              {filteredWebsites.map((website, index) => (
                <motion.div
                  key={website.name}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{website.name}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">{website.category}</p>
                    <p className="text-base text-gray-700 dark:text-gray-300 mb-6 font-light">{website.description}</p>
                    <a href={website.url} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-base flex items-center justify-center">
                        Visit Website
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </main>

        <motion.footer
          className="bg-gray-100 dark:bg-gray-800 py-6 mt-16"
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