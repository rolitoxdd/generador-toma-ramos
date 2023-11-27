import generateScheduling, {
  generateSchedulingParams,
} from "../utils/generateScheduling";

self.onmessage = (e: MessageEvent<generateSchedulingParams>) => {
  const { alreadySelectedCourses, notSelectedCourses } = e.data;
  const result = generateScheduling({
    alreadySelectedCourses,
    notSelectedCourses,
  });
  self.postMessage(result);
};
