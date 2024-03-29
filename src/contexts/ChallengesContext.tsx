import { 
  createContext, 
  useEffect, 
  useState 
} from 'react';

import Cookies from 'js-cookie';

import type { 
  Challenge,
  ChallengesContextData, 
  ChallengesProviderProps 
} from '../types/ChallengesTypes';

import { LevelUpModal } from '../components/LevelUpModal';

import challenges from '../../challenges.json';

export const ChallengesContext = createContext({} as ChallengesContextData);
export function ChallengesProvider({ children,  ...rest}: ChallengesProviderProps) {
  const [userName] = useState(rest.userName ?? "Anonymous");
  const [userImage] = useState(rest.userImage ?? "/icons/profile/vercel.png")
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 7, 2);

  useEffect(() => {
    Notification.requestPermission();
  },[])

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  },[level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengesIndex];

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    let emoji;

    if (challenge.type === "body") {
      emoji = "💪"
    } else if (challenge.type === "eye") {
      emoji = "👁️"
    }

    new Notification(`Novo Desafio ${emoji}`, {
      body: `${challenge.description}\n(${challenge.amount}xp)`,
      icon: "/favicon.ico"
    })
  }
  
  function completeChallenge() {
    if (!activeChallenge){
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);

  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider 
      value={{
        userName,
        userImage,
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        completeChallenge,
        resetChallenge,
        closeLevelUpModal
      }}
    >
      { children }
      { isLevelUpModalOpen && <LevelUpModal /> }
    </ChallengesContext.Provider>
  );
}