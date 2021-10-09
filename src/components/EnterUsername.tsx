import { CommentsContext } from "App";
import React, { useContext, useState } from "react";

export default function EnterUsername() {
	const [username, setUsername] = useState("");
	const updateUsername = useContext(CommentsContext).setUsername;
	return (
		<div>
			<h3>Enter your username: </h3>
			<input
				placeholder="Username"
				value={username}
				className="input-style"
				onChange={e => setUsername(e.target.value)}
			/>
			<button
				style={{
					width: "50%",
					height: "2rem",
					backgroundColor: "lightblue",
					marginTop: "1rem",
					border: "none",
					borderRadius: 5,
					cursor: "pointer",
				}}
				onClick={() => updateUsername("@" + username)}
			>
				Enter chat
			</button>
		</div>
	);
}
