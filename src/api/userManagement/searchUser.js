import myFetch from "../myFetch"

export default async function searchUser(searchValue, page, pageSize, status = 0) {
    console.log("searchUser", searchValue, page, pageSize, status)
    const res = await myFetch({
        path: `user/search/${searchValue}/page/${page}/size/${pageSize}/status/${status}`,
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