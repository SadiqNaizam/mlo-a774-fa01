import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';
import FilterSidebar from './FilterSidebar';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("grid grid-cols-[256px_1fr] grid-rows-[auto_1fr] h-screen bg-surface", className)}>
      <div className="col-span-2 shadow-sm z-10 bg-card">
        <Header />
      </div>

      <div className="row-start-2 col-start-1 h-full overflow-y-auto border-r border-border bg-card">
        <FilterSidebar />
      </div>

      <main className="row-start-2 col-start-2 h-full overflow-y-auto">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
