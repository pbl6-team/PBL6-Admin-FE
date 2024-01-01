import myFetch from "../myFetch";

export default async function getAdmins(pageNumber, pageSize, status = 0) {
    const res = await myFetch({
        path: `admin/page/${pageNumber}/size/${pageSize}/status/${status}`,
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