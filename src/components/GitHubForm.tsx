import Image from 'next/image';

import Styles from '../styles/components/GitHubForm.module.css';
export function GitHubForm() {
    return (
        <div className={Styles.gitHubFormContainer}>
            <form>

                <strong>
                    <Image src="/icons/navbar/github.svg"
                        width={250}
                        height={250}
                        alt="github icon" />
                    
                    Faça o login para salvar o seu progresso.
                </strong>
                
                <button type="button"> Fazer Login </button>
            </form>
        </div>
    );
}