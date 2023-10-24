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

// GET ALL BOOKINGS FOR USER
export const getAllBookingsByEmail = async (email) =>{
    const uri = `http://localhost:8000/bookings?email=${email}`
    const res = await fetch(uri)
    const data = await res.json()
    return data 
}

// GET ALL BOOKINGS FOR ADMIN
export const getAllBookings = async () =>{
    const uri = `http://localhost:8000/bookings`
    const res = await fetch(uri)
    const data = await res.json()
    return data
}