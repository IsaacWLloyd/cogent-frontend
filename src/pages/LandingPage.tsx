import Hero from '../components/landing/Hero'
import QuickPitch from '../components/landing/QuickPitch'
import VisualExplainer from '../components/landing/VisualExplainer'
import Roadmap from '../components/landing/Roadmap'
import BottomHero from '../components/landing/BottomHero'

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <QuickPitch />
      <VisualExplainer />
      <Roadmap />
      <BottomHero />
    </main>
  )
}