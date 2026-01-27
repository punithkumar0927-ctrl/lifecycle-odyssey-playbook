import React, { useState } from 'react';
import { 
  Presentation, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Share2, 
  BookOpen, 
  Calculator,
  Layout,
  FileText
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const slides = [
  { id: 1, title: 'The Retention Crisis', content: 'Retention drives 5-7x more profit than acquisition. In Martech, a 5% lift can mean 25%+ profit growth.' },
  { id: 2, title: 'Lifecycle Odyssey Map', content: 'Our 7-stage gamified journey: Acquire, Onboard, Activate, Monetize, Retain, Refer, Revive.' },
  { id: 3, title: 'AI Churn Prediction', content: 'Predictive signals (bid drops, NPS dips) trigger automated win-back quests instantly.' },
  { id: 4, title: 'Upsell Engine', content: 'Bundling UA with ASO tools for a projected 30% LTV uplift across Gold segments.' },
  { id: 5, title: 'The ROI Projection', content: 'Aiming for 20% Churn Reduction and 15% Upsell Conversion in 6 months.' },
];

export function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clvData, setClvData] = useState({
    arpu: 5000,
    margin: 0.7,
    lifespan: 24,
    discount: 0.1
  });

  const calculateCLV = () => {
    const { arpu, margin, lifespan, discount } = clvData;
    return (arpu * margin * lifespan) / (1 + discount);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-heading font-bold tracking-tight text-white">BD Arsenal & Pitch Deck</h2>
          <p className="text-muted-foreground">Everything you need to pitch and execute the Odyssey strategy.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-colors">
            <Download className="w-4 h-4" />
            PDF Playbook
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:scale-105 transition-all">
            <Share2 className="w-4 h-4" />
            Share Prototype
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Slide Preview */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#1A1A1E] to-black border-primary/20 flex flex-col items-center justify-center p-12 text-center group">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/20">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent)] pointer-events-none" />
            
            <div key={currentSlide} className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-6 relative z-10">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-2 block">Slide {currentSlide + 1}</span>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">{slides[currentSlide].title}</h3>
              <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">{slides[currentSlide].content}</p>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <button 
                onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all disabled:opacity-20"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <div key={i} className={cn("w-2 h-2 rounded-full transition-all", i === currentSlide ? "bg-primary w-4" : "bg-white/10")} />
                ))}
              </div>
              <button 
                onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all disabled:opacity-20"
                disabled={currentSlide === slides.length - 1}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4 flex items-center gap-3 bg-card border-border hover:border-primary/50 cursor-pointer transition-colors">
              <FileText className="w-5 h-5 text-primary" />
              <div className="text-sm font-bold">Pitch Script</div>
            </Card>
            <Card className="p-4 flex items-center gap-3 bg-card border-border hover:border-primary/50 cursor-pointer transition-colors">
              <Layout className="w-5 h-5 text-primary" />
              <div className="text-sm font-bold">Mermaid Map</div>
            </Card>
            <Card className="p-4 flex items-center gap-3 bg-card border-border hover:border-primary/50 cursor-pointer transition-colors">
              <BookOpen className="w-5 h-5 text-primary" />
              <div className="text-sm font-bold">Strategy Notes</div>
            </Card>
          </div>
        </div>

        {/* CLV Calculator */}
        <div className="space-y-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Magic Metrics
              </CardTitle>
              <CardDescription>Calculate Customer Lifetime Value (CLV)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs uppercase font-bold text-muted-foreground">ARPU ($)</Label>
                <Input 
                  type="number" 
                  value={clvData.arpu}
                  onChange={e => setClvData({...clvData, arpu: Number(e.target.value)})}
                  className="bg-muted/50"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs uppercase font-bold text-muted-foreground">Gross Margin (%)</Label>
                <Input 
                  type="number" 
                  step="0.1"
                  value={clvData.margin}
                  onChange={e => setClvData({...clvData, margin: Number(e.target.value)})}
                  className="bg-muted/50"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs uppercase font-bold text-muted-foreground">Lifespan (Months)</Label>
                <Input 
                  type="number" 
                  value={clvData.lifespan}
                  onChange={e => setClvData({...clvData, lifespan: Number(e.target.value)})}
                  className="bg-muted/50"
                />
              </div>
              
              <div className="pt-6 border-t border-border mt-4">
                <div className="text-xs font-bold uppercase text-muted-foreground mb-1">Projected CLV</div>
                <div className="text-4xl font-black text-white">
                  ${Math.round(calculateCLV()).toLocaleString()}
                </div>
                <p className="text-[10px] text-zinc-500 mt-2 italic">
                  Formula: (ARPU × Margin × Lifespan) / (1 + Discount Rate)
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="p-6 rounded-2xl bg-primary text-primary-foreground shadow-[0_20px_40px_-10px_rgba(139,92,246,0.3)]">
            <h4 className="font-heading font-bold text-lg mb-2">Pitch Tip</h4>
            <p className="text-sm opacity-90 leading-relaxed">
              When pitching to mobile game studios, emphasize the 50% discount on "Comeback Quests". It lowers the psychological barrier for win-backs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
