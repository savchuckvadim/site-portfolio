export default function PDFTemplate() {
    return (
      <html>
        <head>
          <style>{`body { font-family: sans-serif; padding: 2rem; }`}</style>
        </head>
        <body>
          <h1>Пример PDF-документа</h1>
          <p>Это контент, который попадёт в PDF.</p>
        </body>
      </html>
    );
  }