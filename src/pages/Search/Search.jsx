// Import Hooks
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// Import styles
import { ContainerResults, SearchCards, TextResults } from "./SearchStyle"

// Import components
import Navbar from "../../components/Navbar/Navbar"
import Card from "../../components/Card/Card"
import Footer from "../../components/Footer/Footer"

const Search = () => {
    const { title } = useParams()
    const [posts, setPosts] = useState([])

    // Get search
    const getSearch = async (title) => {
        try {
            const response = await axios.get(`http://localhost:3000/posts/search?title=${title}`)
            setPosts(response.data.results)
        } catch (err) {
            console.error("Erro ao fazer a requisição", err)
            setPosts([])
        }
    }
    useEffect(() => {
        if (title) {
            getSearch(title)
        }
    }, [title])

    return (
        <>
            <Navbar />
            <ContainerResults>
                <TextResults>
                    <span>
                        {posts.length
                            ? `Encontramos  ${posts.length} 
                    ${posts.length > 1 ? "Resultados" : "resultado"
                            } para:` : "Não encontramos resultados para:"}
                    </span>
                    <h2>{title}</h2>
                </TextResults>
                <SearchCards>
                    {posts.map((item) => (
                        <Card
                            key={item.id}
                            banner={item.banner}
                            comments={item.comments}
                            likes={item.likes}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </SearchCards>
            </ContainerResults>
            <Footer />
        </>
    )
}

export default Search
