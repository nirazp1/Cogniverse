import Image from 'next/image'
import { AITool } from "@/types/AITool"

interface AIToolGridProps {
  tools: AITool[]
}

export default function AIToolGrid({ tools }: AIToolGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {tools.map(tool => (
        <div key={tool.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
          {tool.image && (
            <div className="relative w-full h-48">
              <Image 
                src={tool.image} 
                alt={tool.name} 
                layout="fill" 
                objectFit="cover"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{tool.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{tool.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{tool.pricing}</p>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Visit Site
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
