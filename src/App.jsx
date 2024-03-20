// import components
import Home from "./pages/Home/Home"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar/Navbar"
import Search from "./pages/Search/Search"

// import router dom
import { Routes, Route } from 'react-router-dom'
import PageNotFound from "./components/PageNotFound"
import { GlobalStyle } from "./GlobalStyle"

function App() {

    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:title" element={<Search />} />
                {/* Rota para página de erro */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
