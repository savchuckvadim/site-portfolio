export const downloadResume = async (
    locale: string,
    setIsDownloading: (isDownloading: boolean) => void
) => {
    try {
        setIsDownloading(true);
        const res = await fetch(`/api/resume?locale=${locale}`);

        if (!res.ok) {
            throw new Error("Ошибка при скачивании");
        }

        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);

        // const link = document.createElement("a");
        // link.href = url;

        // вытаскиваем имя из заголовка
        const disposition = res.headers.get("Content-Disposition");
        let fileName = "resume.pdf";
        if (disposition && disposition.includes("filename=")) {
            fileName = disposition.split("filename=")[1].replace(/"/g, "");
        }


        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
          // На мобильных — просто открываем в новой вкладке
          window.open(url, "_blank");
        } else {
          // На десктопе — качаем с именем файла
          const link = document.createElement("a");
          link.href = url;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        window.URL.revokeObjectURL(url);
    } catch (err) {
        alert(err instanceof Error ? err.message : "Неизвестная ошибка");
        setIsDownloading(false);
    } finally {
        setIsDownloading(false);
    }
};
