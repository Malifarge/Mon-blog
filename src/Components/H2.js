const H2 = ({children, home}) =>{
    return <h2 className={home && 'home'}>{children}</h2>
}

export default H2