import myFetch from "../myFetch";

export default async function getWorkspaceById(id) {
    const res = await myFetch({
        path: `workspace/${id}`,
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