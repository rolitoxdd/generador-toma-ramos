import { FC, memo } from "react";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableContainer,
} from "@mui/material";
import withSelectedCourses from "./withSelectedCourses";
import { TimeBlockData } from "@/models/sections";
import { CourseData } from "@/store";
import StyledTableCell from "./StyledTableCell";

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

export const DAYS = ["LU", "MA", "MI", "JU", "VI"];

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
    <TableContainer>
      <Table border={1}>
        <TableHead>
          <TableRow>
            <StyledTableCell variant="head">*</StyledTableCell>
            <StyledTableCell variant="head">Lunes</StyledTableCell>
            <StyledTableCell variant="head">Martes</StyledTableCell>
            <StyledTableCell variant="head">Miercoles</StyledTableCell>
            <StyledTableCell variant="head">Jueves</StyledTableCell>
            <StyledTableCell variant="head">Viernes</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(BLOCKS).map(([block, time]) => (
            <TableRow key={block}>
              <StyledTableCell>
                {block}: {time}
              </StyledTableCell>
              {DAYS.map((day) => {
                const timeBlock = timeBlocks.find(
                  (timeBlock) =>
                    timeBlock.day === day && timeBlock.block === block
                );
                return (
                  <StyledTableCell key={day} sx={{ lineHeight: "15px" }}>
                    {timeBlock ? (
                      <>
                        {timeBlock.course.name} <br />{" "}
                        <small>
                          {timeBlock.course.selectedSection.section}
                          {" - "}
                          {timeBlock.description}
                        </small>{" "}
                        <br />
                        <small>{timeBlock.teacher} </small>
                      </>
                    ) : (
                      ""
                    )}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default withSelectedCourses(Timetable);
