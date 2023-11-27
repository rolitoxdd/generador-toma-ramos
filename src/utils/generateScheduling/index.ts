import { CourseData } from "@/store";

export type generateSchedulingParams = {
  alreadySelectedCourses: CourseData[];
  notSelectedCourses: CourseData[];
};
export { default as dfs, default as default } from "./dfs";
