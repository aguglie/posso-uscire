import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import ActiveRulesList from "../components/ActiveRulesList";
import Layout from "../components/Layout";
import italianRegions from "../lib/italianRegions";
import { Province } from "../lib/types";
import { getActiveRules } from "../rules";

// eslint-disable-next-line react/prop-types
const Rules: React.FC<{
  rules: any[];
  province: Province;
  buildTime: number;
}> = ({ buildTime, rules, province }) => {
  return (
    <Layout buildTime={buildTime}>
      <ActiveRulesList rules={rules} province={province} />
    </Layout>
  );
};

export default Rules;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: italianRegions.map((p) => "/" + p.urlName),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  rules: any[];
  province: Province;
  buildTime: number;
}> = async ({ params }) => {
  const { province } = params;
  const selectedProvince = italianRegions.find((p) => p.urlName === province);
  const rules = getActiveRules(selectedProvince);
  return {
    props: {
      rules,
      province: selectedProvince,
      buildTime: Date.now(),
    },
  };
};
