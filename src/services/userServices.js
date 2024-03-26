import axios from "axios";
import Cookies from "js-cookie";

export const signup = (data) => {
    delete data.confirmPassword
    const body = {
        ...data,
        username: generateUserName(data.name),
        avatar: "https://cbe.wwu.edu/files/2023-01/blank-profile-picture-973460_1280.jpg",
        background: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612798165_200-p-goluboi-abstraktnii-fon-226.jpg",
    }
    const response = axios.post("http://localhost:3000/user/create", body)
    return response
}

export const signin = (data) => {
    const response = axios.post("http://localhost:3000/auth/login", data)
    return response
}

export const userLogged = () => {
    const response = axios.get("http://localhost:3000/user/findById", {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
    return response
}

function generateUserName(name) {
    const withoutSpaces = name.replace(/\s/g, "").toLowerCase()
    const randomNumber = Math.floor(Math.random() * 1000)
    return `${withoutSpaces}-${randomNumber}`
}