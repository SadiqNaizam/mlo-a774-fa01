import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// MANDATORY: Define explicit interface with proper types
export interface ActivityCardData {
  id: string;
  title: string;
  location: string;
  date: string;
  imageUrl: string;
  isPromoted: boolean;
}

interface ActivityCardProps {
  activity: ActivityCardData;
  className?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, className }) => {
  return (
    <Card className={cn("w-full overflow-hidden rounded-lg border-0 shadow-none bg-transparent group", className)}>
       <div className="relative overflow-hidden rounded-lg">
        <AspectRatio ratio={3 / 4}>
          <img
            src={activity.imageUrl}
            alt={activity.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
        
        {activity.isPromoted && (
          <Badge
            variant="default"
            className="absolute top-2 left-2 bg-primary text-primary-foreground rounded-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider"
          >
            Promoted
          </Badge>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white text-sm font-semibold truncate">{activity.date}</p>
        </div>
      </div>
      <CardContent className="p-0 pt-3 space-y-1">
        <h3 className="font-bold text-base text-card-foreground leading-snug truncate">{activity.title}</h3>
        <p className="text-sm text-muted-foreground truncate">{activity.location}</p>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
