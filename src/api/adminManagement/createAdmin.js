import myFetch from "../myFetch";

export default async function createAdmin({ email, username, phone, firstName, lastName }) {
    const res = await myFetch({
        path: `admin`,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "text/plain",
        },
        body: JSON.stringify({
            FirstName: firstName,
            LastName: lastName,
            Phone: phone,
            Email: email,
            Gender: true,
            BirthDay: "2023-12-27T06:14:05.242Z",
            Username: username,
        })
    })
    if (!res.ok) return {
        status: res.status,
        data: null,
        ok: res.ok
    }
    return {
        status: res.status,
        data: null,
        ok: res.ok
    }
}