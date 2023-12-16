import { SectionData } from "@/models/sections";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const CFG_FOLDER = "FORMACION-GENERAL";

export const CFG_FILES = [
  "DEPORTIVOS-FORMACIoN-GENERAL.json",
  "DIP-HONOR-HUMANIDADES-APROX.json",
  "DIPLOMA-DE-HONOR-EN-ASTRONOMiA.json",
  "DIP-DE-HONOR-P-CONTEMPORaNEO.json",
  "DIP-HONOR-MED-AM-CRIS-Y-T-SOS.json",
  "DIPLOMA-DE-HONOR-EN-GeNERO.json",
  "DIP-HONOR-EN-GEST-INNOVACIoN.json",
  "DIP-HONOR-POLiTICAS-PuBLICAS.json",
  "FORMACIoN-GENERAL.json",
];

const useSections = (career: string) => {
  const data = [];
  const { data: careerSections, isLoading } = useSWR<Array<SectionData>>(
    `/sections/${career}.json`,
    fetcher
  );
  if (careerSections) {
    data.push(...careerSections);
  }
  for (const cfgFile of CFG_FILES) {
    const { data: cfgSections } = useSWR<Array<SectionData>>(
      `/sections/${CFG_FOLDER}/${cfgFile}`,
      fetcher
    );
    if (cfgSections) {
      data.push(...cfgSections);
    }
  }
  return { data, isLoading };
};

export default useSections;
