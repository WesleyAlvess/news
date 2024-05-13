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
import { ConstainerNextPosts, ContainerALl, ContainerCards, ContainerSpinnerLoading, HomeCards, HomeTopCard, NoNewsFound } from './HomeStyle'

import { ImSpinner9 } from "react-icons/im"


const Home = () => {
    const [posts, setAllPosts] = useState([])
    const [topPost, setTopPost] = useState({})
    const [loading, setLoading] = useState(true)
    // paginação
    const [pagination, setPagination] = useState({
        nextUrl: '/posts?limit=5&offset=5',
        previousUrl: null,
        limit: 5,
        offset: 0,
        total: 0
    })

    // Get all posts
    const fetchApi = async () => {
        setLoading(true)
        try {
            const response = await axios.get('http://localhost:3000/posts')
            setAllPosts(response.data.results)
        } catch (err) {
            console.error('Erro ao carregar próximas postagens:', err);
        } finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchApi()
    }, [])

    // Get top post
    const getTopPost = async () => {
        const response = await axios.get('http://localhost:3000/posts/top')
        setTopPost(response.data.post)
        setLoading(false)
    }

    useEffect(() => {
        getTopPost()
    }, [])

    
    const nextPosts = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`http://localhost:3000${pagination.nextUrl}`)
            setAllPosts(response.data.results)

            console.log(response.data)

            setPagination({
                nextUrl: response.data.nextUrl,
                previousUrl: response.data.previousUrl,
                limit: response.data.limit,
                offset: response.data.offset,
                total: response.data.total
            })


        } catch (err) {
            console.error('Erro ao carregar próximas postagens:', err);
        } finally{
            setLoading(false)
        }
    }
    
    const previousPosts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:3000${pagination.previousUrl}`);
            setAllPosts(response.data.results);
            setPagination({
                nextUrl: response.data.nextUrl,
                previousUrl: response.data.previousUrl,
                limit: response.data.limit,
                offset: response.data.offset,
                total: response.data.total
            });
        } catch (err) {
            console.error('Erro ao carregar postagens anteriores:', err);
        } finally {
            setLoading(false);
        }
    }


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
            <ConstainerNextPosts>
                <button onClick={previousPosts}>Anterior</button>
                <button onClick={nextPosts}>Próximo</button>
            </ConstainerNextPosts>
            <Footer />
        </ContainerALl>
    )
    
}

export default Home
