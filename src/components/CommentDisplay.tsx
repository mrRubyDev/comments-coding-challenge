import { CommentsContext } from "App";
import React, { useContext, useState } from "react";
import { CommentDisplayProps } from "Types";
import AvatarIcon from "./Avatar";
import CommentInput from "./CommentInput";
import Icon from "./Icon";

export default function CommentDisplay({
	comment,
	reply,
}: CommentDisplayProps) {
	const username = useContext(CommentsContext).username;
	const [replyHov, setReplyHov] = useState(false);
	const [replyClicked, setReplyClicked] = useState(false);

	return (
		<>
			<div
				style={{
					width: "100%",
					maxWidth: "100%",
					minHeight: "4rem",
				}}
			>
				<div
					className="comment-container"
					style={{
						marginLeft: reply
							? comment.parents.length * 4 < 60
								? `${comment.parents.length * 4}%`
								: "60%"
							: "none",
					}}
				>
					<AvatarIcon username={comment.username} />
					<div style={{ width: "100%", marginLeft: "1rem" }}>
						<div className="username-container">
							<p className="username">
								{comment.username === username ? "You" : comment.username} said:
							</p>
						</div>
						<p style={{ textAlign: "left", fontSize: "1rem" }}>
							{comment.text}
						</p>
					</div>
				</div>
				<div
					className="inline-flex"
					style={{
						width: "100%",
						justifyContent: "flex-end",
						marginTop: ".5rem",
					}}
				>
					<div
						className="inline-flex"
						style={{ marginLeft: "1rem", cursor: "pointer" }}
						onMouseEnter={() => setReplyHov(true)}
						onMouseLeave={() => setReplyHov(false)}
						onClick={() => setReplyClicked(true)}
					>
						<p
							className="small-action-text"
							style={{
								color: replyHov ? "lightskyblue" : "grey",
							}}
						>
							Reply
						</p>
						<Icon
							iconName="reply"
							iconColor={replyHov ? "lightskyblue" : "grey"}
							iconSize="1rem"
						/>
					</div>
				</div>
			</div>
			{!comment.replies
				? null
				: Object.keys(comment.replies).map((cmt, i) => (
						<CommentDisplay comment={comment.replies[cmt]} key={i} reply />
				  ))}
			{replyClicked && (
				<CommentInput
					replyTo={[...comment.parents, +comment.id]}
					replied={setReplyClicked}
				/>
			)}
		</>
	);
}
