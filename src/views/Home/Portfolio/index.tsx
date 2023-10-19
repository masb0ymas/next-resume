import {
  AspectRatio,
  Avatar,
  Card,
  Grid,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import Link from "next/link";
import SectionHead from "../partials/SectionHead";
import classes from "../partials/home.module.css";
import jsonData from "./portfolio.json";

export default function PortfolioSection() {
  const cards = jsonData.data.map((item, index) => (
    <Grid.Col span={{ base: 12, xs: 6, sm: 4 }} key={item.title}>
      <Card
        p="md"
        radius="md"
        component={Link}
        href={`/p/${item.slug}`}
        className={classes.card}
        withBorder
        data-aos="zoom-in"
        data-aos-delay={100 * (index + 1)}
      >
        <AspectRatio ratio={1920 / 1080}>
          <Image src={item.thumbnail} alt={item.title} />
        </AspectRatio>

        <Group justify="space-between" mt="md">
          <Stack gap={0}>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {item.title}
            </Text>
            <Text className={classes.card_title} mt={5}>
              {item.job}
            </Text>
          </Stack>

          <Avatar src={item.brand_logo} alt={item.title} />
        </Group>
      </Card>
    </Grid.Col>
  ));

  return (
    <div className={classes.inner}>
      <Stack gap={10} justify="center" align="center">
        <SectionHead
          title="Skill & Portfolio"
          subtitle="My skills and experience gained while working on projects."
        />

        <Grid p={20}>{cards}</Grid>
      </Stack>
    </div>
  );
}
