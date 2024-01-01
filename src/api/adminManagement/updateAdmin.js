import myFetch from "../myFetch";

export default async function updateAdmin(id, status) {
    const res = await myFetch({
        path: `admin/${id}/status/${status}`,
        method: "PUT",
    })
    console.log(res)
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