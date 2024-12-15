import { Button } from '@/components/ui/button';
import { cn } from '@/utils';

export const LandingRoute = () => {
  return (
    <h1 className={cn('p-4', 'bg-blue-50', 'text-center')}>
      Welcome to react seed app
      <Button
        onClick={() => console.log('Clicked!!')}
        size="default"
        variant="default"
      >
        Default
      </Button>
    </h1>
  );
};
