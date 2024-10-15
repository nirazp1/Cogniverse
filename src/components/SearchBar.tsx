import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className="mb-8 relative">
      <input
        type="text"
        placeholder="Search AI tools..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
    </div>
  )
}
