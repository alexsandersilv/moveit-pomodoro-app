import { useSession, signIn, signOut } from "next-auth/react"

import Link from 'next/link';
import Image from 'next/image';

export function Sidebar() {

  const { data: session } = useSession()

  return (
    <div className="lg:z-10">
      <nav>
        <ul className="flex flex-col justify-center gap-6 w-16 top-0 left-0 bottom-0 fixed bg-black-nav bg-opacity-100 list-none lg:flex-row lg:w-full lg:h-16 lg:top-0 lg:left-0">
          <li className="hover:border-r-2 hover:border-r-blue-normal lg:hover:border-r-0 lg:hover:border-b-2 lg:hover:border-b-blue-normal">
            <Link href="/">
              <a>
                <Image 
                  src="/icons/navbar/moveit.svg"
                  width={50}
                  height={50}
                  alt="moveit icon" 
                />
              </a>
            </Link>
          </li>
          <li className="hover:border-r-2 hover:border-r-blue-normal lg:hover:border-r-0 lg:hover:border-b-2 lg:hover:border-b-blue-normal">
            <Link 
              href="#"
              >
                <a>
                  <Image 
                    src="/icons/navbar/medal.svg"
                    width={50}
                    height={50}
                    alt="medal icon" 
                  />
                </a>
            </Link>
          </li>
          <li className="hover:border-r-2 hover:border-r-blue-normal lg:hover:border-r-0 lg:hover:border-b-2 lg:hover:border-b-blue-normal">
            { session ? (
              <a onClick={() => signOut()}>
                <Image 
                  src="/icons/navbar/github.svg"
                  width={50}
                  height={50}
                  alt="github icon" 
                />
              </a>
            ) : (
              <a onClick={() => signIn("github")}>
                <Image 
                  src="/icons/navbar/github.svg"
                  width={50}
                  height={50}
                  alt="github icon" 
                />
              </a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}