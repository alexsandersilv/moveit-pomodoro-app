import { ReactNode } from 'react';

interface Challenge {
    type: "body" | "eye",
    description: string,
    amount: number
}

export interface ChallengesProviderProps {
    children: ReactNode,
    level: number,
    currentExperience: number,
    challengesCompleted: number
}

export interface ChallengesContextData {
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    acitveChallenge: Challenge,
    experienceToNextLevel: number,
    levelUp: () => void,
    startNewChallenge: () => void,
    completeChalleneg: () => void,
    resetChallenge: () => void,
    closeLevelUpModal: () => void
}
