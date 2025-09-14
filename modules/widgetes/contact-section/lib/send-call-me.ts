export const sendCallMe = async (
    message: string,
    locale: string,
    name: string,
    phone: string,
    email: string,

) => {
    const formData = {
        message,
        locale,
        name,
        phone,
        email,
    }
    const response = await fetch('/api/telegram', {
        method: 'POST',
        body: JSON.stringify(formData),
    });
    return response.json();
}
