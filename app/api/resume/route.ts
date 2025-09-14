// app/api/generate-pdf/route.ts (для App Router Next.js 13+)
import { NextRequest } from 'next/server';
// import puppeteer from 'puppeteer';

import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(req: NextRequest) {
    // путь к PDF-файлу (например, лежит в /public)
    const currentLocale = req.nextUrl.searchParams.get('locale');
    console.log('currentLocale', currentLocale);
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

// export async function GET(req: NextRequest) {
//   console.log('GET request received');
//   console.log(req);
//   const browser = await puppeteer.launch({
//     headless: true, // Using boolean instead of 'new'
//     args: ['--no-sandbox', '--disable-setuid-sandbox'], // если используешь Vercel или Linux
//   });

//   const page = await browser.newPage();

//   // Локальный или внешний URL (например, на route PDF view)
//   await page.goto('http://localhost:3000/resume', {
//     waitUntil: 'networkidle0',
//   });

//   const pdfBuffer = await page.pdf({
//     format: 'A4',
//     printBackground: true,
//   });

//   await browser.close();

//   return new Response(pdfBuffer, {
//     headers: {
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'inline; filename="generated.pdf"',
//     },
//   });
// }
