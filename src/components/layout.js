import React from "react"
import { Link} from "gatsby"
import news from "../assets/news.png"

const ListLink = props => (
    <li style = {{display:`inline-block`, marginRight:`1rem`, float:`left`}}>
        <Link to={props.to}>{props.children}</Link> 
    </li>
)

export default function Layout ({children}){
    return(
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header style={{marginBottom: `1.5rem`}}>
            <Link to="/" style={{textShadow:`none`, backgroundImage:`none`}}>
                <img src={news} alt="News" style={{width:`50px`, height:`50px`}}/>
            </Link>
            <ul style={{listStyle:`none`, float:`right`}}>
                <ListLink to="/">News</ListLink>
                <ListLink to="/comments">Comments</ListLink>
                <ListLink to="/about">About</ListLink>
            </ul>
        </header>
      {children}
    </div>
    )
}