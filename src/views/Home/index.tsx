import { ActionIcon, Affix, Transition, rem } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons-react";
import EducationSection from "./Education";
import ExperienceSection from "./Experience";
import GithubSection from "./Github";
import HeroSection from "./Hero";
import PortfolioSection from "./Portfolio";

export default function HomePage() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <HeroSection />

      <PortfolioSection />

      <EducationSection />

      <ExperienceSection />

      <GithubSection />

      <Affix position={{ bottom: rem(65), left: rem(30) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon
              color="blue"
              variant="filled"
              size="lg"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowUp size="1rem" />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
}
