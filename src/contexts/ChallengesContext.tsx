import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';

interface Challenge {
    type: "body" | "eye",
    description: string,
    amount: number
}

interface ChallengesProviderProps {
    children: ReactNode,
    level: number,
    currentExperience: number,
    challengesCompleted: number
}

interface ChallengesContextData {
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

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ 
    children, 
    ...rest}: ChallengesProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChalllengesCompleted] = useState(rest.challengesCompleted ?? 0);

    const [acitveChallenge, setActiveChallenge] = useState(null);
    const [ isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

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

        //@ts-ignore
        setActiveChallenge(challenge);

        new Audio("/notification.mp3").play();

        if (Notification.permission === "granted") {
            new Notification('Novo Desafio', {
                body: "Valendo X de experience"
            })
        }
    }
    
    function completeChalleneg() {
        if (!acitveChallenge){
            return;
        }

        const { amount } = acitveChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChalllengesCompleted(challengesCompleted + 1);

    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            //@ts-ignore
            acitveChallenge,
            experienceToNextLevel,
            levelUp,
            startNewChallenge,
            completeChalleneg,
            resetChallenge,
            closeLevelUpModal
        }}>
            { children }

        { isLevelUpModalOpen && <LevelUpModal /> }
        </ChallengesContext.Provider>
    );
}