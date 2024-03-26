// import components
import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"
import PageNotFound from "./components/PageNotFound"
import Authentication from "./pages/Authentication/Authentication"
import Profile from "./pages/Profile/Profile"

// import router dom
import { Routes, Route } from 'react-router-dom'
import { GlobalStyle } from "./GlobalStyle"

function App() {

    return (
        <>
            <GlobalStyle />
            <Routes>
                {/* Home */}
                <Route path="/" element={<Home />} />
                {/* Rota Seach pesquisa */}
                <Route path="/search/:title" element={<Search />} />
                {/* Rota para página de erro */}
                <Route path="*" element={<PageNotFound />} />
                {/* Signin/ Signup */}
                <Route path="/auth" element={<Authentication />} />
                {/* Profile */}
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    )
}

export default App
