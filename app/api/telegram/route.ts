
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, locale, message } = body;
        const text = `📨 *PORTFOLIO SITE MESSAGE*
🌍 Locale: ${locale}
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
💬 Message: ${message}`;
        const token = process.env.TG_BOT_API_KEY;
        const chatId = process.env.TG_BOT_CHAT_ID;

        if (!token || !chatId) {
            return Response.json({ error: "Missing Telegram credentials" }, { status: 500 });
        }

        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: "Markdown",
            }),
        });

        const data = await res.json();

        return Response.json(data);
    } catch (e: any) {

        return Response.json({ error: e.message }, { status: 500 });
    }
}
