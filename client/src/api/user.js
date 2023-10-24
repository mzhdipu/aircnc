export const hostRequest = async (hostData) =>{

    const res = await fetch(`http://localhost:8000/user/${hostData?.email}`, {
        method: "PUT",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(hostData)
    })
    const data = await res.json()

    return data
}

// GET USER ROLE
export const getRole = async (email) =>{
    const res = await fetch(`http://localhost:8000/user/${email}`)
    const user = await res.json()
    return user?.role
}