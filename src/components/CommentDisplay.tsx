import React, { useState } from "react";
import { CommentDisplayProps } from "Types";
import AvatarIcon from "./Avatar";
import CommentInput from "./CommentInput";
import Icon from "./Icon";

export default function CommentDisplay({
	comment,
	reply,
}: CommentDisplayProps) {
	const [editHov, setEditHov] = useState(false);
	const [replyHov, setReplyHov] = useState(false);
	const [replyClicked, setReplyClicked] = useState(false);
	return (
		<>
			<div
				style={{
					width: "100%",
					minHeight: "4rem",
				}}
			>
				<div
					className="comment-container"
					style={{ marginLeft: reply ? "10%" : "none" }}
				>
					<AvatarIcon />

					<div style={{ width: "100%", marginLeft: "1rem" }}>
						<p style={{ textAlign: "left", fontSize: "1rem" }}>
							{comment.text}
						</p>
					</div>
				</div>
				{!reply ? (
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
							onMouseEnter={() => setEditHov(true)}
							onMouseLeave={() => setEditHov(false)}
							style={{ cursor: "pointer" }}
							onClick={() => alert("Edit")}
						>
							<p
								className="small-action-text"
								style={{
									color: editHov ? "lightskyblue" : "grey",
									cursor: "pointer",
								}}
							>
								Edit
							</p>
							<Icon
								iconName="edit"
								iconColor={editHov ? "lightskyblue" : "grey"}
								iconSize="1rem"
							/>
						</div>
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
				) : null}
			</div>
			{!comment.replies
				? null
				: Object.keys(comment.replies).map((cmt, i) => (
						<CommentDisplay comment={comment.replies[cmt]} key={i} reply />
				  ))}
			{replyClicked && (
				<CommentInput replyTo={comment.id} replied={setReplyClicked} />
			)}
		</>
	);
}
