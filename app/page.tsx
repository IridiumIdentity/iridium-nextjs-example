'use client'
import Image from 'next/image'
import styles from './page-styles.module.css'
import { IridiumNextJSClientService } from '@iridiumidentity/iridium-nextjs-client';

export default function Home() {
    let client = new IridiumNextJSClientService()

    async function loginWithRedirect() {

        client.authenticateWithExternalRedirect()
    }
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

              <a
                  className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                  href="https://docs.iridium.software"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Read Iridium Docs
              </a>

              <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                  <button onClick={loginWithRedirect}>Login</button>
              </div>
          </div>

          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
              <div className={styles.container}>

                  Powered By
                  <Image
                      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                      src="/next.svg"
                      alt="Next.js Logo"
                      width={100}
                      height={37}

                  />
                  Secured By
                  <Image
                      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                      src="/iridium-3C-xl.png"
                      alt="Iridium Logo"
                      width={280}
                      height={37}
                      priority
                  />
              </div>

          </div>

          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

          </div>
      </main>
  )
}
