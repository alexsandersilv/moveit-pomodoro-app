import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: "body" | "eye",
    description: string,
    amount: number
}

interface ChallengesProviderProps {
    children: ReactNode
}

interface ChallengesContextData {
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    acitveChallenge: Challenge,
    experienceToNextLevel: number,
    levelUp: () => void,
    startNewChallenge: () => void,
    resetChallenge: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChalllengesCompleted] = useState(0);

    const [acitveChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 7, 2);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengesIndex];

        setActiveChallenge(challenge);
    }
    
    function resetChallenge() {
        setActiveChallenge(null);
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            acitveChallenge,
            experienceToNextLevel,
            levelUp,
            startNewChallenge,
            resetChallenge
        }}>
            { children }
        </ChallengesContext.Provider>
    );
}