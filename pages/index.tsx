import { NextPage } from "next";
import { Grid } from "@mui/material";
import CareerSelect, { CareerSelectProps } from "@/components/CareerSelect";

export { getStaticProps } from "../src/controllers/Home";

export type HomeProps = CareerSelectProps;

const Home: NextPage<HomeProps> = ({ careers }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <CareerSelect careers={careers} />
    </Grid>
  );
};

export default Home;
