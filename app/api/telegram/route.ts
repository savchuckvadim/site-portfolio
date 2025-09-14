
export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, phone, locale, message } = body;

    const apiUrl = process.env.TG_URL; // ✅
    const tgData = {
        "app": "konstruktor",
        "text": `PORTFOLIO SITE MESSAGE LOCALE:${locale} NAME:${name} EMAIL:${email} PHONE:${phone} MESSAGE:${message}`,
        "domain": "portfolio",
        "userId": "0"
    }
    console.log(JSON.stringify(tgData));
    const res = await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(tgData),
    });
    const data = await res.json();
    console.log(data);

    return Response.json(data);
}
