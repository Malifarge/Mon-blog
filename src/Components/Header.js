import { Link } from 'react-router-dom'

import logo from '../images/logo.png'
import H1 from './H1'

const Header = () =>{
    return(
        <header><Link to={'/'}><img src={logo} alt="Home link"/></Link> <H1>Thomas' Subj<span>e</span>ctiv<span>e</span> R<span>e</span>vi<span>e</span>w</H1></header>
    )
}

export default Header