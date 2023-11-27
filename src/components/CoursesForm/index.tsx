import { memo, FC } from "react";
import { Button, FormControl } from "@mui/material";
import CourseSelect from "./CourseSelect";
import { useStore } from "@/store";
import useCourseForm from "./hooks/useCourseForm";

const CoursesForm: FC = memo(function CoursesForm() {
  const { selectedCourses, addCourse, handleSubmit } = useCourseForm();
  return (
    <form onSubmit={handleSubmit}>
      {selectedCourses.map((course, index) => (
        <CourseSelect
          key={index}
          course={course}
          selectedCoursesIndex={index}
        />
      ))}
      <Button
        onClick={addCourse}
        variant="contained"
        color="primary"
        sx={{ marginTop: "20px" }}
        disabled={selectedCourses.length >= 7}
        fullWidth
      >
        Agregar otro ramo
      </Button>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: "10px" }}
        fullWidth
        type="submit"
        disabled={selectedCourses
          .filter((c) => c)
          .every((c) => c.selectedSection?.code)}
      >
        Generar horario
      </Button>
    </form>
  );
});

export default CoursesForm;
