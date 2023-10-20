"use client";

import { Button, Grid, Image, Stack, UnstyledButton, rem } from "@mantine/core";
import Link from "next/link";
import SectionHead from "../partials/SectionHead";
import classes from "../partials/home.module.css";
import jsonData from "./github.json";
import { IconHeartHandshake } from "@tabler/icons-react";

export default function GithubSection() {
  const cards = jsonData.data.map((item, index) => {
    return (
      <Grid.Col
        span={{ base: 6, xs: 6, sm: 4 }}
        key={item.id}
        data-aos="fade-up"
        data-aos-delay={100 * (index + 1)}
      >
        <UnstyledButton
          component={Link}
          href={item.repository_url}
          target="_blank"
        >
          <Image src={item.gsr_url} alt={item.title} width="100%" />
        </UnstyledButton>
      </Grid.Col>
    );
  });

  return (
    <div className={classes.inner}>
      <Stack gap={10} justify="center" align="center">
        <SectionHead
          title="My Open source github"
          subtitle="My activities on open source github."
        />

        <Grid p={20}>{cards}</Grid>

        <Button
          size="lg"
          radius="xl"
          variant="light"
          leftSection={<IconHeartHandshake />}
          component={Link}
          href="https://s.id/masb0ymas"
          target="_blank"
          data-aos="fade-up"
          data-aos-delay={1300}
        >
          How to support me
        </Button>
      </Stack>
    </div>
  );
}
