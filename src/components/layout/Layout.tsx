import React from 'react';
import { Sidebar } from './Sidebar';
import { Toaster } from 'react-hot-toast';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Layout({ children, activeTab, onTabChange }: LayoutProps) {
  return (
    <div className="flex h-screen bg-background overflow-hidden dark">
      <Sidebar activeTab={activeTab} onTabChange={onTabChange} />
      <main className="flex-1 h-screen overflow-y-auto relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent)] pointer-events-none" />
        <div className="p-8 max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
          {children}
        </div>
      </main>
      <Toaster position="top-right" />
    </div>
  );
}
