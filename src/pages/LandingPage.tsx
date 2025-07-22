import Hero from '../components/landing/Hero'
import QuickPitch from '../components/landing/QuickPitch'
import VisualExplainer from '../components/landing/VisualExplainer'
import Roadmap from '../components/landing/Roadmap'
import CTA from '../components/landing/CTA'

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <QuickPitch />
      <VisualExplainer />
      <Roadmap />
      <CTA />
    </main>
  )
}