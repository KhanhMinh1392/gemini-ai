'use client';

import { cn } from '@/lib/utils';
import { AlignJustify, CircleHelp, History, Plus, Settings } from 'lucide-react';
import { useState } from 'react';
import { VToolTip } from '../tooltip';

export default function Sidebar() {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <nav className={cn('flex w-[4.25rem] flex-col bg-blue-100 duration-300 ease-in-out', isExpand && 'w-72')}>
      <VToolTip direction="bottom" placeholder={!isExpand ? 'Mở rộng trình đơn' : 'Thu gọn trình đơn'}>
        <button
          className="ml-[.625rem] mt-3 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full hover:bg-blue-200"
          onClick={() => setIsExpand(!isExpand)}
        >
          <AlignJustify width={20} height={20} />
        </button>
      </VToolTip>
      <div className="ml-[.875rem] mt-11 flex flex-1 flex-col justify-between">
        <VToolTip direction="bottom" placeholder="Cuộc trò truyện mới">
          <button
            className={cn(
              'flex h-10 w-10 cursor-pointer items-center gap-4 overflow-hidden rounded-full bg-blue-200 pl-[.625rem] duration-300 ease-in-out',
              isExpand && 'w-52',
            )}
          >
            <div className="h-5 w-5">
              <Plus width={20} height={20} className="text-gray-500" />
            </div>
            <p className="whitespace-nowrap text-sm text-gray-400">Cuộc trò chuyện mới</p>
          </button>
        </VToolTip>
        <ul className={cn('mx-[.125rem] flex w-fit flex-col justify-center space-y-1', isExpand && 'w-full pr-4')}>
          <li
            className={cn(
              'h-9 w-[2.125rem] cursor-pointer overflow-hidden rounded-full p-2 hover:bg-blue-200',
              isExpand && 'w-full',
            )}
          >
            <VToolTip placeholder="Trợ giúp" position="center">
              <div className="flex items-center gap-4">
                <div className="h-[1.125rem] w-[1.125rem]">
                  <CircleHelp width={18} height={18} />
                </div>
                <p className="whitespace-nowrap text-sm">Trợ giúp</p>
              </div>
            </VToolTip>
          </li>
          <li
            className={cn(
              'h-9 w-[2.125rem] cursor-pointer overflow-hidden rounded-full p-2 hover:bg-blue-200',
              isExpand && 'w-full',
            )}
          >
            <VToolTip placeholder="Hoạt động" position="center">
              <div className="flex items-center gap-4">
                <div className="h-[1.125rem] w-[1.125rem]">
                  <History width={18} height={18} />
                </div>
                <p className="whitespace-nowrap text-sm">Hoạt động</p>
              </div>
            </VToolTip>
          </li>
          <li
            className={cn(
              'h-9 w-[2.125rem] cursor-pointer overflow-hidden rounded-full p-2 hover:bg-blue-200',
              isExpand && 'w-full',
            )}
          >
            <VToolTip placeholder="Cài đặt" position="center">
              <div className="flex items-center gap-4">
                <div className="h-[1.125rem] w-[1.125rem]">
                  <Settings width={18} height={18} />
                </div>
                <p className="whitespace-nowrap text-sm">Cài đặt</p>
              </div>
            </VToolTip>
          </li>
          <li className="h-8"></li>
        </ul>
      </div>
    </nav>
  );
}
