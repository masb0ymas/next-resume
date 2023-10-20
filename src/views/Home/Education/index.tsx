import { Grid, Stack } from "@mantine/core";
import { Dots } from "~/core/components/Dots";
import CardWorkEdu from "../partials/CardWorkEdu";
import SectionHead from "../partials/SectionHead";
import classes from "../partials/home.module.css";
import jsonData from "./education.json";

export default function EducationSection() {
  const cards = jsonData.data.map((item, index) => {
    return <CardWorkEdu data={item} index={index} key={item.id} />;
  });

  return (
    <>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Stack gap={10} justify="center" align="center">
          <SectionHead
            title="Education & Certification"
            subtitle="Education and certification that I have obtained."
          />

          <Grid p={20}>{cards}</Grid>
        </Stack>
      </div>
    </>
  );
}
