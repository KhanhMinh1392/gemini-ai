import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ReactNode } from 'react';

interface VToolTipProps {
  children: ReactNode;
  placeholder: string;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  position?: 'start' | 'center' | 'end';
}

export function VToolTip({ children, placeholder, direction = 'right', position = 'start' }: Readonly<VToolTipProps>) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={direction} sideOffset={10} align={position}>
          <p>{placeholder}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
