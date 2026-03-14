import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemStatement from './components/ProblemStatement';
import CorePillars from './components/CorePillars';
import ImpactMetrics from './components/ImpactMetrics';
import EcosystemJourney from './components/EcosystemJourney';
import Stories from './components/Stories';
import Partners from './components/Partners';
import WhyItMatters from './components/WhyItMatters';
import Testimonials from './components/Testimonials';
import NextChapter from './components/NextChapter';
import CallToAction from './components/CallToAction';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F7F2] font-sans selection:bg-slate-800 selection:text-white overflow-x-hidden pt-20">
      <Header />
      <div id="hero"><HeroSection /></div>
      <div id="problem"><ProblemStatement /></div>
      <div id="solution"><CorePillars /></div>
      <div id="impact"><ImpactMetrics /></div>
      <div id="journey"><EcosystemJourney /></div>
      <div id="stories"><Stories /></div>
      <div id="partners"><Partners /></div>
      <div id="why-it-matters"><WhyItMatters /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="next-chapter"><NextChapter /></div>
      <div id="join"><CallToAction /></div>
      <div id="faq"><FAQ /></div>
      <Footer />
    </main>
  );
}
