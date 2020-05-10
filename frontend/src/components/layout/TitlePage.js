import React, {useEffect} from 'react'
import Container from './Container'

const TitlePage = (props) => {
    useEffect(()=>{
        document.title = `${props.title} | SocailNetwork`
        window.scrollTo(0,0)
    },[])
    return <Container wide={props.wide}>{props.children}</Container>
}

export default TitlePage
