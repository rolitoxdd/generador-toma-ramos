import { GetServerSideProps } from "next";
import { HomeProps } from "@pages/index";
import Career from "@/models/career";

let careers: Array<string> = [];

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  if (!careers.length) {
    careers = await Career.fetchAll();
  }
  return {
    props: { careers },
  };
};
