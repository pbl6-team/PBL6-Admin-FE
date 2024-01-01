import myFetch from "../myFetch";

export default async function getUsers(pageNumber, pageSize, status = 0) {
    const res = await myFetch({
        path: `user/page/${pageNumber}/size/${pageSize}/status/${status}`,
        method: "GET"
    })
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