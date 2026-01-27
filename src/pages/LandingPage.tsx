import React from 'react';
import { blink } from '@/lib/blink';
import { Zap, Rocket, Trophy, ShieldCheck, ChevronRight } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#09090B] relative overflow-hidden flex flex-col">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 grayscale-[0.5] contrast-[1.2]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1736564176042-b3d49989b230?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/50 via-[#09090B]/80 to-[#09090B] z-0" />
      
      {/* Navbar */}
      <nav className="relative z-10 p-6 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)]">
            <Zap className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-white">
            Lifecycle <span className="text-primary">Odyssey</span>
          </span>
        </div>
        <button 
          onClick={() => blink.auth.login()}
          className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-md"
        >
          Partner Login
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto pb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Next-Gen Retention Strategy
        </div>
        
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight leading-[1.1] animate-in slide-in-from-bottom-8 duration-700">
          Turn One-Time Clients into <span className="text-primary italic">Loyal Revenue Engines</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed animate-in slide-in-from-bottom-12 duration-700">
          The interactive, gamified BD strategy tool for mobile game studios. Map, optimize, and pitch customer retention journeys with AI foresight.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-16 duration-700">
          <button 
            onClick={() => blink.auth.login()}
            className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center gap-2 hover:scale-105 transition-all shadow-lg hover:shadow-primary/40"
          >
            Start Your Quest
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md">
            View Sample Playbook
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full animate-in fade-in duration-1000 delay-500">
          {[
            { label: 'Retention Lift', value: '25%', icon: ShieldCheck },
            { label: 'Upsell Conversion', value: '15%', icon: Rocket },
            { label: 'LTV Uplift', value: '30%', icon: TrendingUp },
            { label: 'ARR Goal', value: '$100M', icon: Trophy },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-3 border border-white/5 group hover:border-primary/50 transition-colors">
                <stat.icon className="w-6 h-6 text-zinc-500 group-hover:text-primary transition-colors" />
              </div>
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-8 border-t border-white/5 text-center">
        <p className="text-zinc-600 text-sm mb-6">
          &copy; 2026 Lifecycle Odyssey. Built for BD Wizards. Privacy-first Retention.
        </p>
        
        <div className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
          <p className="text-zinc-400 text-xs font-medium">Developed by <span className="text-white">Punith Kumar AB</span></p>
          <p className="text-zinc-500 text-[10px] uppercase tracking-wider">BE Engineering Student (AI & ML)</p>
          <div className="flex items-center gap-4 mt-1 text-xs">
            <a href="mailto:punithkumar0927@gmail.com" className="text-zinc-500 hover:text-primary transition-colors flex items-center gap-1">
              <span>Email</span>
            </a>
            <div className="w-1 h-1 rounded-full bg-zinc-700" />
            <a href="https://github.com/punithkumar0927-ctrl" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-primary transition-colors flex items-center gap-1">
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TrendingUp(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
