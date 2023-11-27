export type SubjectData = {
  code: string;
  name: string;
  credits: number;
  references: Array<string>;
};

class Subject {
  static #subjects: Record<string, Array<SubjectData>> = {};
  static async fetchAll(career: string) {
    if (this.#subjects[career]) {
      return this.#subjects[career];
    }
    const subjects = await import(`@public/subjects/${career}.json`);
    this.#subjects[career] = subjects.default;
    return this.#subjects[career];
  }
}

export default Subject;
