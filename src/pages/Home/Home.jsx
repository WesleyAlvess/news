// import axios 
import axios from 'axios'

// import hooks
import { useEffect, useState } from 'react'

// import components
import Navbar from "../../components/Navbar/Navbar"
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import CardTop from '../../components/CardTop/CardTop'

// import styles
import { ContainerALl, ContainerCards, ContainerSpinnerLoading, HomeCards, HomeTopCard, NoNewsFound } from './HomeStyle'

import { ImSpinner9 } from "react-icons/im"


const Home = () => {
    const [posts, setAllPosts] = useState([])
    const [topPost, setTopPost] = useState({})
    const [loading, setLoading] = useState(true)


    // Get all posts
    const fetchApi = async () => {
        const response = await axios.get('http://localhost:3000/posts')
        setAllPosts(response.data.results)
        console.log(response.data.results)
        setLoading(false)
    }
    useEffect(() => {
        fetchApi()
    }, [])

    // Get top post
    const getTopPost = async () => {
        const response = await axios.get('http://localhost:3000/posts/top')
        setTopPost(response.data.post)
        console.log(response.data.post)
        setLoading(false)
    }

    useEffect(() => {
        getTopPost()
    }, [])


    return (
        <ContainerALl>
            <Navbar />
            {loading ? (
                <ContainerSpinnerLoading>
                    <ImSpinner9 />
                    <p>Carregando...</p>
                </ContainerSpinnerLoading>
            ) : (
                <ContainerCards>
                    {/* Top post */}
                    {Object.keys(topPost).length !== 0 && (
                        <HomeTopCard>
                            <CardTop
                                banner={topPost.banner}
                                comments={topPost.comments}
                                likes={topPost.likes}
                                title={topPost.title}
                                text={topPost.text}
                            />
                        </HomeTopCard>
                    )}
    
                    {/* Posts */}
                    {posts.length !== 0 && (
                        <HomeCards>
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
                        </HomeCards>
                    )}
    
                    {/* No news found */}
                    {posts.length === 0 && Object.keys(topPost).length === 0 && (
                        <NoNewsFound>Nenhuma notícia encontrada</NoNewsFound>
                    )}
                </ContainerCards>
            )}
            <Footer />
        </ContainerALl>
    )
    
}

export default Home
