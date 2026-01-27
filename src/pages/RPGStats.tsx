import React from 'react';
import { 
  Trophy, 
  Star, 
  Shield, 
  Zap, 
  Target, 
  TrendingUp,
  Award,
  Crown,
  Sword,
  Gem
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function RPGStats() {
  const badges = [
    { name: 'Churn Defeater', icon: Shield, color: 'text-blue-500', desc: 'Reduced churn by 20% in 3 months' },
    { name: 'Upsell Warrior', icon: Sword, color: 'text-rose-500', desc: 'Achieved 15% conversion on Gold segment' },
    { name: 'Growth King', icon: Crown, color: 'text-amber-500', desc: 'Reached $10M expansion revenue' },
    { name: 'Odyssey Master', icon: Star, color: 'text-primary', desc: 'Mapped 10+ complete customer lifecycles' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-heading font-bold tracking-tight text-white">Retention RPG Dashboard</h2>
          <p className="text-muted-foreground">Level up your BD career with gamified retention milestones.</p>
        </div>
        <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-primary to-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]">
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Total XP</div>
          <div className="text-2xl font-black">12,450 <span className="text-sm font-medium opacity-60">XP</span></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <Card className="lg:col-span-1 border-primary/20 bg-primary/5">
          <CardHeader className="text-center">
            <div className="relative inline-block mx-auto mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary via-purple-500 to-amber-500 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-black">
                  BD
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-amber-500 border-4 border-background flex items-center justify-center shadow-lg">
                <Trophy className="w-5 h-5 text-black" />
              </div>
            </div>
            <CardTitle className="text-2xl font-heading">Wizard Strategist</CardTitle>
            <CardDescription>Level 12 • 450 XP to Level 13</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <span>Power Level</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-xl bg-card border border-border text-center">
                <div className="text-xl font-bold text-primary">24</div>
                <div className="text-[10px] font-bold uppercase text-muted-foreground">Quests Done</div>
              </div>
              <div className="p-3 rounded-xl bg-card border border-border text-center">
                <div className="text-xl font-bold text-amber-500">12</div>
                <div className="text-[10px] font-bold uppercase text-muted-foreground">Achievements</div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Active Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Churn Prediction', 'LTV Modeling', 'Gamification', 'Scenario Sim', 'Upsell Blitz'].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges & Achievements */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-heading font-bold flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Legendary Badges
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {badges.map((badge, i) => (
              <Card key={i} className="group hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-4 flex gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center bg-muted transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10",
                    badge.color
                  )}>
                    <badge.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{badge.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{badge.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-amber-500/20 bg-amber-500/5">
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center gap-2">
                <Gem className="w-5 h-5 text-amber-500" />
                Special Quest: "The Win-back King"
              </CardTitle>
              <CardDescription>Win back 5 churned high-LTV clients in 30 days.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-amber-500">Progress: 2/5 Clients</span>
                    <span className="text-amber-500">40%</span>
                  </div>
                  <Progress value={40} className="h-2 bg-amber-500/20" />
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold uppercase text-muted-foreground mb-1">Reward</div>
                  <div className="flex items-center gap-1 text-amber-500 font-black">
                    <Zap className="w-4 h-4" />
                    +2,000 XP
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
