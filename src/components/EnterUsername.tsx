import { CommentsContext } from "App";
import React, { useContext, useEffect, useState } from "react";

export default function EnterUsername() {
	const [username, setUsername] = useState("");
	const updateUsername = useContext(CommentsContext).setUsername;
	const [error, setError] = useState(false);

	useEffect(() => {
		if (error) setTimeout(() => setError(false), 4000);
	}, [error]);

	return (
		<div style={{ maxWidth: "100%", width: "25rem" }}>
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
				onClick={() => {
					username?.length >= 3
						? updateUsername("@" + username)
						: setError(true);
				}}
			>
				Enter chat
			</button>
			{error && (
				<div
					style={{
						maxWidth: "90%",
						margin: "auto",
						marginTop: "1rem",
					}}
				>
					<h4 style={{ color: "red" }}>
						Your username has to be at least 3 characters long
					</h4>
				</div>
			)}
		</div>
	);
}
