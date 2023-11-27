import { CourseData } from "@/store";
import timeBlocksDontOverlap from "../timeBlocksDontOverlap";
import { generateSchedulingParams } from ".";

export function astar({
  alreadySelectedCourses,
  notSelectedCourses,
}: generateSchedulingParams): CourseData[] | null {
  if (!notSelectedCourses.length) {
    return alreadySelectedCourses;
  }
  const course = notSelectedCourses[0];

  const possibleSections = course.sections;
  for (const section of possibleSections) {
    const newAlreadySelectedCourses = [
      ...alreadySelectedCourses,
      { ...course, selectedSection: section },
    ];

    const timeBlocks = newAlreadySelectedCourses.map(
      (course) => course.selectedSection.timeBlocks
    );
    if (timeBlocksDontOverlap(timeBlocks.flat())) {
      const result = astar({
        alreadySelectedCourses: newAlreadySelectedCourses,
        notSelectedCourses: notSelectedCourses.slice(1),
      });
      if (result) {
        return result;
      }
    }
  }
  return null;
}

export default astar;
