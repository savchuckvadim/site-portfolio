'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './loading.css';
import { Cat } from 'lucide-react';

const LoadingScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1800); // 3 секунды прелоадер
debugger
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-black ">
            {isVisible &&

                (
                    <motion.div
                        className="loading-screen bg-background"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        // exit={{ opacity: 0 }}
                        transition={{ duration: 1.6, ease: 'easeInOut' }}
                    >
                        <div className="center-spinner color-primary flex flex-col justify-center items-center ">
                            {/* <div className="spinner color-primary"></div>
                         */}
                            {/* <Rabbit size={50} />
                             */}
                            <div className='p-5 rounded-xl bg-secondary'>
                                {/* <RingLoader /> */}
                                <Cat size={80} className='text-primary' />


                            </div>

                        </div>


                        {/* Верхняя половина */}
                        {/* <motion.div
                            className="reveal-top bg-primary"
                            initial={{ y: 0 }}
                            animate={{ y: '-100%' }}
                            exit={{ y: '-100%' }}
                            transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
                        ></motion.div>  


                        <motion.div
                            className="reveal-bottom bg-primary"
                            initial={{ y: 0 }}
                            animate={{ y: '100%' }}
                            exit={{ y: '100%' }}
                            transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
                        ></motion.div>   */}
                    </motion.div>
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