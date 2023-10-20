import { Carousel } from "@mantine/carousel";
import {
  Avatar,
  Badge,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import _ from "lodash";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Dots } from "~/core/components/Dots";
import classes from "../partials/home.module.css";
import CardPortfolio from "./partials/CardPortfolio";
import jsonData from "./portfolio.json";

interface DescriptionProps {
  label: string;
  value: string;
}

function Description(props: DescriptionProps) {
  const { label, value } = props;

  return (
    <>
      <Title fz="xl" pb={rem(5)} data-aos="fade-left">
        {label}
      </Title>

      <Text data-aos="fade-left">{value}</Text>
    </>
  );
}

export default function PortfolioDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const { width } = useViewportSize();
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const data = jsonData.data.find((x) => x.slug === slug);
  const newStack = data?.stack.split(",");

  const shuffleData = _.shuffle(jsonData.data);
  const cards = shuffleData.slice(0, 3).map((item, index) => {
    return (
      <Grid.Col span={{ base: 12, xs: 6, sm: 4 }} key={item.title}>
        <CardPortfolio data={item} index={index} />
      </Grid.Col>
    );
  });

  let slideSize = "80%";
  let gapSize = 20;

  if (width < 480) {
    slideSize = "100%";
    gapSize = 0;
  }

  return (
    <>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Stack gap="xl" justify="center" align="center">
          <Group>
            <Avatar src={data?.brand_logo} alt={data?.title} />
            <Title>{data?.title}</Title>
          </Group>

          <Carousel
            slideSize={slideSize}
            height="100%"
            slideGap={gapSize}
            loop
            withIndicators
            withControls
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {data?.images?.map((item) => (
              <Carousel.Slide key={item}>
                <Image src={item} alt={`${item}`} fit="contain" radius="xl" />
              </Carousel.Slide>
            ))}
          </Carousel>

          <Container size={720} p={0}>
            <Stack>
              <Description
                label="Description:"
                value={String(data?.description)}
              />

              <Description label="Job:" value={String(data?.job)} />

              <div>
                <Title fz="xl" pb={rem(5)} data-aos="fade-left">
                  Stack:
                </Title>

                {newStack?.map((item, index) => {
                  return (
                    <Badge
                      key={item}
                      mb={10}
                      mr={10}
                      size="lg"
                      color="teal"
                      data-aos="zoom-in"
                      data-aos-delay={100 * (index + 1)}
                    >
                      {item}
                    </Badge>
                  );
                })}
              </div>

              <div>
                <Title fz="xl" pb={rem(5)} data-aos="fade-left">
                  Tools:
                </Title>

                {data?.tools?.map((item, index) => {
                  return (
                    <Badge
                      key={item}
                      mb={10}
                      mr={10}
                      size="lg"
                      variant="dot"
                      data-aos="zoom-in"
                      data-aos-delay={100 * (index + 1)}
                    >
                      {item}
                    </Badge>
                  );
                })}
              </div>

              <Divider variant="dashed" my="lg" />
            </Stack>
          </Container>
        </Stack>

        <Grid p={20}>{cards}</Grid>
      </div>
    </>
  );
}
