/** @format */

import React from "react"
import Tweet from "./Tweet"
import useList from "../customHooks/useList"
import { Link } from "react-router-dom"

function List({ tweets }) {
	const { data: feed, isLoading, error } = useList(tweets)
	function renderFeed() {
		return (
			<>
				{feed && (
					<>
						<Link className='btn post-tw-btn' to='/coment'>
							Make a Tweet
						</Link>
						{feed.map((tweet) => {
							return <Tweet {...tweet} key={tweet.id}></Tweet>
						})}
					</>
				)}
			</>
		)
	}

	function renderProfile() {
		return (
			<>
				{feed &&
					feed.map((tweet) => {
						return <Tweet {...tweet} key={tweet.id}></Tweet>
					})}
			</>
		)
	}

	return (
		<>
			<div className='feed-container'>
				{error && <div className='message'>{error}</div>}
				{isLoading && <div className='message'>Loading... </div>}
				{type == "feed" ? renderFeed() : renderProfile()}
			</div>
		</>
	)
}

export default List
