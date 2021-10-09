import React, { useContext, useState } from "react";
import Avatar from "components/Avatar";
import Icon from "components/Icon";
import { CommentsContext } from "App";
import { CommentInputProps } from "Types";
export default function CommentInput({ replyTo, replied }: CommentInputProps) {
	const [iconColor, setIconColor] = useState("grey");
	const [comment, setComment] = useState("");
	const addComment = useContext(CommentsContext).handleNewComment;
	const handleNewCmmt = () => {
		const id = new Date().getTime();

		addComment(
			id,
			{
				text: comment,
				date: new Date().toISOString,
				replies: {},
				id,
			},
			replyTo ? replyTo : null
		);
		replyTo && replied(false);
		setComment("");
	};

	return (
		<div className={!replyTo ? "input-container" : "input-container reply"}>
			<Avatar />
			<div className="comment-input-container">
				<textarea
					placeholder={
						!replyTo ? "Write your new comment here!" : "Write your reply here!"
					}
					className="comment-input"
					onChange={e => setComment(e.target.value)}
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
