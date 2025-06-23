import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div className={cn("relative w-full max-w-lg", className)}>
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search for Movies, Events, Plays, Sports and Activities"
        className="pl-10 h-10 w-full bg-background border border-input rounded-md focus:ring-primary focus:border-primary"
      />
    </div>
  );
};

export default SearchBar;
