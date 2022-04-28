import Image from 'next/image';

import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import Styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {

    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return (
        <div className={Styles.overlay}>
            <div className={Styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p> Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModal}> 
                    <Image src="/icons/modal/close.svg"
                        width={40}
                        height={40}
                        alt="close modal" />
                </button>
            </div>
        </div>
    );
}