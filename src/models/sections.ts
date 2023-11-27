type Block = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I";

export type TimeBlockData = {
  day: string;
  block: Block;
  description: string; // CATEDRA || AYUDANTIA, etc
  isMandatory: boolean;
  teacher: boolean;
};

export type SectionData = {
  code: string;
  subjectCode: string;
  section: string; // user friendly section name (ex: "Sección 1")
  timeBlocks: Array<TimeBlockData>;
};

class Section {
  static #sections: Record<string, Array<SectionData>> = {};
  static async fetchAll(career: string) {
    if (this.#sections[career]) {
      return this.#sections[career];
    }
    const sections = await import(`@public/sections/${career}.json`);
    this.#sections[career] = sections.default;
    return this.#sections[career];
  }
}

export default Section;
