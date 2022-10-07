import { useAllPrismicDocumentsByTag} from "@prismicio/react"

import H2 from "./H2"
import Card from "../Components/Card"

const Articles = ({tag}) =>{

    const [ArticlesTag] = useAllPrismicDocumentsByTag(tag)

    return(
        <>
        <H2>{tag}</H2>

        {ArticlesTag && 
            <section className="scroll">

                {ArticlesTag.map(Article=>{
                    return(
                        <Card document={Article} key={Article.id}/>
                    ) 
                })}

            </section>
        }
        </>
    )
}

export default Articles