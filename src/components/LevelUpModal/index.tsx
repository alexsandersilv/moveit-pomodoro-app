import Image from 'next/image';

import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

export function LevelUpModal() {

  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div 
      className="flex justify-center items-center top-0 left-0 bottom-0 right-0 fixed bg-[#050505cc]"
    >
      <div
        className="text-center w-full max-w-[400px] p-12 relative rounded shadow-sm bg-black-nav"
      >
        <header
          className="text-9xl font-semibold bg-contain bg-[url('/icons/modal/levelup.svg')] bg-no-repeat bg-center text-blue-normal"
        >
          {level}
        </header>

        <strong
          className="text-4xl text-blue-dark"
        >
          Parabéns
        </strong>
        <p
          className="text-xl mt-1"
        >
          Você alcançou um novo level.
        </p>

        <button 
          className="top-2 right-2 bg-transparent rounded absolute hover:bg-black-bg"
          type="button"
          onClick={closeLevelUpModal}
        > 
          <Image 
            src="/icons/modal/close.svg"
            width={40}
            height={40}
            alt="close modal" 
          />
        </button>
      </div>
    </div>
  );
}