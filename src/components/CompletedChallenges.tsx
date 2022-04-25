import Styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    return (
        <div className={Styles.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <p>5</p>
        </div>
    );
}