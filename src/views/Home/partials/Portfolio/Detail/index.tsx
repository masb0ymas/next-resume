import { Carousel } from '@mantine/carousel'
import {
  Avatar,
  Badge,
  Container,
  Divider,
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
import Dots from '~/core/components/Dots'
import heroStyles from '../../Hero/styles'

function PortfolioDetail() {
  const { classes } = portfolioStyles()
  const { classes: heroClasses } = heroStyles()

  const router = useRouter()
  const slug = router.query?.slug

  const { data } = dummyData
  const newData = data.find((x) => x.slug === slug)

  const newStack = newData?.stack.split(',')

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
            <Grid.Col sm={4} key={item}>
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
