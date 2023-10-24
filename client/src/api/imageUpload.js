export const getImageUrl = async image => {
    const formData = new FormData()
    formData.append('image', image)
  
    const url = `https://api.imgbb.com/1/upload?key=161dc8adc000d9fd75715daa5a369341`
  
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    })
    const data = await response.json()
    return data.data.display_url
  }
