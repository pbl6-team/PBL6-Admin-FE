import myFetch from "../myFetch";

export default async function userCreatedDates() {
    const res = await myFetch({
        path: `dashboard/user-created-dates`,
        method: "GET"
    })
    if (!res.ok) return {
        status: res.status,
        data: null,
        ok: res.ok
    }
    const data = await res.json()
    return {
        status: res.status,
        data: data,
        ok: res.ok
    }
}