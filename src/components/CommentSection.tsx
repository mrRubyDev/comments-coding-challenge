import React, { useContext } from "react";
import { CommentsContext } from "App";
import CommentDisplay from "components/CommentDisplay";
export default function CommentSection() {
	const comments = useContext(CommentsContext).comments;

	return (
		<div className="comments-section" style={{ border: "none" }}>
			{Object.keys(comments)?.map((key, i) => (
				<CommentDisplay comment={comments[key]} key={i} />
			))}
		</div>
	);
}
