import { 
    createContext, 
    useEffect, 
    useState 
} from 'react';

import Cookies from 'js-cookie';

import type { 
    ChallengesContextData, 
    ChallengesProviderProps 
} from '../types/ChallengesTypes';

import { LevelUpModal } from '../components/LevelUpModal';

import challenges from '../../challenges.json';

export const ChallengesContext = createContext({} as ChallengesContextData);
export function ChallengesProvider({ children,  ...rest}: ChallengesProviderProps) {
    const [userName] = useState(rest.userName ?? "Annonymous");
    const [userImage] = useState(rest.userImage ?? "/icons/profile/vercel.png")
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

        let emoji;

        if (challenge.type === "body") {
            emoji = "💪"
        } else if (challenge.type === "eye") {
            emoji = "👁️"
        }

        new Notification(`Novo Desafio ${emoji}`, {
            body: `${challenge.description}\n(${challenge.amount}xp)`
        })
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
            userName,
            userImage,
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