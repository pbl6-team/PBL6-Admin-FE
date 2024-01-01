import myFetch from "../myFetch";

export default async function SignIn(username, password) {
    console.log("Username: " + username + " Password: " + password)
    const res = await myFetch({
        path: "auth/signIn",
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ username, password }),
        auth: false
    })
    console.log(JSON.stringify({ username, password }))
    // if (!res.ok) return {
    //     status: res.status,
    //     data: res.data,
    //     ok: res.ok
    // }
    const data = await res.json()
    return {
        status: res.status,
        data: data,
        ok: res.ok
    }
}

