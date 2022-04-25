
import Styles from '../styles/components/Profile.module.css';
export function Profile() {
    return (
        <div className={Styles.profileContainer}>
            <img src="/vercel.png" alt="user iamge" />
            <div>
                <strong>Annonymous</strong>
                <p>
                    <img src="/icons/level.svg" alt="level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}