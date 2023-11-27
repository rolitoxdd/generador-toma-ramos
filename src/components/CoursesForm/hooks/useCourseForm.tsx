import { useStore } from "@/store";
import generateScheduling from "@/utils/generateScheduling";

import { FormEventHandler } from "react";

const useCourseForm = () => {
  const selectedCourses = useStore((store) => store.selectedCourses);
  const addCourse = useStore((store) => store.addCourse);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const alreadySelectedCourses = selectedCourses.filter(
      (c) => c.selectedSection?.code
    );
    const notSelectedCourses = selectedCourses.filter(
      (c) => !c.selectedSection?.code
    );
    const worker = new Worker(
      new URL("../../../workers/generateScheduling.ts", import.meta.url)
    );

    worker.postMessage({ alreadySelectedCourses, notSelectedCourses });
    worker.onmessage = (e) => {
      const schedule = e.data;
      // once the schedule is generated, show it to the user
    };
  };
  return { selectedCourses, addCourse, handleSubmit };
};

export default useCourseForm;
