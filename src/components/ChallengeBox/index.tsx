import Image from 'next/image';

import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import Styles from '../../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { acitveChallenge, completeChalleneg, resetChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceded() {
        completeChalleneg();
        resetCountdown();
    }

    function hadleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }
 
    return (
        <div className={Styles.challengeBoxContainer}>
            { acitveChallenge ? (
                <div className={Styles.challengesActive}>
                    <header>Ganhe {acitveChallenge.amount} xp</header>

                    <main>
                        <Image src={`/icons/challenges/${acitveChallenge.type}.svg`}
                            height={150}
                            width={125}
                            alt="challenge image" />
                        <strong>Novo Desafio.</strong>
                        <p>{acitveChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={Styles.challengeSucceededButton}
                            onClick={handleChallengeSucceded}
                        >
                            Completei
                        </button>
                        <button 
                            type="button"
                            className={Styles.challengeFailedButton}
                            onClick={hadleChallengeFailed}
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