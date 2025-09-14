'use client';
import { downloadResume } from "../lib/util";
import { useCurrentLocale } from "@/app/lib/useCurrentLocale";
import { useState } from "react";

export const useDownloadResume = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const locale = useCurrentLocale();


    const handleDownload = async () => {

        await downloadResume(locale, setIsDownloading);
    };

    return { isDownloading, handleDownload };
};
