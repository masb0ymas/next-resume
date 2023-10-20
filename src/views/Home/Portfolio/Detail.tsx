"use client";

import { Carousel } from "@mantine/carousel";
import {
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
import NextImage from "next/image";
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

  const findBySlug = jsonData.data.find((x) => x.slug === slug);
  const brand_logo = _.get(findBySlug, "brand_logo", "");
  const title = _.get(findBySlug, "title", "");
  const stack = _.get(findBySlug, "stack", "");
  const description = _.get(findBySlug, "description", "");
  const job = _.get(findBySlug, "job", "");
  const images = _.get(findBySlug, "images", []);
  const tools = _.get(findBySlug, "tools", []);

  const newStack = stack.split(",");

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
            <NextImage
              src={brand_logo}
              alt={title}
              width={50}
              height={50}
              style={{ borderRadius: rem(10), objectFit: "cover" }}
              placeholder="blur"
              blurDataURL="https://placehold.co/720x512"
            />

            <Title>{title}</Title>
          </Group>

          <Carousel
            slideSize={slideSize}
            slideGap={gapSize}
            w="100%"
            h="100%"
            loop
            withIndicators
            withControls
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {images?.map((item) => (
              <Carousel.Slide key={item}>
                <Image
                  src={item}
                  alt={item}
                  component={NextImage}
                  width={1280}
                  height={512}
                  style={{ borderRadius: rem(20), width: "100%" }}
                  placeholder="blur"
                  blurDataURL="https://placehold.co/1280x512"
                />
              </Carousel.Slide>
            ))}
          </Carousel>

          <Container size={720} p={0}>
            <Stack>
              <Description label="Description:" value={description} />

              <Description label="Job:" value={job} />

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

                {tools?.map((item, index) => {
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
