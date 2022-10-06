import { useNavigate } from "react-router-dom";

import { PrismicRichText } from "@prismicio/react"

const Card = ({document})=>{

    const navigate=useNavigate()

    const handleSeeClick = () =>{
        navigate(`/${document.id}`);
    }

    return(
        <article className="info-container">
            <PrismicRichText field={document.data.title} />
            <div className="see">
                <PrismicRichText field={document.data.content}/>
            </div>
            <button onClick={handleSeeClick}>voir plus</button>
        </article>
    )
}

export default Card