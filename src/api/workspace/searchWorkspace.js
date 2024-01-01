export default async function searchWorkspace(searchValue, numberOfResults, status = 0) {
    const res = await myFetch({
        path: `workspace/search/${searchValue}/${numberOfResults}/status/${status}`,
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