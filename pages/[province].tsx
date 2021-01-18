import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import ActiveRulesList from '../components/ActiveRulesList';
import Layout from '../components/Layout';
import italianRegions from '../lib/italianRegions';
import { Province } from '../lib/types';
import { getActiveRules } from '../rules';

const Rules: React.FC<{rules: any[], province: Province, buildTime: number}> = ({buildTime, rules, province}) => {
    return <Layout buildTime={buildTime}>
        <ActiveRulesList rules={rules} province={province}></ActiveRulesList>
    </Layout>
}

export default Rules;
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: italianRegions.map(p => '/' + p.nome),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<{rules: any[], province: Province, buildTime: number}> = async ({params}) => {
    const {province} = params;
    const selectedProvince = italianRegions.find(p => p.nome === province);
    const rules = getActiveRules(selectedProvince)
    return {
        props: {
            rules,
            province: selectedProvince,
            buildTime: Date.now()
        }
    }
}

