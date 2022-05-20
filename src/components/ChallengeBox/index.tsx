import Image from 'next/image';

import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

export function ChallengeBox() {
	const { activeChallenge, completeChallenge, resetChallenge } = useContext(ChallengesContext);
	const { resetCountdown } = useContext(CountdownContext)

	function handleChallengeSucceeded() {
		completeChallenge();
		resetCountdown();
	}

	function handleChallengeFailed() {
		resetChallenge();
		resetCountdown();
	}

	return (
		<div 
			className="
				flex flex-col justify-center items-center text-center
				h-full py-6 px-8
				bg-black-nav rounded shadow 
			"
		>
			{ activeChallenge ? (
				<div 
					className="
						flex flex-col 
						h-full
					"
				>
					<header
						className="
							pt-0 pl-8 pb-6
							font-semibold
							border-b-2 border-b-blue-normal
							text-blue-normal
						"
					>Ganhe {activeChallenge.amount} xp</header>

					<main
						className="
							flex flex-1 flex-col justify-center items-center
						"
					>
							<Image
								src={`/icons/challenges/${activeChallenge.type}.svg`}
								height={150}
								width={125}
								alt="challenge image" 
							/>
							<strong
								className="
									mt-6 ml-0 m-4
									text-2xl font-semibold
								"
							>
								Novo Desafio.
							</strong>
							<p
								className="
									leading-normal
								"
							>
								{activeChallenge.description}
							</p>
					</main>
					
					<footer
						className="
							grid grid-cols-2 gap-4
							
							lg:grid-cols-1
							"
					>
						<button 
								className="btn
									bg-button-succeeded
								"
								type="button"
								onClick={handleChallengeSucceeded}
						>
							Completei
						</button>

						<button 
								className="btn
									bg-button-failed
								"
								type="button"
								onClick={handleChallengeFailed}
						>
							Falhei
						</button>
					</footer>
				</div>
			) : (
				<div 
					className="
						flex flex-col items-center
					"
				>
					<strong
						className="
							text-2xl font-medium leading-normal
						"
					>Finalize um ciclo para receber um desafio</strong>
					<p
						className="
							flex flex-col items-center 
							max-w-[70%] mt-12
							leading-normal
						"
					>
						<Image
							src="/icons/challenges/level-up.svg"
							width={85}
							height={85}
							alt="level up" 
						/>
						Avance de level completando desafios.
					</p>
				</div>
				)}
		</div>
	);
}