import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import Styles from '../../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={Styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <p>{ challengesCompleted }</p>
        </div>
    );
}