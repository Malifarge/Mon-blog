import { usePrismicDocumentByID,PrismicRichText } from "@prismicio/react"
import { useParams, useNavigate } from "react-router-dom"

import H2 from "../Components/H2"
import Button from "../Components/Button"

const Article = () =>{

    const {id} = useParams()
    const [Post] = usePrismicDocumentByID(id)
    const navigate = useNavigate()

    const handleHomeClick = () =>{
        navigate('/')
    }

    return(
        <>
            <section className="returnHome start">
                <H2>Article</H2>
                <Button handleClick={handleHomeClick} text='home' />
            </section>
            <section className="monArticle">
            {Post ? <><PrismicRichText field={Post.data.title} /> <PrismicRichText field={Post.data.content}/></> : <p>L'article charge</p>}
            </section>
            <section className="returnHome end">
                <Button handleClick={handleHomeClick} text='home' />
            </section>
        </>
    )
}

export default Article