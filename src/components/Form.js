import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { formatDate } from "../format"

function Form() {
    const[user, setUser] = useState('')
    const[content, setContent] = useState('')
    const[isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        const tweet = { user, content, 
            "date": formatDate(Date.now(), 'dd-MM-yyyy', 'en-US'), 
            "coments": 0,
            "retweets": 0,
            "likes": 0
        }
        setIsLoading(true)
        
        await fetch('http://localhost:3000/tweets', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tweet)
        })
        setIsLoading(false)
        history.go(-1)
    }

    return(
        <div className="form-container">
            <h2>Write a coment</h2>
            <form onSubmit={ handleSubmit } action="">
                <label>User</label>
                <input required 
                    type="text" 
                    value= { user }
                    onChange={ (e) => setUser(e.target.value) }
                />
                <label>Your Tweet</label>
                <textarea required 
                    name="" id="" 
                    cols="30" 
                    rows="10" 
                    value={ content }
                    onChange={ (e) => setContent(e.target.value) }
                >   
                </textarea>
                { !isLoading && <button type="submit">Tweet it</button> }
                { isLoading && <h4 className="message">Is Loading...</h4> }
            </form>
        </div>
    )
}

export default Form