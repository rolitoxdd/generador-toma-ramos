import { NextPage } from "next";
import { Grid } from "@mui/material";

import { SubjectData } from "@/models/subjects";
import CoursesProvider from "@/providers/Courses";

import CoursesForm from "@/components/CoursesForm";
import Timetable from "@/components/Timetable";
import GeneratedScheduleModal from "@/components/GeneratedScheduleModal";

export { getServerSideProps } from "@/controllers/Career";

export type CareerProps = {
  career: string;
  subjects: Array<SubjectData>;
};

const Career: NextPage<CareerProps> = ({ career, subjects }) => {
  return (
    <CoursesProvider career={career} subjects={subjects}>
      <Grid container spacing={5} sx={{ paddingTop: "35px" }}>
        <Grid item xs={12} md={8}>
          <Timetable />
        </Grid>
        <Grid item xs={12} md={4}>
          <CoursesForm />
        </Grid>
      </Grid>
      <GeneratedScheduleModal />
    </CoursesProvider>
  );
};

export default Career;
