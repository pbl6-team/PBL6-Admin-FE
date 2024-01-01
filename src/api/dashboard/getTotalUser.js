import myFetch from "../myFetch";

export default async function getTotalUser(status = 0) {
    const res = await myFetch({
        path: `dashboard/total-users/${status}`,
        method: "GET"
    })
    console.log(res)
    if (!res.ok) return {
        status: res.status,
        data: res.data,
        ok: res.ok
    }
    const data = await res.json()
    return {
        status: res.status,
        data: data,
        ok: res.ok
    }
}