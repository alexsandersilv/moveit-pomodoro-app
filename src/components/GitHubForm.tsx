import { useSession, signIn, signOut } from "next-auth/react"

import Image from 'next/image';

import Styles from '../styles/components/GitHubForm.module.css';
export function GitHubForm() {

    const { data: session } = useSession()

    return session ? (
        <div className={Styles.gitHubFormContainer}>
            <form>

                <strong>
                    <Image src={`${session.user?.image}`}
                        width={250}
                        height={250}
                        alt="github icon" />
                    
                    { session.user?.name }
                </strong>
                
                <button type="button"
                    onClick={() => signOut()}
                > 
                    Sair 
                </button>
            </form>
        </div>
    ) : (
        <div className={Styles.gitHubFormContainer}>
            <form>

                <strong>
                    <Image src="/icons/navbar/github.svg"
                        width={250}
                        height={250}
                        alt="github icon" />
                    
                    Faça o login para salvar o seu progresso.
                </strong>
                
                <button type="button"
                    onClick={() => signIn("github")}> Fazer Login </button>
            </form>
        </div>
    );
}