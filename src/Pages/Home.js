import { useAllPrismicDocumentsByTag } from "@prismicio/react"

import H1 from "../Components/H1"
import H2 from "../Components/H2"

const Home = () =>{

    const [documents] = useAllPrismicDocumentsByTag('Séries')

    console.log(documents);

    return(
        <> 
            <H1>Home</H1>
            <H2>Séries</H2>
            <section>

            </section>
        </>
    )
}

export default Home