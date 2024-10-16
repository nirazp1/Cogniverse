import React, { useState, useMemo } from 'react';
import { mockAITools } from '../mockData';
import AIToolGrid from './AIToolGrid';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

const AIToolsList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const uniqueTools = useMemo(() => {
    const uniqueMap = new Map();
    mockAITools.forEach(tool => {
      if (!uniqueMap.has(tool.name)) {
        uniqueMap.set(tool.name, tool);
      }
    });
    return Array.from(uniqueMap.values());
  }, []);

  const sortedTools = useMemo(() => {
    return [...uniqueTools].sort((a, b) => a.category[0].localeCompare(b.category[0]));
  }, [uniqueTools]);

  const filteredTools = useMemo(() => {
    return sortedTools.filter((tool) => {
      const categoryMatch = selectedCategory === 'all' || tool.category.includes(selectedCategory);
      const searchMatch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchTerm, sortedTools]);

  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    categorySet.add('all');
    sortedTools.forEach(tool => tool.category.forEach((cat: string) => categorySet.add(cat)));
    return Array.from(categorySet);
  }, [sortedTools]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto px-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter 
        activeCategory={selectedCategory} 
        setActiveCategory={handleCategoryChange} 
        categories={categories} 
      />
      <AIToolGrid tools={filteredTools} />
    </div>
  );
};

export default AIToolsList;
