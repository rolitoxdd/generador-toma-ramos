import generateScheduling, {
  generateSchedulingParams,
} from "../utils/generateScheduling";

self.onmessage = (e: MessageEvent<generateSchedulingParams>) => {
  const { alreadySelectedCourses, notSelectedCourses, strategy } = e.data;
  const result = generateScheduling({
    alreadySelectedCourses,
    notSelectedCourses,
    strategy,
  });
  self.postMessage(result);
};
