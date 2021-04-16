export const fetchAllBenches = () => {
    return $.ajax({
        method: "GET",
        url: "/api/benches"
    })
}

export const createBench = (bench) => {
    return $.ajax({
        method: "POST",
        data: {bench},
        url: "/api/benches"
    })
}