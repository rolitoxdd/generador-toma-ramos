import { FC, memo } from "react";

import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@mui/material";
import withSelectedCourses from "./withSelectedCourses";
import { TimeBlockData } from "@/models/sections";
import { CourseData } from "@/store";

export type TimeBlockWithCourse = TimeBlockData & {
  course: CourseData;
};

export type TimetableProps = {
  timeBlocks: TimeBlockWithCourse[];
};

export const BLOCKS: Record<string, string> = {
  A: "08:30 - 09:50",
  B: "10:00 - 11:20",
  C: "11:30 - 12:50",
  D: "13:00 - 14:20",
  E: "14:30 - 15:50",
  F: "16:00 - 17:20",
  G: "17:30 - 18:50",
  // H: "19:00 - 20:20",
  // I: "20:30 - 21:50",
};

const DAYS = ["LU", "MA", "MI", "JU", "VI"];

export const Timetable: FC<TimetableProps> = memo(function Timetable({
  timeBlocks,
}) {
  if (
    timeBlocks.find(
      (timeblock) => timeblock.block === "H" || timeblock.block === "I"
    )
  ) {
    BLOCKS.H = "19:00 - 20:20";
    BLOCKS.I = "20:30 - 21:50";
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>*</TableCell>
          <TableCell>Lunes</TableCell>
          <TableCell>Martes</TableCell>
          <TableCell>Miercoles</TableCell>
          <TableCell>Jueves</TableCell>
          <TableCell>Viernes</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(BLOCKS).map(([block, time]) => (
          <TableRow key={block}>
            <TableCell>
              {block}: {time}
            </TableCell>
            {DAYS.map((day) => {
              const timeBlock = timeBlocks.find(
                (timeBlock) =>
                  timeBlock.day === day && timeBlock.block === block
              );
              return (
                <TableCell key={day} sx={{ lineHeight: "15px" }}>
                  {timeBlock ? (
                    <>
                      {timeBlock.course.name} <br />{" "}
                      <small>{timeBlock.course.selectedSection.section} </small>{" "}
                      <br />
                      <small>{timeBlock.teacher} </small>
                    </>
                  ) : (
                    ""
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
});

export default withSelectedCourses(Timetable);
