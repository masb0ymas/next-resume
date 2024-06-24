import {
  Avatar,
  Button,
  Grid,
  Stack,
  Text,
  Title,
  Tooltip,
  rem,
} from "@mantine/core";
import _ from "lodash";
import { Dots } from "~/core/components/Dots";
import { formatDate } from "~/core/utils/date";
import SectionHead from "../partials/SectionHead";
import classes from "../partials/home.module.css";
import jsonData from "./experience.json";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

interface TimelineProps {
  logo: string;
  company: string;
  job: string;
  employment_type: string;
  location: string;
  content: string;
  start_date: Date | string;
  end_date: Date | string | null;
  index: number;
}

function Timeline(props: TimelineProps) {
  const {
    logo,
    company,
    job,
    employment_type,
    location,
    content,
    start_date,
    end_date,
    index,
  } = props;

  let new_start_date = formatDate(start_date);
  let new_end_date = "Present";

  if (!_.isNil(end_date)) {
    new_end_date = formatDate(end_date);
  }

  return (
    <section>
      <Grid
        columns={24}
        justify="center"
        align="stretch"
        data-aos="zoom-in"
        data-aos-delay={100 * (index + 1)}
      >
        <Grid.Col span={2}>
          <Tooltip label={company} withArrow>
            <Avatar src={logo} size="xl" radius={rem(60)} />
          </Tooltip>
        </Grid.Col>

        <Grid.Col>
          <Title order={3}>{job}</Title>
          <Text>{`${company} - ${employment_type}`}</Text>
          <Text c="dimmed" size="sm">
            {`${new_start_date} - ${new_end_date}`}
          </Text>
          <Text c="dimmed" size="sm">
            {location}
          </Text>

          <Text>{content}</Text>
        </Grid.Col>
      </Grid>
    </section>
  );
}

export default function ExperienceSection() {
  return (
    <>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Stack gap={10} justify="center" align="center">
          <SectionHead
            title="Experience"
            subtitle="My experience in both work and community."
          />

          <Stack gap="xl" mt={20}>
            {jsonData.data.map((item, index) => {
              return <Timeline {...item} index={index} key={item.id} />;
            })}
          </Stack>

          <Button
            mt={20}
            radius="md"
            variant="light"
            rightSection={<IconExternalLink />}
            component={Link}
            href="/static/pdf/en/my_resume.pdf"
            target="_blank"
            data-aos="zoom-in"
            data-aos-delay={100 * (jsonData.data.length + 1)}
          >
            View Resume
          </Button>
        </Stack>
      </div>
    </>
  );
}
