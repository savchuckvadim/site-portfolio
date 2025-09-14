'use client';
import { Button } from '@/components/ui/button';
import LoadingScreen from '@/modules/shared/LoadingScreen/ui/LoadingScreen';
import { Download } from 'lucide-react';
import React, { useState } from 'react';
import { useCurrentLocale } from '@/app/lib/useCurrentLocale';
import { downloadResume } from '../lib/util';
import { useDownloadResume } from '../hooks/useDownloadResume';


const ResumeDownLoad = () => {
    const { isDownloading, handleDownload } = useDownloadResume();
    const locale = useCurrentLocale();

    return (
        <>
            {isDownloading ? (
                <LoadingScreen />
            ) : (
                <Button
                    className="cursor-pointer"
                    variant={'default'}
                    disabled={isDownloading}
                // onClick={() => !isDownloading && handleDownload()}
                >
                    <a
                        href={`/resume/${locale}/FrontendMiddleSavchuckVadim.pdf`}
                        download="FrontendMiddleSavchuckVadim.pdf"
                    >
                        <p className="hidden md:block text-sm ">resume</p>
                        <Download />
                    </a>
                </Button>
            )}
        </>
    );
};

export default ResumeDownLoad;
