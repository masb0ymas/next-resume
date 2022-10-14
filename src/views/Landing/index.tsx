import Footer from 'layouts/Footer'
import EducationSection from './partials/EducationSection'
import ExperienceSection from './partials/ExperienceSection'
import GithubSection from './partials/GithubSection'
import HeroSection from './partials/HeroSection'
import PortfolioSection from './partials/PortfolioSection'

function LandingPage() {
  return (
    <div>
      <HeroSection />

      <PortfolioSection />

      <EducationSection />

      <ExperienceSection />

      <GithubSection />

      <Footer />
    </div>
  )
}

export default LandingPage
