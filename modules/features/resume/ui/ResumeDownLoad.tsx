import { Button } from '@/components/ui/button'
import LoadingScreen from '@/modules/shared/LoadingScreen/ui/LoadingScreen';
import { Download } from 'lucide-react'
import React, { useState } from 'react'

const ResumeDownLoad = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const handleDownload = async () => {
        setIsDownloading(true);
        const res = await fetch('/api/resume');
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'generated.pdf';
        link.click();

        window.URL.revokeObjectURL(url);
        setIsDownloading(false);

    };
    return (<>{
        isDownloading ? <LoadingScreen /> :
            <Button className='cursor-pointer'  variant={'default'} disabled={isDownloading}
                onClick={() => !isDownloading && handleDownload()}
            >
            <p className='hidden md:block text-sm '>resume</p>
            <Download  />
        </Button>
}
    </>
    )
}

export default ResumeDownLoad;