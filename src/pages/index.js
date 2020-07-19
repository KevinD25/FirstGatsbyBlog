import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.css"
import external from "../assets/out.png"
import {graphql} from "gatsby"


const Home = (props) => {
  const headlines = props.data.allHeadline.edges;


  return (
    <Layout>
      <p>Data fetched using gatsby-node.js and queried in graphql</p>
      <div >
        {headlines.map((headline, i) => {
          const headlineData = headline.node;
          return (
            <div key={i} className={styles.article}>
              <div className={styles.header}>
                <h3>{headlineData.title}</h3>
                <p>{headlineData.author}</p>
                <p>{headlineData.source.name} {headlineData.publishedAt} </p>
              </div>

              <div className={styles.content}>
                <p> {headlineData.content}</p>
              </div>

              <a href={headlineData.url} className={styles.link}>
                <img src={external} alt="Link" style={{width:`20px`, height:`20px`}}/>
              </a>
            </div>
          )
        })}
      </div>
    </Layout>
  );
}

export default Home


export const query = graphql`
query HeadlineQuery {
  allHeadline {
    edges {
      node {
        author
        content
        description
        id
        source {
          id
          name
        }
        publishedAt(fromNow: true)
        title
        url
      }
    }
  }
}


`