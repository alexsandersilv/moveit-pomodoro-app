import { useSession } from 'next-auth/react';
import Image from 'next/image';

import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import Styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { data: session } = useSession()

    const { userName, userImage, level } = useContext(ChallengesContext);

    return (
        <div className={Styles.profileContainer}>
            <div>
                <Image src={ session ? `${session.user?.image}` : `${userImage}` }
                    width={80}
                    height={80}
                    alt="profile" />
            </div>
            <div>
                <strong>{ session ? session.user?.name : userName }</strong>
                <p>
                <Image src="/icons/profile/level.svg"
                    width={14}
                    height={16}
                    alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}