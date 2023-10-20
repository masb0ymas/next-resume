import {
  AspectRatio,
  Avatar,
  Card,
  Group,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import classes from "~/views/Home/partials/home.module.css";

interface PortfolioEntity {
  id: string;
  thumbnail: string;
  brand_logo: string;
  title: string;
  slug: string;
  job: string;
  stack: string;
  tools: string[];
  images: string[];
  description: string;
}

interface CardPortfolioProps {
  data: PortfolioEntity;
  index: number;
}

export default function CardPortfolio(props: CardPortfolioProps) {
  const { data, index } = props;

  return (
    <Card
      p="md"
      radius="md"
      component={Link}
      href={`/p/${data.slug}`}
      className={classes.card}
      withBorder
      data-aos="zoom-in"
      data-aos-delay={100 * (index + 1)}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image
          src={data.thumbnail}
          alt={data.title}
          width={720}
          height={512}
          style={{ borderRadius: rem(10) }}
          placeholder="blur"
          blurDataURL="https://placehold.co/720x512"
        />
      </AspectRatio>

      <Group justify="space-between" mt="md">
        <Stack gap={0}>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
            {data.title}
          </Text>

          <Text className={classes.card_title} mt={5}>
            {data.job}
          </Text>
        </Stack>

        <Avatar src={data.brand_logo} alt={data.title} />
      </Group>
    </Card>
  );
}
