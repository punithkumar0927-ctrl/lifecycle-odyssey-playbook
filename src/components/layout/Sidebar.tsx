import React from 'react';
import { 
  LayoutDashboard, 
  Map, 
  Trophy, 
  Presentation, 
  LogOut,
  Target,
  Zap,
  TrendingUp,
  ShieldAlert
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { blink } from '@/lib/blink';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'odyssey', label: 'Odyssey Map', icon: Map },
    { id: 'rpg', label: 'Retention RPG', icon: Trophy },
    { id: 'pitch', label: 'BD Arsenal', icon: Presentation },
  ];

  return (
    <aside className="w-64 h-screen border-r bg-card flex flex-col z-20">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="font-heading font-bold text-lg tracking-tight">
            Lifecycle <span className="text-primary">Odyssey</span>
          </h1>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                activeTab === item.id
                  ? "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(139,92,246,0.2)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <item.icon className={cn(
                "w-4 h-4 transition-transform duration-200",
                activeTab === item.id ? "scale-110" : "group-hover:scale-110"
              )} />
              {item.label}
              {activeTab === item.id && (
                <div className="ml-auto w-1 h-1 rounded-full bg-primary animate-pulse" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-4">
        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary/70">XP Progress</span>
          </div>
          <div className="h-1.5 w-full bg-primary/20 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-primary w-2/3 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
          </div>
          <p className="text-[10px] text-muted-foreground">
            Level 12 <span className="text-foreground font-medium">Strategist</span>
          </p>
        </div>

        <button
          onClick={() => blink.auth.signOut()}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>

        <div className="pt-4 border-t border-primary/10">
          <div className="text-[10px] text-muted-foreground/60 text-center space-y-0.5">
            <p>Built by Punith Kumar AB</p>
            <p className="hover:text-primary cursor-pointer transition-colors" onClick={() => window.open('https://github.com/punithkumar0927-ctrl', '_blank')}>
              @punithkumar0927-ctrl
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
