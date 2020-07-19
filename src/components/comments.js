import React, { useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import SendIcon from "@material-ui/icons/Send"
import Axios from "axios"
import styles from "./comments.module.css"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}))

export default function Comments() {
  const classes = useStyles()
  const [comments, setComments] = useState([])
  const [input, setInput] = useState()
  const [users, setUser] = useState([]) 

  useEffect(() => {
    if (comments.length > 0) {
      Axios.get("https://randomuser.me/api/?results=1")
        .then(res => {
          setUser(users => users.concat(res.data.results)) //concat, wrapped
          //console.log(res.data.results)
        })
        .catch(err => {})

    }
  }, [comments]) //Gets called whenever comments changes

  function handleClick() {
    setComments(comments => [...comments, input]) //spread operator, wrapped
    //console.log(comments + " CLICKED")
    if(input==="red"){
        const newContext = React.createContext({color: 'red'});
    }
  }

  return (
    <div>
        <p>Comments tracked with useState and avatar fetched in useEffect</p>
      <div>
        <input onChange={event => setInput(event.target.value)} />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          onClick={handleClick}
        >
          Post
        </Button>
      </div>

      <div >
        {users.map((user, i) => {
          return (
            <div key={i} className={styles.line}>
              <img
                src={user.picture.thumbnail}
                alt="portrait"
                className={styles.avatar}
              />
              {comments.map((comment, j) => {
                  if(i===j){
                      return (
                  <div key={j} className={styles.comment} >
                    <p className={styles.excerpt}>{comment}</p>
                  </div>
                )
                  }            
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
