/** @format */

import React from "react"
import { useState, useRef } from "react"
import { Link, useHistory } from "react-router-dom"

function Tweet(props) {
	let id = props.id
	const [coments, setComents] = useState(props.coments)
	const [retweets, setRetweets] = useState(props.retweets)
	const [likes, setLikes] = useState(props.likes)
	const commentsCounter = useRef()
	const retweetsCounter = useRef()
	const likesCounter = useRef()
	const history = useHistory()

	const userURL = `/profiles/${props.user}`

	function runAnimation(el) {
		el.current.animate(
			[
				{ transform: "translateY(0%)", offset: 0 },
				{ transform: "translateY(-50%)", offset: 0.4 },
				{ transform: "translateY(25%)", offset: 0.8 },
				{ transform: "translateY(0%)", offset: 1 },
			],
			{
				duration: 200,
				easing: "ease-in-out",
			}
		)
	}

	async function deleteHandler(twId) {
		await fetch(`http://localhost:5000/tweets/${twId}`, { method: "DELETE" })
		return history.go(0)
	}

	return (
		<div className='tweet-container'>
			<div className='tweet-header'>
				<Link to={userURL}>
					<h2 className='username'>{props.user}</h2>
				</Link>
				<button
					onClick={(e) => {
						e.preventDefault()
						deleteHandler(id)
					}}>
					Delete Tweet
				</button>
			</div>

			<p className='tweet-content'>{props.content}</p>

			<div className='tweet-interactions'>
				<span
					ref={commentsCounter}
					onClick={() => {
						setComents(coments + 1)
						runAnimation(commentsCounter)
					}}>
					{" "}
					coments {coments}
				</span>
				<span
					ref={retweetsCounter}
					onClick={() => {
						setRetweets(retweets + 1)
						runAnimation(retweetsCounter)
					}}>
					{" "}
					retweets {retweets}
				</span>
				<span
					ref={likesCounter}
					onClick={() => {
						setLikes(likes + 1)
						runAnimation(likesCounter)
					}}>
					{" "}
					likes {likes}
				</span>
			</div>
			<div className='tweet-date'>
				<p>{props.date}</p>
			</div>
		</div>
	)
}

export default Tweet
