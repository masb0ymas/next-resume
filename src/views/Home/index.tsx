import { ActionIcon, Affix, Tooltip, Transition, rem } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { IconArrowUp } from '@tabler/icons-react'
import EducationSection from './partials/Education'
import ExperienceSection from './partials/Experience'
import GithubSection from './partials/Github'
import HeroSection from './partials/Hero'
import PortfolioSection from './partials/Portfolio'

function LandingPage() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <div>
      <HeroSection />

      <PortfolioSection />

      <EducationSection />

      <ExperienceSection />

      <GithubSection />

      <Affix position={{ bottom: rem(65), left: rem(30) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Tooltip
              label="Scroll to top"
              transitionProps={{ transition: 'pop', duration: 300 }}
            >
              <ActionIcon
                color="blue"
                variant="filled"
                size="lg"
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
              >
                <IconArrowUp size="1rem" />
              </ActionIcon>
            </Tooltip>
          )}
        </Transition>
      </Affix>
    </div>
  )
}

export default LandingPage
