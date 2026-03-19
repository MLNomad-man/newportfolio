import BlobBackground from '@/components/BlobBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsCounter from '@/components/StatsCounter';
import About from '@/components/About';
import Skills from '@/components/Skills';
import CurrentlyLearning from '@/components/CurrentlyLearning';
import Experience from '@/components/Experience';
import Timeline from '@/components/Timeline';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import GitHubStats from '@/components/GitHubStats';
import Demos from '@/components/Demos';
import Certifications from '@/components/Certifications';
import SpotifyWidget from '@/components/SpotifyWidget';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <BlobBackground />
      <Header />
      <main>
        <Hero />
        <StatsCounter />
        <About />
        <Skills />
        <CurrentlyLearning />
        <Experience />
        <Timeline />
        <Achievements />
        <Projects />
        <GitHubStats />
        <Demos />
        <Certifications />
        <SpotifyWidget />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
