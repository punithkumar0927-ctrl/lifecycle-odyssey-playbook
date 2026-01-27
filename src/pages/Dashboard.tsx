import React from 'react';
import { 
  Users, 
  TrendingUp, 
  ArrowUpRight, 
  AlertTriangle,
  Zap,
  Star,
  ShieldCheck,
  MoreVertical
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export function Dashboard() {
  const stats = [
    { label: 'Current Churn Rate', value: '18.4%', trend: '-2.1%', icon: ShieldCheck, color: 'text-emerald-500' },
    { label: 'Upsell Conversion', value: '12.8%', trend: '+1.4%', icon: TrendingUp, color: 'text-primary' },
    { label: 'Avg. Client LTV', value: '$245K', trend: '+12%', icon: Star, color: 'text-amber-500' },
    { label: 'AI Churn Alerts', value: '14', trend: 'High Priority', icon: AlertTriangle, color: 'text-rose-500' },
  ];

  const segments = [
    { name: 'Gold Whales', count: 42, health: 92, ltv: '$850k', color: 'bg-amber-500' },
    { name: 'Silver Guardians', count: 128, health: 78, ltv: '$320k', color: 'bg-zinc-300' },
    { name: 'Bronze Quests', count: 330, health: 64, ltv: '$120k', color: 'bg-orange-600' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-heading font-bold tracking-tight">Strategy Command</h2>
        <p className="text-muted-foreground">Monitor your retention fortress and growth blitz in real-time.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <Card key={i} className="relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className={stat.color + " w-4 h-4"} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <span className={stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}>
                  {stat.trend}
                </span>
                from last month
              </p>
            </CardContent>
            <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-full" />
            <div className="absolute bottom-0 left-0 h-1 bg-primary w-1/3 transition-all duration-500 group-hover:w-full" />
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Retention RPG Quick Stats */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-heading">Client Segmentation Blitz</CardTitle>
            <CardDescription>Segmenting 500+ clients for hyper-personalized retention quests.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {segments.map((segment, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={"w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold " + segment.color}>
                    {segment.name.charAt(0)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold">{segment.name}</span>
                      <span className="text-muted-foreground">{segment.count} Clients</span>
                    </div>
                    <Progress value={segment.health} className="h-2" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{segment.health}% Health</div>
                    <div className="text-xs text-muted-foreground">Avg. LTV: {segment.ltv}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Nudges */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              AI Strategy Nudges
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: 'Upsell Opportunity', desc: 'GameStudio X hit 20% ROI spike. Trigger "Premium Creatives" bundle.', priority: 'High' },
              { title: 'Churn Risk Alert', desc: 'Bid drop of 15% detected for AppDev Y. Send Growth Huddle invite.', priority: 'Critical' },
              { title: 'LTV Optimization', desc: 'Bronze segment activation lagging. Deploy Win-back "Comeback Quest".', priority: 'Medium' },
            ].map((nudge, i) => (
              <div key={i} className="p-3 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-primary uppercase">{nudge.title}</span>
                  <span className={cn(
                    "text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase",
                    nudge.priority === 'Critical' ? 'bg-rose-500/10 text-rose-500' :
                    nudge.priority === 'High' ? 'bg-amber-500/10 text-amber-500' : 'bg-blue-500/10 text-blue-500'
                  )}>
                    {nudge.priority}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {nudge.desc}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
