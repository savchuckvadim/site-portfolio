// app/api/generate-pdf/route.ts (для App Router Next.js 13+)
import { NextRequest } from 'next/server';
// import puppeteer from 'puppeteer';

import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(req: NextRequest) {

    const currentLocale = req.nextUrl.searchParams.get('locale');

    const locale = currentLocale || "ru";
    const fileName = 'FrontendMiddleSavchuckVadim.pdf';

    const filePath = path.join(
        process.cwd(),
        "public",
        "resume",
        locale,
        fileName
    );

    const fileBuffer = await readFile(filePath);

    return new Response(fileBuffer, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename=${fileName}`, // attachment => скачивание
        },
    });
}
