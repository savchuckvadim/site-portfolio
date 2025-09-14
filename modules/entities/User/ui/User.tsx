'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/modules/features/theme';

export default function User() {
    const { theme } = useTheme();
    const [imgPath, setImgPath] = useState<string>(
        '/main/use1_background_pink.JPG',
    );
    useEffect(() => {
        debugger;
        theme === 'default'
            ? setImgPath('/main/use1_background_pink.JPG')
            : theme === 'violete'
              ? setImgPath('/main/use1_background_fiolet.JPG')
              : setImgPath('/main/use1_background_blue.JPG');
    }, [theme]);
    return (
        <Image
            src={imgPath}
            alt={'user'}
            width={550}
            height={550}
            className="rounded-full"
        />
    );
}
