import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EcosystemJourney from './components/EcosystemJourney';
import ProblemStatement from './components/ProblemStatement';
import CorePillars from './components/CorePillars';
import ImpactMetrics from './components/ImpactMetrics';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F7F2] font-sans selection:bg-slate-800 selection:text-white overflow-x-hidden pt-20">
      <Header />
      <div id="hero"><HeroSection /></div>
      <div id="problem"><ProblemStatement /></div>
      <div id="journey"><EcosystemJourney /></div>
      <div id="architecture"><CorePillars /></div>
      <div id="impact"><ImpactMetrics /></div>
      <div id="faq"><FAQ /></div>
      <Footer />
    </main>
  );
}
