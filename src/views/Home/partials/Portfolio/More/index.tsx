import { Container, SimpleGrid, Text, Title } from '@mantine/core'
import Dots from '~/core/components/Dots'
import dummyData from '~/data/dummy/portfolio.json'
import heroStyles from '../../Hero/styles'
import Feature from '../partials/Feature'
import portfolioStyles from '../styles'

function PortfolioMore() {
  const { classes } = portfolioStyles()
  const { classes: heroClasses } = heroStyles()

  const title = 'Skill & Portfolio'
  const description =
    'My skills and experience gained while working on projects.'

  const { data } = dummyData

  const features = data.map((feature) => (
    <Feature {...feature} key={feature.id} />
  ))

  return (
    <Container className={classes.wrapper} size={1280}>
      <Dots className={heroClasses.dots} style={{ left: 0, top: 0 }} />
      <Dots className={heroClasses.dots} style={{ left: 60, top: 0 }} />
      <Dots className={heroClasses.dots} style={{ left: 0, top: 140 }} />
      <Dots className={heroClasses.dots} style={{ right: 0, top: 60 }} />

      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="lg" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={40}
        cols={3}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  )
}

export default PortfolioMore
