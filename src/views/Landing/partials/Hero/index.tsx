import { Avatar, Center, Container, Text, Title } from '@mantine/core'
import ColorSchemeToggle from '~/core/components/ColorSchemeToggle/ColorSchemeToggle'
import Dots from '~/core/components/Dots'
import MyFrameMotion from '~/core/components/MyFrameMotion'
import heroStyles from './styles'

function HeroSection() {
  const { classes } = heroStyles()

  return (
    <Container className={classes.wrapper} size={1440}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <MyFrameMotion>
          <Center my="md">
            <Avatar size="xl" radius="xl" src="/static/avatar.jpeg" />
          </Center>
          <Title className={classes.title}>
            {`Halo, i'm `}
            <Text component="span" className={classes.highlight} inherit>
              Nurul Fajri
            </Text>
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" color="dimmed" className={classes.description}>
              Software Engineer at <b>Karcisbola</b>,
            </Text>
            <Text
              mt={10}
              size="lg"
              color="dimmed"
              className={classes.description}
            >
              Currently I work as a software engineer at <b>Karcisbola</b>, I
              like sports and also traveling. On the other hand, I also enjoy
              learning new things, both in technology and other fields.
            </Text>
          </Container>
        </MyFrameMotion>

        <Center>
          <ColorSchemeToggle />
        </Center>
      </div>
    </Container>
  )
}

export default HeroSection
