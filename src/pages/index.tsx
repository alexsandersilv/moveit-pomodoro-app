import type { NextPage } from 'next';
import Head from 'next/head';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import Styles from '../styles/pages/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={Styles.container}>
            <Head>
                <title>Move.It Pomodoro</title>
            </Head>

            <ExperienceBar />

            <section>
                <div>
                    <Profile />
                    <CompletedChallenges />
                    <Countdown />
                </div>
                <div>

                </div>
            </section>
        </div>
    );
}

export default Home