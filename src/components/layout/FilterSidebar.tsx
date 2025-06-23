import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';

interface FilterSidebarProps {
  className?: string;
}

const dateFilters = ['Today', 'Tomorrow', 'This Weekend'] as const;
type DateFilter = typeof dateFilters[number];

const categories = [
  'Amusement Parks',
  'Tourist Attractions',
  'Gaming',
  'Adventure',
  'Nightlife',
  'Food and Drinks'
] as const;
type Category = typeof categories[number];

const FilterSidebar: React.FC<FilterSidebarProps> = ({ className }) => {
  const [activeDate, setActiveDate] = useState<DateFilter | null>('Today');
  const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(new Set());
  const [priceRange, setPriceRange] = useState<[number]>([500]);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const clearDateFilters = () => setActiveDate(null);
  const clearCategoryFilters = () => setSelectedCategories(new Set());
  const clearPriceFilters = () => setPriceRange([0]);


  return (
    <aside className={cn("w-64 bg-card h-full", className)}>
      <div className="py-6 space-y-6">
        <h2 className="text-2xl font-bold text-foreground px-4">Filters</h2>
        
        <Accordion type="multiple" defaultValue={['date']} className="w-full">
          <AccordionItem value="date" className="border-b-0">
            <AccordionTrigger className="text-base font-semibold hover:no-underline px-4 py-3 justify-between">
                <span>Date</span>
                <Button variant="link" className="text-primary p-0 h-auto font-normal text-sm" onClick={(e) => {e.stopPropagation(); clearDateFilters();}}>Clear</Button>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4 px-4 space-y-4">
              <div className="flex flex-wrap gap-2">
                {dateFilters.map(filter => (
                  <Button
                    key={filter}
                    variant={activeDate === filter ? 'default' : 'outline'}
                    className={cn(
                      "font-normal h-9 px-3 rounded-md",
                      activeDate === filter ? 'bg-primary text-primary-foreground' : 'border-primary text-primary hover:bg-primary/10 hover:text-primary'
                    )}
                    onClick={() => setActiveDate(filter)}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="date-range" />
                <Label htmlFor="date-range" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Date Range
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <Separator />

          <AccordionItem value="categories" className="border-b-0">
            <AccordionTrigger className="text-base font-semibold hover:no-underline px-4 py-3 justify-between">
                <span>Categories</span>
                <Button variant="link" className="text-primary p-0 h-auto font-normal text-sm" onClick={(e) => {e.stopPropagation(); clearCategoryFilters();}}>Clear</Button>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4 px-4 space-y-3">
              {categories.map(category => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={category} 
                    checked={selectedCategories.has(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label htmlFor={category} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {category}
                  </Label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          <Separator />
          
          <AccordionItem value="price" className="border-b-0">
            <AccordionTrigger className="text-base font-semibold hover:no-underline px-4 py-3 justify-between">
                <span>Price</span>
                <Button variant="link" className="text-primary p-0 h-auto font-normal text-sm" onClick={(e) => {e.stopPropagation(); clearPriceFilters();}}>Clear</Button>
            </AccordionTrigger>
            <AccordionContent className="pt-6 pb-4 px-4 space-y-2">
                <Slider
                    defaultValue={priceRange}
                    max={5000}
                    step={100}
                    onValueChange={(value) => setPriceRange(value as [number])}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹0</span>
                    <span>₹{priceRange[0]}</span>
                    <span>₹5000</span>
                </div>
            </AccordionContent>
          </AccordionItem>
          
          <Separator />
        </Accordion>

        <div className='px-4 pt-2'>
            <Button variant="outline" className='w-full border-primary text-primary hover:bg-primary/10 hover:text-primary'>
                Browse by Venues
            </Button>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
