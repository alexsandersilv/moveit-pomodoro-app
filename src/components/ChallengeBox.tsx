import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import Styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { acitveChallenge, resetChallenge } = useContext(ChallengesContext);

    return (
        <div className={Styles.challengeBoxContainer}>
            { acitveChallenge ? (
                <div className={Styles.challengesActive}>
                    <header>Ganhe {acitveChallenge.amount} xp</header>

                    <main>
                        <img src={`/icons/${acitveChallenge.type}.svg`} alt="challenge icon" />
                        <strong>Novo Desafio.</strong>
                        <p>{acitveChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={Styles.challengeSucceededButton}
                        >
                            Completei
                        </button>
                        <button 
                            type="button"
                            className={Styles.challengeFailedButton}
                            onClick={resetChallenge}
                        >
                            Falhei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={Styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="/icons/level-up.svg" alt="level up" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>

    );
}