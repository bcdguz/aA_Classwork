export const fetchAllBenches = () => {
    return $.ajax({
        method: "GET",
        url: "/api/benches",
        error: (error => console.log(error))
    })
}

export const createBench = (bench) => {
    return $.ajax({
        method: "POST",
        data: {bench},
        url: "/api/benches",
        error: (error => console.log(error))
    })
}