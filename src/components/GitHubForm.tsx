
import Styles from '../styles/components/GitHubForm.module.css';
export function GitHubForm() {
    return (
        <div className={Styles.gitHubFormContainer}>
            <form>

                <strong>
                    <img src="/icons/navbar/github.svg" alt="github icon" />
                    
                    Faça o login para salvar o seu progresso.
                </strong>
                
                <button type="button"> Fazer Login </button>
            </form>
        </div>
    );
}