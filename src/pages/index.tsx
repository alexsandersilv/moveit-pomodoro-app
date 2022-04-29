import type { NextPage } from 'next';
import Head from 'next/head';

import type { HomeProps } from '../types/HomeTypes';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { Sidebar } from '../components/Sidebar';

import Styles from '../styles/pages/Home.module.css';

const Home: NextPage<HomeProps> = ({ level, currentExperience,challengesCompleted }) => {
    return (
        <ChallengesProvider level={level} currentExperience={currentExperience} challengesCompleted={challengesCompleted} >
            <div className={Styles.container}>
                <Head>
                    <title>Move.It Pomodoro</title>
                </Head>

                <Sidebar />
                <ExperienceBar />

                <CountdownProvider>

                    <section>
                        <div>
                            <Profile />
                            <CompletedChallenges />
                            <Countdown />
                        </div>
                        <div>
                            <ChallengeBox />
                        </div>
                    </section>

                </CountdownProvider>
            </div>
        </ChallengesProvider>
    );
}


export default Home