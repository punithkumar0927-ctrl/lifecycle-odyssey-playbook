import React, { useState } from 'react';
import { 
  Rocket, 
  Map as MapIcon, 
  CheckCircle2, 
  ChevronRight, 
  Zap, 
  Target, 
  Users,
  Trophy,
  RefreshCcw,
  ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from '@/components/ui/card';

const stages = [
  { 
    id: 'acquire', 
    title: 'Awareness Quest', 
    icon: Target, 
    desc: 'The initial hook and brand positioning.',
    metrics: ['CTR > 2.5%', 'CPC < $0.80'],
    emotion: 'Curiosity',
    twist: 'Gamified ad units with rewards'
  },
  { 
    id: 'onboard', 
    title: 'Onboarding Demo', 
    icon: Rocket, 
    desc: 'Setting the stage for long-term value.',
    metrics: ['90% Completion', 'Time-to-Value < 4h'],
    emotion: 'Excitement',
    twist: 'AI-led guided tours'
  },
  { 
    id: 'activate', 
    title: 'Activation Milestone', 
    icon: Zap, 
    desc: 'The "Aha!" moment where value is realized.',
    metrics: ['80% Day-7 Login', 'NPS > 75'],
    emotion: 'Satisfaction',
    twist: 'XP badges for first conversion'
  },
  { 
    id: 'monetize', 
    title: 'Monetization Empire', 
    icon: Trophy, 
    desc: 'Transitioning to paid and upsell models.',
    metrics: ['15% Upsell Rate', 'LTV > $50k'],
    emotion: 'Power',
    twist: 'Dynamic tier bundles'
  },
  { 
    id: 'retain', 
    title: 'Retention Fortress', 
    icon: ShieldCheck, 
    desc: 'Defending against churn with predictive AI.',
    metrics: ['< 3% Monthly Churn', 'High Stickiness'],
    emotion: 'Security',
    twist: 'Growth Huddles'
  },
  { 
    id: 'refer', 
    title: 'Referral Galaxy', 
    icon: Users, 
    desc: 'Turning clients into brand ambassadors.',
    metrics: ['25% Refer-to-Join', 'K-factor > 0.2'],
    emotion: 'Belonging',
    twist: 'Referral Bounties'
  },
  { 
    id: 'revive', 
    title: 'Revival Quest', 
    icon: RefreshCcw, 
    desc: 'Winning back lost souls with targeted deals.',
    metrics: ['10% Win-back Rate', '50% Discount'],
    emotion: 'Relief',
    twist: 'Comeback Quests'
  },
];

export function OdysseyMap() {
  const [activeStage, setActiveStage] = useState(stages[0]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-heading font-bold tracking-tight text-white">Lifecycle Odyssey Map</h2>
          <p className="text-muted-foreground">Chart your client's 7-stage journey from first contact to empire building.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
          <MapIcon className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-primary uppercase">Strategy Interactive</span>
        </div>
      </div>

      {/* Odyssey Timeline */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 z-0" />
        <div className="flex justify-between relative z-10">
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage)}
              className={cn(
                "group flex flex-col items-center gap-4 transition-all duration-300",
                activeStage.id === stage.id ? "scale-110" : "hover:scale-105 opacity-60 hover:opacity-100"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-500",
                activeStage.id === stage.id 
                  ? "bg-primary border-primary shadow-[0_0_20px_rgba(139,92,246,0.6)]" 
                  : "bg-background border-muted group-hover:border-primary/50"
              )}>
                <stage.icon className={cn(
                  "w-6 h-6",
                  activeStage.id === stage.id ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                )} />
              </div>
              <div className="text-center">
                <span className={cn(
                  "text-[10px] uppercase font-bold tracking-widest block mb-1",
                  activeStage.id === stage.id ? "text-primary" : "text-muted-foreground"
                )}>
                  Stage {idx + 1}
                </span>
                <span className="text-xs font-bold whitespace-nowrap hidden md:block">
                  {stage.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Stage Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
        <Card className="lg:col-span-2 bg-gradient-to-br from-card to-card/50 border-primary/10">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <activeStage.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl font-heading">{activeStage.title}</CardTitle>
                <CardDescription>{activeStage.desc}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                <h4 className="text-sm font-bold text-primary uppercase mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Success Metrics
                </h4>
                <ul className="space-y-2">
                  {activeStage.metrics.map((m, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                <h4 className="text-sm font-bold text-amber-500 uppercase mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Creative Twist
                </h4>
                <div className="text-sm font-medium italic text-zinc-300">
                  "{activeStage.twist}"
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest block mb-1">Target Emotion</span>
                  <span className="text-sm font-bold text-white">{activeStage.emotion}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <activeStage.icon className="w-24 h-24" />
              </div>
              <h4 className="text-lg font-bold mb-2">AI Strategy Foresight</h4>
              <p className="text-muted-foreground text-sm relative z-10">
                For the {activeStage.title} stage, predictive models suggest a focus on {activeStage.metrics[0]}. 
                Clients experiencing {activeStage.emotion} during this phase have a 45% higher retention probability in the subsequent 6 months.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quest Log / Sidebar for Map */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-widest text-primary">Active Quests</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: 'Map All 7 Stages', progress: 100 },
                { label: 'Define Metrics', progress: 85 },
                { label: 'Add Strategy Twists', progress: 40 },
              ].map((quest, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span>{quest.label}</span>
                    <span>{quest.progress}%</span>
                  </div>
                  <Progress value={quest.progress} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>
          
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <h4 className="text-sm font-bold text-amber-500 mb-2 flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Next Milestone
            </h4>
            <p className="text-xs text-amber-500/80 mb-3">
              Complete the Strategy Twist for all stages to unlock the "Master Strategist" badge.
            </p>
            <button className="w-full py-2 bg-amber-500 text-black text-xs font-bold rounded-lg hover:bg-amber-400 transition-colors">
              Claim 500 XP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
