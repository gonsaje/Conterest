export const fetchAllFollows = () => 
    $.ajax ({
        url: "/api/follows",
        method: "GET"
    });


export const createFollow = follow => {
    return $.ajax({
        method: "POST",
        url: "/api/follows",
        data: { follow },
    })
}

export const deleteFollow = followId =>
    $.ajax({
        url: `/api/follows/${followId}`,
        method: "DELETE",
    });