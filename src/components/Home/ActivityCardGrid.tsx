import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ActivityCard, { ActivityCardData } from './ActivityCard';
import { Button } from '@/components/ui/button';

interface ActivityCardGridProps {
  className?: string;
}

// CRITICAL: Define realistic, complex dummy data directly in this component file
const activitiesData: ActivityCardData[] = [
  {
    id: '1',
    title: 'VGP Wonder World Chennai',
    location: 'VGP Wonder World: Chennai',
    date: 'Sun, 22 Jun onwards',
    imageUrl: 'https://images.unsplash.com/photo-1599547849133-c28892a0aa15?q=80&w=300&h=400&fit=crop',
    isPromoted: true,
  },
  {
    id: '2',
    title: 'Ideal Beach Resort Day Outing',
    location: 'Ideal Beach Resort: Mahabalipuram',
    date: 'Mon, 23 Jun onwards',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=300&h=400&fit=crop',
    isPromoted: true,
  },
  {
    id: '3',
    title: 'Casagrand Sundance',
    location: 'Casagrand Suncity: Chennai',
    date: 'Sun, 22 Jun onwards',
    imageUrl: 'https://images.unsplash.com/photo-1608222353762-b42a0c6a5f3e?q=80&w=300&h=400&fit=crop',
    isPromoted: false,
  },
  {
    id: '4',
    title: 'VGP Marine Kingdom - Chennai',
    location: 'VGP Marine Kingdom: Chennai',
    date: 'Sun, 22 Jun onwards',
    imageUrl: 'https://images.unsplash.com/photo-1535402803932-a5834e3639a0?q=80&w=300&h=400&fit=crop',
    isPromoted: false,
  },
  {
    id: '5',
    title: 'Black Thunder Theme Park',
    location: 'Mettupalayam, Tamil Nadu',
    date: 'All week',
    imageUrl: 'https://images.unsplash.com/photo-1550923021-60a48a977533?q=80&w=300&h=400&fit=crop',
    isPromoted: false,
  },
  {
    id: '6',
    title: 'Adventure Zone',
    location: 'ECR, Chennai',
    date: 'Weekends only',
    imageUrl: 'https://images.unsplash.com/photo-1606937397839-245b14199596?q=80&w=300&h=400&fit=crop',
    isPromoted: true,
  },
  {
    id: '7',
    title: 'Night Food Street Tour',
    location: 'Various Locations, Chennai',
    date: 'Fri & Sat nights',
    imageUrl: 'https://images.unsplash.com/photo-1579308235284-35c0a2367d33?q=80&w=300&h=400&fit=crop',
    isPromoted: false,
  },
  {
    id: '8',
    title: 'MGM Dizzee World',
    location: 'Muttukadu, Chennai',
    date: 'All week',
    imageUrl: 'https://images.unsplash.com/photo-1565355272200-c9f5379a5455?q=80&w=300&h=400&fit=crop',
    isPromoted: false,
  },
];

const quickFilterTags = [
  'Amusement Parks',
  'Tourist Attractions',
  'Gaming',
  'Adventure',
  'Nightlife',
  'Food and Drinks',
  'Parties',
  'Unique Tours'
] as const;

type QuickFilterTag = typeof quickFilterTags[number];

const ActivityCardGrid: React.FC<ActivityCardGridProps> = ({ className }) => {
  const [activeTag, setActiveTag] = useState<QuickFilterTag | null>(null);

  const handleTagClick = (tag: QuickFilterTag) => {
    setActiveTag(prev => prev === tag ? null : tag);
  };

  return (
    <div className={cn("space-y-6", className)}>
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Activities In Chennai</h2>
        <div className="flex flex-wrap gap-2">
          {quickFilterTags.map((tag) => (
            <Button
              key={tag}
              variant={activeTag === tag ? 'default' : 'outline'}
              className={cn(
                "rounded-full h-8 px-4 text-xs font-medium",
                activeTag === tag ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-card text-foreground border-border hover:bg-accent'
              )}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {activitiesData.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityCardGrid;
