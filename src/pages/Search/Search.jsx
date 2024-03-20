// Import useParams
import { useParams } from "react-router-dom"

const Search = () => {
    const { title } = useParams()

    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Search
