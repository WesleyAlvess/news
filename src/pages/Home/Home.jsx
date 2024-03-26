// import axios 
import axios from 'axios'

// import hooks
import { useEffect, useState } from 'react'

// import components
import Navbar from "../../components/Navbar/Navbar"
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'

// import styles
import { ContainerCards, HomeCards, HomeTopCard } from './HomeStyle'


const Home = () => {
    const [posts, setAllPosts] = useState([])
    const [topPost, setTopPost] = useState({})

    // Get all posts
    const fetchApi = async () => {
        const response = await axios.get('http://localhost:3000/posts')
        setAllPosts(response.data.results)
    }
    useEffect(() => {
        fetchApi()
    }, [])

    // Get top post
    const getTopPost = async () => {
        const response = await axios.get('http://localhost:3000/posts/top')
        setTopPost(response.data.post)
    }
    useEffect(() => {
        getTopPost()
    }, [])


    return (
        <>
            <Navbar />
            <ContainerCards>
                {/* Top post */}
                <HomeTopCard>
                    <Card
                        top="top"
                        banner={topPost.banner}
                        comments={topPost.comments}
                        likes={topPost.likes}
                        title={topPost.title}
                        text={topPost.text}
                    />
                </HomeTopCard>

                {/* Posts */}
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
            </ContainerCards>
            <Footer />
        </>
    )
}

export default Home
