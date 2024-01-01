import myFetch from "../myFetch";

export default async function updateUser(id, status) {
    const res = await myFetch({
        path: `user/${id}/status/${status}`,
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