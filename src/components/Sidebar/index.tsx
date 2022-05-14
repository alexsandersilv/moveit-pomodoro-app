import { useSession, signIn, signOut } from "next-auth/react"

import Link from 'next/link';
import Image from 'next/image';

import Styles from '../../styles/components/Sidebar.module.css';

export function Sidebar() {

    const { data: session } = useSession()

    return (
        <div className={Styles.sidebarContainer}>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>
                                <Image src="/icons/navbar/moveit.svg"
                                    width={50}
                                    height={50}
                                    alt="moveit icon" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>
                                <Image src="/icons/navbar/medal.svg"
                                    width={50}
                                    height={50}
                                    alt="medal icon" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        { session ? (
                       <a onClick={() => signOut()}>
                            <Image src="/icons/navbar/github.svg"
                                width={50}
                                height={50}
                                alt="github icon" />
                        </a>
                        ) : (
                       <a onClick={() => signIn("github")}>
                            <Image src="/icons/navbar/github.svg"
                                width={50}
                                height={50}
                                alt="github icon" />
                        </a>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
}