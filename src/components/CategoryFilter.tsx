import React from 'react';

interface CategoryFilterProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
  categories: string[]
}

export default function CategoryFilter({ activeCategory, setActiveCategory, categories }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
