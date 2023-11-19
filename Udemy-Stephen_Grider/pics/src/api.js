import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID uyFty_927wI9yTbxykCKbktXDldeHKm_g303vOD4rkY'
        },
        params: {
            query: term,
        }
    })

    return response.data.results;
}

export default searchImages;