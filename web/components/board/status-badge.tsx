import React from 'react';

import { Badge } from '../ui/badge';

import { STATUS_COLOR } from '@/lib/constants';
import { cn } from '@/lib/utils';

type TableCellStatusProps = {
  status: 'Applied' | 'Invitation' | 'Rejected' | 'Archived';
};

export const StatusBadge = ({ status }: TableCellStatusProps) => {
  const { circle, text } = STATUS_COLOR[status];

  return (
    <Badge variant='secondary' className='flex w-[5.5rem] items-center rounded-lg py-2'>
      <div className={cn('mr-2 h-1.5 w-1.5 rounded-full', circle)} />
      <span className={cn('font-medium', text)}>{status}</span>
    </Badge>
  );
};
