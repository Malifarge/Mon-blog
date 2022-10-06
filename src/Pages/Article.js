import { usePrismicDocumentByID,PrismicRichText } from "@prismicio/react"
import { useParams } from "react-router-dom"

import H1 from "../Components/H1"

const Article = () =>{

    const {id} = useParams()
    const [Post] = usePrismicDocumentByID(id)

    return(
        <>
            <H1>Article</H1>
            {Post ? <><PrismicRichText field={Post.data.title} /> <PrismicRichText field={Post.data.content}/></> : <p>L'article charge</p>}
        </>
    )
}

export default Article