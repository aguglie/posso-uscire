import { GetStaticProps } from "next";
import React from "react";
import Layout from "../components/Layout";
import SearchBox from "../components/SearchBox";
import PropTypes from "prop-types";
import urlUtils from "../lib/urlUtils";
import { useRouter } from "next/router";

export const Index: React.FC<{ buildTime: number }> = ({ buildTime }) => {
  const router = useRouter();

  urlUtils.hashConsumer((province) => router.push("/" + province));

  return (
    <Layout buildTime={buildTime}>
      <SearchBox />
    </Layout>
  );
};
Index.propTypes = {
  buildTime: PropTypes.number,
};

export default Index;
export const getStaticProps: GetStaticProps<{
  buildTime: number;
}> = async () => {
  return { props: { buildTime: Date.now() } };
};
