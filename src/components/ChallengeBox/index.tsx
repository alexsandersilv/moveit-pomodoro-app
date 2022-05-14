import Image from 'next/image';

import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import Styles from '../../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, completeChallenge, resetChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }
 
    return (
        <div className={Styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={Styles.challengesActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <Image src={`/icons/challenges/${activeChallenge.type}.svg`}
                            height={150}
                            width={125}
                            alt="challenge image" />
                        <strong>Novo Desafio.</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={Styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                        <button 
                            type="button"
                            className={Styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={Styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                    <Image src="/icons/challenges/level-up.svg"
                            width={85}
                            height={85}
                            alt="level up" />                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>

    );
}