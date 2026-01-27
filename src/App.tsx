import React from 'react';
import { useBlinkAuth } from '@blinkdotnew/react';
import { Layout } from './components/layout/Layout';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { OdysseyMap } from './pages/OdysseyMap';
import { RPGStats } from './pages/RPGStats';
import { PitchDeck } from './pages/PitchDeck';
import { useState } from 'react';

export default function App() {
  const { isAuthenticated, isLoading } = useBlinkAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LandingPage />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'odyssey':
        return <OdysseyMap />;
      case 'rpg':
        return <RPGStats />;
      case 'pitch':
        return <PitchDeck />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}
