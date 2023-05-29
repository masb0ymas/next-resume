import Footer from '~/layouts/Footer'
import EducationSection from './partials/Education'
import ExperienceSection from './partials/Experience'
import GithubSection from './partials/Github'
import HeroSection from './partials/Hero'
import PortfolioSection from './partials/Portfolio'

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
