import {
  Button,
  Center,
  Container,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core'
import Link from 'next/link'
import dummyData from '~/data/dummy/portfolio.json'
import Feature from './partials/Feature'
import portfolioStyles from './styles'

function PortfolioSection() {
  const { classes } = portfolioStyles()

  const title = 'Skill & Portfolio'
  const description =
    'My skills and experience gained while working on projects.'

  const { data } = dummyData

  const features = data
    .slice(0, 9)
    .map((feature) => <Feature {...feature} key={feature.id} />)

  return (
    <Container className={classes.wrapper} size={1280}>
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

      <Center my="lg">
        <Link href="/p" passHref>
          <Button radius="lg">More</Button>
        </Link>
      </Center>
    </Container>
  )
}

export default PortfolioSection
