import React from "react";
import Navbar from "components/Navbar";
import CommentInput from "components/CommentInput";
import "screens/Styles.css";
export default function Main() {
	return (
		<div className="full-screen">
			<Navbar />
			<div className="comments-section">
				<div className="header">
					<h4 style={{ fontSize: "1.5rem", alignSelf: "flex-start" }}>
						Comment section:
					</h4>
					<p className="grey-text">3 comments</p>
				</div>
				<div className="input-container">{/* <CommentInput /> */}</div>
			</div>
		</div>
	);
}
