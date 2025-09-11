'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './loading.css';
import RingLoader from "react-spinners/ScaleLoader";

const LoadingScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 900); // 3 секунды прелоадер
debugger
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-black">
            {isVisible &&

                (
                    <div
                        className="loading-screen bg-black/50 backdrop-blur-sm"
                        // initial={{ opacity: 1 }}
                        // animate={{ opacity: 1 }}
                        // exit={{ opacity: 0 }}
                        // transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                        <div className="center-spinner color-primary flex flex-col justify-center items-center">
                            {/* <div className="spinner color-primary"></div>
                         */}
                            {/* <Rabbit size={50} />
                             */}
                            <div className='p-5 rounded-xl bg-white'>
                                <RingLoader />



                            </div>

                        </div>


                        {/* Верхняя половина */}
                         {/* <motion.div
                            className="reveal-top bg-secondary/20"
                            initial={{ y: 0 }}
                            animate={{ y: '-100%' }}
                            exit={{ y: '-100%' }}
                            transition={{ duration: 0.4, delay: 0.3, ease: 'easeInOut' }}
                        ></motion.div> 


                        <motion.div
                            className="reveal-bottom bg-secondary/20"
                            initial={{ y: 0 }}
                            animate={{ y: '100%' }}
                            exit={{ y: '100%' }}
                            transition={{ duration: 0.4, delay: 0.3, ease: 'easeInOut' }}
                        ></motion.div>  */}
                    </div>
                )}
        </div>
    );
};

export default LoadingScreen;






{/* <Script
                id="pace"
                strategy="beforeInteractive"
                src="/assets/js/pace.min.js"
            /> */}