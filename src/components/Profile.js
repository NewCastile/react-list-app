/** @format */

import React from "react"
import List from "./List"
import { useParams } from "react-router-dom"

function Profile() {
	const { user } = useParams()
	const userFeed = (
		<List tweets={`http://localhost:5000/tweets/?user=${user}`} />
	)

	return (
		<div className='profile-container'>
			<div className='user-profile'>
				<h1>{user}'s Profile</h1>
				{userFeed}
			</div>
		</div>
	)
}

export default Profile
