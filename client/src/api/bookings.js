export const saveBookings = async (bookingData) =>{
    const uri = `http://localhost:8000/bookings`
    const res = await fetch(uri, {
        method: "POST",
        headers : {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(bookingData)
    })

    const data = await res.json()

    return data

}