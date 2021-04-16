export const fetchAllBenches = () => {
    $.ajax({
        method: "GET",
        url: "/api/benches"
    })
}

export const createBench = (bench) => {
    $.ajax({
        method: "POST",
        data: {bench},
        url: "/api/benches"
    })
}