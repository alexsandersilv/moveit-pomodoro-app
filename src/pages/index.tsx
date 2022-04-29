import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';

import { useSession } from 'next-auth/react';

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
/*
export const getServerSideProps: GetServerSideProps = async(ctx: GetServerSidePropsContext) => {
    
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
        }
    }
}
*/

const Home: NextPage<HomeProps> = ({ username, userimage, level, currentExperience,challengesCompleted }) => {

    return (
        <ChallengesProvider userName={username} level={level} currentExperience={currentExperience} challengesCompleted={challengesCompleted} userImage={userimage} >
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