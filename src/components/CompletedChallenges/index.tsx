import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className="flex justify-between items-center my-14 ml-0 pb-4 font-semibold border-b-2 border-b-text-normal">
      <span className="text-xl">
        Desafios Completos
      </span>
      <span className="text-2xl">
        {challengesCompleted}
      </span>
    </div>
  );
}