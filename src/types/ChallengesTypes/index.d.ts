import { ReactNode } from 'react';

interface Challenge {
  type: string,
  description: string,
  amount: number
}

export interface ChallengesProviderProps {
  children: ReactNode,
  userName: string,
  userImage: string,
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export interface ChallengesContextData {
  userName: string,
  userImage: string,
  level: number,
  currentExperience: number,
  challengesCompleted: number,
  activeChallenge: Challenge | null,
  experienceToNextLevel: number,
  levelUp: () => void,
  startNewChallenge: () => void,
  completeChallenge: () => void,
  resetChallenge: () => void,
  closeLevelUpModal: () => void
}