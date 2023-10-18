export const setAuthToken = user =>{
    const currentUser = {
        email : user.email
    }

    // Save user in Database 
    fetch(`http://localhost:5000/user/${user?.email}`,{
        method: "PUT",
        headers: {
            'content-type' : 'application.json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('aircnc-token', data.token)
        console.log(data)
    })


}