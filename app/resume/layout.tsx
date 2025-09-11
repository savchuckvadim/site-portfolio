export default function ResumeLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <style>{`body { font-family: sans-serif; padding: 2rem; }`}</style>
            </head>
            <body>{children}</body>
        </html>
    );
}
