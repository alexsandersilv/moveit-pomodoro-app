import { useContext } from 'react';

import Image from 'next/image'

import { ChallengesContext } from '../contexts/ChallengesContext';
import Styles from '../styles/components/Profile.module.css';
export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={Styles.profileContainer}>
            <div>
            <Image src="/vercel.png"
                width={80}
                height={80}
                alt="level" />
            </div>
            <div>
                <strong>Annonymous</strong>
                <p>
                    <Image src="/icons/level.svg"
                        width={14}
                        height={16}
                        alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}