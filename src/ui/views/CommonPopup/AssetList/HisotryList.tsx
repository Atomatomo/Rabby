import React from 'react';
import { ReactComponent as SkeletonHistorySVG } from '@/ui/assets/dashboard/skeleton-history.svg';
import clsx from 'clsx';

export const HistoryList: React.FC = () => {
  return (
    <div className={clsx('flex flex-col text-center', 'gap-y-20 mt-[80px]')}>
      <SkeletonHistorySVG className="m-auto" />
      <div className="text-15 text-gray-comment font-medium">
        Coming Soon...
      </div>
    </div>
  );
};
