import myFetch from "../myFetch";

export default async function getOtp(email, otpType) {
    const res = await myFetch({
        path: "auth/signIn",
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ email, otpType }),
        auth: false
    })
    const data = await res.json()
    return {
        status: res.status,
        data: data,
        ok: res.ok
    }
}

