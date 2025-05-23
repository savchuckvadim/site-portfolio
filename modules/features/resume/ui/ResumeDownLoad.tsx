import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import React, { useState } from 'react'

const ResumeDownLoad = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    return (<>
        <Button variant={'default'} disabled={isDownloading}
            onClick={() => !isDownloading && setIsDownloading(true)}
        >
            <p className='text-sm '>resume</p>
            <Download />
        </Button>

    </>
    )
}

export default ResumeDownLoad;