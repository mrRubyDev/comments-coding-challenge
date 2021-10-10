import React, { useContext, useState } from "react";
import Avatar from "components/Avatar";
import Icon from "components/Icon";
import { CommentsContext } from "App";
import { CommentInputProps } from "Types";

import { handleEnterPress } from "utils";

export default function CommentInput({ replyTo, replied }: CommentInputProps) {
	const [iconColor, setIconColor] = useState("grey");
	const [comment, setComment] = useState("");
	const { handleNewComment, username } = useContext(CommentsContext);

	const handleNewCmmt = () => {
		const id = `${new Date().getTime()}`;
		handleNewComment(id, {
			text: comment,
			date: new Date().toISOString,
			username,
			replies: [],
			id,
			parents: replyTo ? [...replyTo] : [],
		});
		replyTo && replied(false);
		setComment("");
	};

	const handleKeyPress = (e: any) => handleEnterPress(e, handleNewCmmt);

	return (
		<div className={!replyTo ? "input-container" : "input-container reply"}>
			<Avatar />
			<div className="comment-input-container">
				<textarea
					placeholder={
						!replyTo ? "Write your new comment here!" : "Write your reply here!"
					}
					value={comment}
					className="comment-input"
					onChange={e => setComment(e.target.value)}
					onKeyPress={handleKeyPress}
				/>
				<div
					onClick={handleNewCmmt}
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
