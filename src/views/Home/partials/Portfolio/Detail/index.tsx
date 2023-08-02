import { Carousel } from '@mantine/carousel'
import {
  Avatar,
  Badge,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core'
import { useRouter } from 'next/router'
import _ from 'lodash'
import Link from 'next/link'
import Dots from '~/core/components/Dots'
import dummyData from '~/data/dummy/portfolio.json'
import heroStyles from '../../Hero/styles'
import portfolioStyles from '../styles'
import Feature from '../partials/Feature'

function PortfolioDetail() {
  const { classes } = portfolioStyles()
  const { classes: heroClasses } = heroStyles()

  const router = useRouter()
  const slug = router.query?.slug

  const { data } = dummyData
  const newData = data.find((x) => x.slug === slug)

  const newStack = newData?.stack.split(',')

  const shuffleData = _.shuffle(data)
  const features = shuffleData
    .slice(0, 3)
    .map((feature) => <Feature {...feature} key={feature.id} />)

  return (
    <Container className={classes.wrapper} size={1280}>
      <Dots className={heroClasses.dots} style={{ left: 0, top: 0 }} />
      <Dots className={heroClasses.dots} style={{ left: 60, top: 0 }} />
      <Dots className={heroClasses.dots} style={{ left: 0, top: 140 }} />
      <Dots className={heroClasses.dots} style={{ right: 0, top: 60 }} />

      <Group position="center">
        <Avatar src={newData?.logoSrc} mb="1rem" />
        <Title className={classes.title}>{newData?.title}</Title>
      </Group>

      <Space h="md" />

      <Carousel
        slideSize="70%"
        height="100%"
        slideGap="md"
        controlsOffset="lg"
        loop
        withIndicators
      >
        {newData?.images?.map((item) => (
          <Carousel.Slide key={item}>
            <Image src={item} alt={`${item}`} fit="contain" radius="lg" />
          </Carousel.Slide>
        ))}
      </Carousel>

      <Space h="md" />

      <Container size={720} p={0}>
        <Stack mb="3rem">
          <Title order={3}>Description :</Title>
          <Text size="lg">{newData?.description}</Text>
        </Stack>

        <Stack mb="3rem">
          <Title order={3}>Job :</Title>
          <Text size="lg">{newData?.job}</Text>
        </Stack>

        <Stack mb="3rem">
          <Title order={3}>Stack :</Title>

          <Group>
            {newStack?.map((item) => (
              <Badge size="lg" key={item}>
                {item}
              </Badge>
            ))}
          </Group>
        </Stack>

        <Divider variant="dashed" my="lg" />

        <Grid columns={24}>
          {newData?.tools.map((item) => (
            <Grid.Col xs={8} sm={4} key={item}>
              <Tooltip
                label={item}
                transitionProps={{ transition: 'pop', duration: 300 }}
              >
                <Card shadow="md" radius="lg" padding="sm">
                  <Avatar size="xl" src={`/static/tools/${item}.png`} />
                </Card>
              </Tooltip>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      <Divider variant="dashed" my="lg" />

      <Title className={classes.title}>Other Portfolio</Title>

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
        <Link href="/" passHref>
          <Button radius="lg">Back Home</Button>
        </Link>
      </Center>
    </Container>
  )
}

export default PortfolioDetail
