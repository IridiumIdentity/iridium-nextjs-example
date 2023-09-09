'use client'

import { IridiumNextJSClientService } from '@iridiumidentity/iridium-nextjs-client';
import { useEffect, useState } from 'react';
import styles from '@/app/page-styles.module.css';
import Image from 'next/image';

export default function Callback() {
    const [displayMessage, setDisplayMessage ]  = useState("");
    const iridiumClient = new IridiumNextJSClientService();

    function ExchangeMessage({ message }) {
        return <div>{message}</div>;
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(iridiumClient.generateExchangeURL(), iridiumClient.generateExchangeHeaders());
            const isSuccessful = await iridiumClient.processExchangeResponse(response);
            if (isSuccessful) {
                setDisplayMessage("The user has successfully authorized your application")
            } else {
                setDisplayMessage("There was an error authorizing your application")
            }
            return isSuccessful
        }

        fetchData().catch(console.error)
    }, []);

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

            </div>

            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className={styles.container}>


                    <ExchangeMessage message={displayMessage}/>
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
