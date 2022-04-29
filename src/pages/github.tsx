import type { NextPage } from 'next';
import Head from 'next/head';

import { Sidebar } from '../components/Sidebar';
import { GitHubForm } from '../components/GitHubForm';

import Styles from '../styles/pages/GitHub.module.css';

const GitHub: NextPage = () => {

    return (
        <div className={Styles.container}>
            <Head>
                <title>Move.It GitHub Login</title>
            </Head>

            <Sidebar />

            <GitHubForm />
    
        </div>
    );
}

export default GitHub