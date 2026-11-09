import SplashCursor from './components/SplashCursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { internshipsList, leadershipList } from './data/portfolioData'

export default function App() {
  return (
    <>
      <SplashCursor VELOCITY_DISSIPATION={3} SPLAT_FORCE={3500} COLOR_UPDATE_SPEED={18} COLOR="#ffffff" RAINBOW_MODE={false} />
      {/* 1. Animated Splash Preloader */}
      <Preloader />
      {/* 2. Top Navigation */}
      <Navbar />
      {/* 3. Hero Video Section */}
      <Hero />
      {/* 4. About & Interactive 3D Flip Badge */}
      <About />
      {/* 5. Technical Stack Categorized Badges */}
      <TechnicalSkills />
      {/* 6. Process & Methodology (Services) */}
      <Services />
      {/* 7. Projects Showcase */}
      <Projects />
      {/* 8. Internships (conditional on non-empty data) */}
      {internshipsList && internshipsList.length > 0 && <Internships />}
      {/* 9. Leadership & Engagement Timeline (conditional on non-empty data) */}
      {leadershipList && leadershipList.length > 0 && <Leadership />}
      {/* 10. Professional Soft Skills */}
      <SoftSkills />
      {/* 11. Interactive Contact Section */}
      <Contact />
      {/* 12. Footer with TAP Academy Credit */}
      <Footer />
    </>
  )
}
