import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Canvas from '../components/Canvas';
import Shoe from '../components/Shoe';

const Home: NextPage = () => {
    const router = useRouter();

    
    return (
        <div>
            <Head>
                <title>Shoes Shop</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='radial dark:bg-[#151515]'>
                <div className='w-full h-[91.25vh] flex flex-col md:justify-center md:items-center z-[-10] relative'>
                    <p className='lg:text-4xl md:tracking-[20px] drop-shadow-2xl shadow-black text-pink-400 font-semibold lg:mb-12 text-center md:text-xl mt-10 text-2xl character '>
                        THE PURE COMPORT IS HERE
                    </p>
                    <span className='hidden lg:block lg:text-[350px] bebas tracking-widest drop-shadow-2xl text-pink-400 shadow-white scale '>
                        BOOST
                    </span>
                </div>

                <Canvas />
                <Shoe />
                <div className='w-full flex justify-center'>
                    <Link href='/man'>
                        <a className='mt-16 px-10 py-4 bg-pink-500 rounded hover:bg-pink-600 absolute bottom-8 font-medium drop-shadow-2xl shadow-black transition-all '>
                            SHOP NOW
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Home;