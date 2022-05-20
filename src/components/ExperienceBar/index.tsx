import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  
  const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel;

  return (
    <header 
      className="
        flex items-center

        lg:mt-20
      "
    >
      <span
        className="
          text-base
        "
      >
        0 xp
      </span>
      <div
        className="
          flex-1
          h-1 my-0 mx-6 relative
          rounded
          bg-black-nav
        "
      >
        <div 
          className="
            h-1
            rounded
            bg-button-succeeded
          "
          style={{ width: `${percentToNextLevel}%` }} 
        />
        <span
          className="
            text-base
            absolute
            top-3
            translate-x-6
          "
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp 
        </span>
      </div>
      <span
        className="
          text-base
        "
      >
        {experienceToNextLevel} xp
      </span>
    </header>
  );
}