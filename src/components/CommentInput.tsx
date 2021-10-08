import React, { useState } from "react";
import Avatar from "components/Avatar";
import Icon from "components/Icon";
export default function CommentInput() {
	const [iconColor, setIconColor] = useState("grey");
	const [comment, setComment] = useState("");

	return (
		<div className="input-container">
			<Avatar />
			<div className="comment-input-container">
				<textarea
					placeholder="Write your new comment here!"
					className="comment-input"
					onChange={e => setComment(e.target.value)}
				/>
				<div
					onClick={() => alert(comment)}
					id="send-icon"
					onMouseEnter={() => setIconColor("black")}
					onMouseLeave={() => setIconColor("grey")}
				>
					<Icon iconName="send" iconSize="2rem" iconColor={iconColor} />
				</div>
			</div>
		</div>
	);
}
