
import { useEffect,useState } from "react"


import H2 from "../Components/H2"
import Articles from "../Components/Articles"

const Home = () =>{

    const [tags,setTags] = useState([])
    
    const fetchTags = async () =>{
        const request = await fetch('https://Mon-blog.cdn.prismic.io/api/tags')
        const data = await request.json()
        setTags(data);
    }

    useEffect(()=>{
        fetchTags()
    },[])

    return(
        <> 
            <H2 home>H<span>o</span>me</H2>
            {tags.length>0 && tags.map(tag =>{
                return <Articles tag={tag} key={tag}/>
            })}
        </>
    )
}

export default Home