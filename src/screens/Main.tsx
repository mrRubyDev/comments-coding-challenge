import React from "react";
import Navbar from "components/Navbar";
import CommentInput from "components/CommentInput";
import Header from "components/Header";
import CommentSection from "components/CommentSection";

export default function Main() {
	return (
		<div className="full-screen">
			<Navbar />
			<div className="comments-section">
				<Header />
				<CommentInput />
			</div>
			<CommentSection />
		</div>
	);
}
