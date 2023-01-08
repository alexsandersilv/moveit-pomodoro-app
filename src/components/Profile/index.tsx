import Image from 'next/image';

import { useSession } from 'next-auth/react';


import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

export function Profile() {
  const { data: session } = useSession()

  const { userName, userImage, level } = useContext(ChallengesContext);

  return (
    <div className="flex items-center">
      <div className="ml-6 rounded-[50%]">
        <Image className="rounded-full"
          src={ session ? `${session.user?.image}` : `${userImage}` }
          width={80}
          height={80}
          alt="profile" 
        />
      </div>
      <div className="ml-6">
        <strong className="text-2xl font-semibold">
          { session ? session.user?.name : userName }
        </strong>
        <p className="flex gap-3 text-base mt-2">
          <Image 
            src="/icons/profile/level.svg"
            width={14}
            height={16}
            alt="level" 
          />
          Level {level}
        </p>
      </div>
    </div>
  );
}