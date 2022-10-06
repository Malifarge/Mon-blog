import { useAllPrismicDocumentsByTag} from "@prismicio/react"

import Card from "../Components/Card"
import H1 from "../Components/H1"
import H2 from "../Components/H2"

const Home = () =>{

    const [Séries] = useAllPrismicDocumentsByTag('Séries')
    const [JVS] = useAllPrismicDocumentsByTag('Jeux-Vidéo')

    return(
        <> 
            <H1>H<span>o</span>me</H1>
            <H2>Séries</H2>
            {Séries && <section className="scroll">

                {Séries.map(série=>{
                   return(
                    <Card document={série} key={série.id}/>
                   ) 
                })}

            </section>}

            <H2>Jeux-Vidéos</H2>
            {JVS && <section className="scroll">
                
                {JVS.map(JV=>{
                   return(
                    <Card document={JV} key={JV.data.title}/>
                   ) 
                })}

            </section>}
        </>
    )
}

export default Home