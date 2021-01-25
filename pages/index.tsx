import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import SearchBox from '../components/SearchBox';

export const Index: React.FC<{buildTime: number}> = ({buildTime}) => {
  return <Layout buildTime={buildTime}>
    <SearchBox></SearchBox>
  </Layout>
}

export default Index;
export const getStaticProps: GetStaticProps<{buildTime: number}> = async () => {
  return {props: {buildTime: Date.now()}};
}