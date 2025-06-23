import React from 'react';
import { cn } from '@/lib/utils';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '../Home/SearchBar';
import CategoryNav from '../Home/CategoryNav';

interface HeaderProps {
  className?: string;
}

// A simplified representation of the BookMyShow logo
const Logo = () => (
    <div className="flex items-center flex-shrink-0">
        <svg width="152" height="40" viewBox="0 0 152 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M127.893 0.383842C128.52 0.440263 129.13 0.531273 129.724 0.656873C137.98 2.30138 141.565 11.2335 139.92 19.4893C139.423 21.956 138.441 24.2859 137.07 26.3155L136.936 26.5162C133.785 30.9823 128.932 34.028 123.407 34.7871C122.99 34.8475 122.572 34.894 122.155 34.9272L121.055 35.0113C116.425 35.3434 112.564 32.8872 110.92 28.6318C110.25 26.8653 110.03 24.9455 110.284 23.0645C110.638 20.476 112.003 18.1575 114.07 16.5332C116.273 14.7958 119.043 13.9168 121.868 14.1283C124.286 14.3091 126.551 15.3533 128.188 16.989L129.288 18.0886C129.61 18.4111 130.15 18.4297 130.493 18.1311L135.253 14.0858C135.596 13.7872 135.613 13.2504 135.289 12.9092L134.189 11.7239C130.687 7.98647 125.756 5.86177 120.478 6.01886C112.169 6.25737 105.471 12.7933 105.19 21.135C104.893 29.988 111.13 37.1264 119.983 37.508C120.509 37.5342 121.036 37.5473 121.562 37.5473C128.537 37.5473 134.819 33.7443 138.452 28.2726L138.586 28.0719C140.246 25.6266 141.401 22.8428 141.935 19.9118C143.905 9.07421 139.145 0.90679 129.935 0.038284C129.26 -0.0181375 128.578 -0.0141954 127.893 0.038284Z" fill="#F84464"/>
            <text x="0" y="28" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="#1E293B">book<tspan fill="#F84464">my</tspan>show</text>
        </svg>
    </div>
);

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("bg-card z-50 w-full", className)}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <Logo />
              <div className="hidden lg:block w-full max-w-lg">
                <SearchBar />
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="ghost" className="hidden sm:flex items-center gap-2 text-foreground p-2">
                <span className='font-medium text-sm'>Chennai</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-4 sm:px-5 py-2 text-sm font-semibold">
                Sign In
              </Button>
              <Button variant="ghost" size="icon" className="flex items-center">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
        </div>
        <div className="lg:hidden px-0 pb-4">
          <SearchBar />
        </div>
        <CategoryNav />
      </div>
    </header>
  );
};

export default Header;
