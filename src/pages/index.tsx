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

const Home: NextPage<HomeProps> = ({ username, userImage, level, currentExperience,challengesCompleted }) => {

  return (
    <ChallengesProvider 
      userName={username} 
      level={level} 
      currentExperience={currentExperience} 
      challengesCompleted={challengesCompleted} 
      userImage={userImage} 
    >
      <div className="flex  flex-col h-[100vh] max-w-[992px] my-0 mx-auto py-9 px-10">
        <Head>
          <title>Move.It Pomodoro</title>
        </Head>

        <Sidebar />
        <ExperienceBar />

        <CountdownProvider>
          <section className="flex-1 grid grid-cols-2 gap-24 content-center lg:mt-12 md:gap-8 md:grid-cols-1">
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