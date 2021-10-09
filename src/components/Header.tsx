import React, { useContext } from "react";
import Icon from "components/Icon";
import { CommentsContext } from "App";

export default function Header() {
	const length = useContext(CommentsContext).commentCount;
	return (
		<div className="header">
			<h4 style={{ fontSize: "1.3rem" }}>Comment section:</h4>
			<div className="inline-flex" style={{ alignItems: "flex-end" }}>
				<Icon iconName="comments" iconColor="grey" iconSize=".8rem" />
				<p
					className="grey-text"
					style={{ marginLeft: ".5rem", fontSize: ".8rem" }}
				>
					{length} comments
				</p>
			</div>
		</div>
	);
}
