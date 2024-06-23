import { Container, Stack, Text, Title, rem } from "@mantine/core";
import Image from "next/image";
import { ColorSchemeToggle } from "~/core/components/ColorSchemeToggle/ColorSchemeToggle";
import { Dots } from "~/core/components/Dots";
import classes from "../partials/home.module.css";

const company = "Moneyflow ID";
const first_time_work = 2018;

const dateNow = new Date();
const yearNow = dateNow.getFullYear();

const experience = yearNow - first_time_work;

export default function HeroSection() {
  return (
    <>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Stack gap={10} justify="center" align="center">
          <Image
            src="/static/images/avatar.jpeg"
            alt="avatar"
            width={140}
            height={140}
            style={{ borderRadius: rem(55) }}
            data-aos="fade-up"
          />

          <Title data-aos="fade-up" className={classes.title}>
            {`Halo, I'm `}
            <Text component="span" className={classes.highlight} inherit>
              Nurul Fajri
            </Text>
          </Title>

          <Title data-aos="fade-up" c="dimmed" className={classes.subtitle}>
            {`Software Engineer at `}
            <Text component="span" inherit>
              {company}
            </Text>
          </Title>

          <Container p={0} size={600}>
            <Text
              data-aos="fade-up"
              size="lg"
              c="dimmed"
              className={classes.description}
            >
              {`I currently work as a software engineer at ${company}, 
              I have more than ${experience} years of experience creating applications 
              in the private and government sectors. I like sports and also travelling. 
              On the other hand, I also enjoy learning new things in technology and other fields.`}
            </Text>
          </Container>

          <ColorSchemeToggle />
        </Stack>
      </div>
    </>
  );
}
