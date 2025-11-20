import Hero from './components/Hero';
import FoundersMessage from "./components/FoundersMessage";
import Problem from './components/Problem';
import TheSolution from './components/TheSolution';
import Mission from './components/Mission';
import Vision from './components/Vision';
import FounderFit from './components/FounderFit';
import Team from './components/Team';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FoundersMessage />
      <Problem />
      <TheSolution />
      <Mission />
      <Vision />
      <FounderFit />
      <Team />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
