import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

export function Countdown() {

  const { minutes, seconds, hasFinished, resetCountdown, startCountdown, isActive } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
		<div>
			<div 
				className="flex items-center font-['Rajdhani'] font-semibold"
			>
				<div
					className="countdown"
				>
					<span 
						className="flex-1 border-l-2 border-l-black-bg border-r-2 border-r-black-bg"
					>
						{minuteLeft}
					</span>
					<span
						className="flex-1"
					>
						{minuteRight}
					</span>
				</div>
				<span
					className="my-0 mx-2 text-9xl"
				>
					:
				</span>
				<div
					className="countdown"
				>
					<span
						className="flex-1 border-r-2 border-r-black-bg border-l-2 border-l-black-bg"
					>
						{secondLeft}
					</span>
					<span
						className="flex-1"
					>
						{secondRight}
					</span>
				</div>
			</div>

			{ hasFinished ? (
				<button 
					className="countdown-btn bg-blue-dark cursor-not-allowed"
					disabled
				>
					Ciclo encerrado               
				</button>         
			) : (
				<>
					{ isActive ? (
						<button 
							className="countdown-btn hover:bg-button-failed"
							type="button"
							onClick={resetCountdown}
						>
							Abandonar ciclo                
						</button>
					) : (
						<button
							className="countdown-btn hover:bg-blue-dark"
							type="button"
							onClick={startCountdown}
						>
							Iniciar ciclo
						</button>
					)}
				</>
			)}

		</div>
  );
}