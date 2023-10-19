"use client";

import {
  ActionIcon,
  Group,
  Text,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMastodon,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import classes from "./footer.module.css";

const data = [
  {
    label: "Linked in",
    url: "https://www.linkedin.com/in/masb0ymas/",
    icon: <IconBrandLinkedin size={24} stroke={1.5} />,
  },
  {
    label: "Twitter",
    url: "https://twitter.com/masb0ymas",
    icon: <IconBrandX size={24} stroke={1.5} />,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100000480470670",
    icon: <IconBrandFacebook size={24} stroke={1.5} />,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/masb0ymas/",
    icon: <IconBrandInstagram size={24} stroke={1.5} />,
  },
  {
    label: "Mastodon",
    url: "https://mastodon.social/@masb0ymas",
    icon: <IconBrandMastodon size={24} stroke={1.5} />,
  },
];

export default function PublicFooter() {
  return (
    <div className={classes.footer}>
      <Group justify="space-between" mt={10}>
        <UnstyledButton
          component={Link}
          href="https://github.com/masb0ymas"
          target="_blank"
        >
          <Tooltip
            label="Github"
            transitionProps={{ transition: "pop", duration: 300 }}
          >
            <Group gap="xs">
              <IconBrandGithub size={28} />
              <Text fw={600} component="span">
                @masb0ymas
              </Text>
            </Group>
          </Tooltip>
        </UnstyledButton>

        <Group gap={5} className={classes.links} justify="right">
          {data.map((item) => {
            return (
              <Tooltip
                label={item.label}
                transitionProps={{ transition: "pop", duration: 300 }}
                key={item.label}
              >
                <ActionIcon
                  size="lg"
                  variant="transparent"
                  component={Link}
                  href={item.url}
                  target="_blank"
                >
                  {item.icon}
                </ActionIcon>
              </Tooltip>
            );
          })}
        </Group>
      </Group>

      <Tooltip
        label="Hire me..."
        position="left"
        withArrow
        transitionProps={{ transition: "slide-left", duration: 300 }}
      >
        <ActionIcon
          className={classes.float_button}
          component={Link}
          href="https://api.whatsapp.com/send/?phone=+6287837554403&text=Hi, I am interested in your portfolio, would you be willing to discuss it with me?"
          passHref
          target="_blank"
        >
          <IconBrandWhatsapp size={40} />
        </ActionIcon>
      </Tooltip>
    </div>
  );
}
