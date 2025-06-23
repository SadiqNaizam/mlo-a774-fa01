import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface CategoryNavProps {
  className?: string;
}

const categories = [
  'Movies',
  'Stream',
  'Events',
  'Plays',
  'Sports',
  'Activities'
] as const;

type Category = typeof categories[number];

const CategoryNav: React.FC<CategoryNavProps> = ({ className }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('Activities');

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6 border-b", className)}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={cn(
            "py-4 px-2 text-sm font-medium transition-colors duration-200 ease-in-out whitespace-nowrap",
            "text-muted-foreground hover:text-foreground focus:outline-none",
            {
              "text-primary border-b-2 border-primary": activeCategory === category,
              "border-b-2 border-transparent": activeCategory !== category,
            }
          )}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoryNav;
