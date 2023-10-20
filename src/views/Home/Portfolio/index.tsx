import { Grid, Stack } from "@mantine/core";
import SectionHead from "../partials/SectionHead";
import classes from "../partials/home.module.css";
import CardPortfolio from "./partials/CardPortfolio";
import jsonData from "./portfolio.json";

export default function PortfolioSection() {
  const cards = jsonData.data.map((item, index) => (
    <Grid.Col span={{ base: 12, xs: 6, sm: 4 }} key={item.title}>
      <CardPortfolio data={item} index={index} />
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
