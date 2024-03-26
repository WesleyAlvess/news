import axios from "axios";
import Cookies from "js-cookie";

export const getAllPostsByUser = () => {
    const response = axios.get("http://localhost:3000/posts/byUserId", {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
    return response
}