import { Carousel } from '@mantine/carousel'
import {
  Avatar,
  Container,
  Grid,
  Group,
  Image,
  Space,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core'
import { useRouter } from 'next/router'
import dummyData from '~/data/dummy/portfolio.json'
import portfolioStyles from '../styles'

function PortfolioDetail() {
  const { classes } = portfolioStyles()

  const router = useRouter()
  const slug = router.query?.slug

  const { data } = dummyData

  const newData = data.find((x) => x.slug === slug)

  return (
    <Container className={classes.wrapper} size={1280}>
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
        <Carousel.Slide>
          <Image src={newData?.src} alt={`${newData?.title}`} fit="contain" />
        </Carousel.Slide>

        <Carousel.Slide>
          <Image src={newData?.src} alt={`${newData?.title}`} fit="contain" />
        </Carousel.Slide>

        <Carousel.Slide>
          <Image src={newData?.src} alt={`${newData?.title}`} fit="contain" />
        </Carousel.Slide>
      </Carousel>

      <Space h="md" />

      <Container size={720} p={0}>
        <Stack mb="md">
          <Title order={3}>Description :</Title>
          <Text size="lg">{newData?.description}</Text>
        </Stack>

        <Stack mb="md">
          <Title order={3}>Job :</Title>
          <Text size="lg">{newData?.job}</Text>
        </Stack>

        <Stack mb="md">
          <Title order={3}>Stack :</Title>
          <Text size="lg">{newData?.stack}</Text>
        </Stack>

        <Grid>
          {newData?.tools.map((item) => (
            <Grid.Col sm={2}>
              <Tooltip
                label={item}
                transitionProps={{ transition: 'pop', duration: 300 }}
              >
                <Avatar
                  size="xl"
                  radius="3rem"
                  src={`/static/tools/${item}.png`}
                />
              </Tooltip>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Container>
  )
}

export default PortfolioDetail
