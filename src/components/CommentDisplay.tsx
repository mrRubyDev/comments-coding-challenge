import React, { useState } from "react";
import { CommentDisplayProps } from "Types";
import AvatarIcon from "./Avatar";
import Icon from "./Icon";

export default function CommentDisplay({
	comment,
	reply,
}: CommentDisplayProps) {
	const [shareHov, setShareHov] = useState(false);
	const [replyHov, setReplyHov] = useState(false);
	return (
		<div style={{ width: reply ? "80%" : "100%" }}>
			<div className="comment-container">
				<AvatarIcon />

				<div style={{ width: "100%", marginLeft: "1rem" }}>
					<p style={{ textAlign: "left", fontSize: "1rem" }}>{comment.text}</p>
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
					onMouseEnter={() => setShareHov(true)}
					onMouseLeave={() => setShareHov(false)}
					style={{ cursor: "pointer" }}
					onClick={() => alert("Share")}
				>
					<p
						className="small-action-text"
						style={{
							color: shareHov ? "lightskyblue" : "grey",
							cursor: "pointer",
						}}
					>
						Share
					</p>
					<Icon
						iconName="share"
						iconColor={shareHov ? "lightskyblue" : "grey"}
						iconSize="1rem"
					/>
				</div>
				<div
					className="inline-flex"
					style={{ marginLeft: "0.5rem", cursor: "pointer" }}
					onMouseEnter={() => setReplyHov(true)}
					onMouseLeave={() => setReplyHov(false)}
					onClick={() => alert("reply")}
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
	);
}
