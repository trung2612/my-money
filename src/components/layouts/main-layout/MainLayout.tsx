import { Navbar } from '@/components/organisms/Navbar';
import { ReactNode } from 'react';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="z-10 flex-shrink-0 flex h-16"></div>
        <main className="flex-1 relative overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};
