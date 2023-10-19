import { Grid, Group, Paper, Stack, Text, ThemeIcon, rem } from "@mantine/core";
import {
  IconDeviceLaptop,
  IconDevices,
  IconInfoCircle,
  IconSchool,
  IconSocial,
} from "@tabler/icons-react";
import { intervalToDuration } from "date-fns";
import classes from "./home.module.css";

interface WorkEduEntity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
  tag: string;
}

interface CardWorkEduProps {
  data: WorkEduEntity;
  index: number;
}

export default function CardWorkEdu(props: CardWorkEduProps) {
  const { data, index } = props;

  const iconStyle = { width: rem(28), height: rem(28) };

  let new_end_date = new Date();

  if (data.end_date) {
    new_end_date = new Date(data.end_date);
  }

  const distance = intervalToDuration({
    start: new Date(data.start_date),
    end: new_end_date,
  });

  let distance_period = "";

  if (Number(distance.years) > 0 && Number(distance.months) > 0) {
    distance_period = `${distance.years} years ${distance.months} months`;
  } else if (Number(distance.months) === 0) {
    distance_period = `${distance.years} years`;
  } else {
    distance_period = `${distance.months} months`;
  }

  let icon = <IconInfoCircle style={iconStyle} stroke={1.5} />;

  if (data.tag === "school") {
    icon = <IconSchool style={iconStyle} stroke={1.5} />;
  } else if (data.tag === "device") {
    icon = <IconDevices style={iconStyle} stroke={1.5} />;
  } else if (data.tag === "device-laptop") {
    icon = <IconDeviceLaptop style={iconStyle} stroke={1.5} />;
  } else if (data.tag === "social") {
    icon = <IconSocial style={iconStyle} stroke={1.5} />;
  }

  return (
    <Grid.Col span={{ base: 12, xs: 6, sm: 6 }} key={data.id}>
      <Paper
        withBorder
        radius="md"
        className={data.is_active ? classes.card_line : classes.card_line_off}
        data-aos="zoom-in"
        data-aos-delay={100 * (index + 1)}
      >
        <Group>
          <ThemeIcon
            size="xl"
            radius="md"
            variant="gradient"
            gradient={
              data.is_active
                ? { deg: 0, from: "cyan", to: "blue" }
                : { deg: 0, from: "gray", to: "#0e0e0e" }
            }
          >
            {icon}
          </ThemeIcon>
          <Text size="xl" fw={500} mt="md">
            {data.title}
          </Text>
        </Group>

        <Stack gap={5}>
          <Text size="lg" fw={600} mt="md">
            {data.subtitle}
          </Text>

          <Group justify="space-between">
            <Text size="sm" fw={500} c="dimmed">
              {data.period}
            </Text>

            <Text size="sm" fw={500} c="dimmed">
              {distance_period}
            </Text>
          </Group>
        </Stack>

        <Text size="sm" mt="sm">
          {data.description}
        </Text>
      </Paper>
    </Grid.Col>
  );
}
