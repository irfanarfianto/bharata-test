import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Selamat Datang">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#FDFDFC] p-6 text-[#1b1b18] dark:bg-[#0a0a0a]">
                {/* Konten utama di tengah */}
                <main className="flex flex-1 flex-col items-center justify-center w-full">
                    <h1 className="text-4xl font-extrabold text-[#232325] dark:text-[#EDEDEC] mb-4 text-center">
                        Selamat Datang!
                    </h1>
                
                    {!auth.user && (
                        <Link
                            href={route('login')}
                            className="inline-block rounded-sm border border-[#19140035] px-8 py-3 text-lg font-semibold leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b] transition-colors"
                        >
                            Masuk
                        </Link>
                    )}
                    {auth.user && (
                        <Link
                            href={route('dashboard')}
                            className="inline-block rounded-sm border border-[#19140035] px-8 py-3 text-lg font-semibold leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b] transition-colors"
                        >
                            Dashboard
                        </Link>
                    )}
                </main>
            </div>
        </>
    );
}