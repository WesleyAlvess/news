import axios from "axios";
import Cookies from "js-cookie";

export const getAllPostsByUser = () => {
    const response = axios.get("https://api-news-hi57.onrender.com/posts/byUserId", {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
    return response
}

export const createNew = async (data) => {
    // obtendo token
    const token = Cookies.get("token")

    // enviando requisição'
    const response = await axios.post("https://api-news-hi57.onrender.com/posts/create", data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response
}

export const deleteNewService = (user) => {
    const response = axios.delete(`http://localhost:3000/posts/delete/${user._id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
    
    return response
} 