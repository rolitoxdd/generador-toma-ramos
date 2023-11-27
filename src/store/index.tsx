import { SectionData } from "@/models/sections";
import { SubjectData } from "@/models/subjects";
import { SubjectWithSections } from "@/providers/Courses";
import { create } from "zustand";

export type CourseData = SubjectWithSections & {
  selectedSection?: SectionData;
};

type State = {
  selectedCourses: Array<CourseData | null>;
};

type Actions = {
  addCourse: () => void;
  removeCourse: (index: number) => void;
  selectCourse: (index: number, course: CourseData) => void;
};

export const useStore = create<State & Actions>((set) => ({
  selectedCourses: [null],
  addCourse: () =>
    set((state) => ({
      selectedCourses: [...state.selectedCourses, null],
    })),
  removeCourse: (index) =>
    set((state) => {
      return {
        selectedCourses: state.selectedCourses.filter((_, i) => i !== index),
      };
    }),
  selectCourse: (index, course) =>
    set((state) => {
      const selectedCourses = [...state.selectedCourses];
      selectedCourses[index] = course;
      return {
        selectedCourses,
      };
    }),
}));
