import { useNavigate } from "react-router-dom";

import { PrismicRichText } from "@prismicio/react"

import Button from "./Button";

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
            <Button handleClick={handleSeeClick} text='voir plus'/>
        </article>
    )
}

export default Card