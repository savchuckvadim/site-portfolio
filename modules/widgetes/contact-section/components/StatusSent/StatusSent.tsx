'use client';

import { createPortal } from 'react-dom';
import { useCallMe } from '../../hooks/useCalMe';

export default function StatusSent() {

    createPortal('root', document.body)
    return (
        <div>
            <h1>StatusSent</h1>
        </div>
    )
}
