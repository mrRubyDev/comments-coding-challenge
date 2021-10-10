import "App.css";
import Main from "screens/Main";
import Setup from "screens/Setup";
import { createContext, useEffect, useState } from "react";
import "screens/Styles.css";

const DEMO_COMMENTS = {
	0: {
		text: "Hello, this is the first comment!",
		date: "Jul 12, 2021",
		id: "0",
		username: "@mateo_rubinstein",
		parents: [],
		replies: [
			{
				text: "Hi, this is my first reply.",
				date: "Jul 13, 2021",
				username: "@JohnDoe",
				id: "2",
				parents: [0],
				replies: [
					{
						text: "Hi, this is my first reply to my first reply.",
						date: "Jul 13, 2021",
						username: "@JohnDoe",
						id: "3",
						replies: [],
						parents: [0, 2],
					},
				],
			},
			{
				text: "Hi, this is our second reply.",
				date: "Jul 14, 2021",
				username: "@UsainBolt",
				id: "4",
				parents: [0],
				replies: [],
			},
		],
	},
	1: {
		text: "Hello, this is the second main comment!",
		replies: [],
		date: "Jul 14, 2021",
		id: "1",
		parents: [],
		username: "@ArthurMorgan",
	},
};

export const CommentsContext = createContext();

function App() {
	const [comments, setComments] = useState(DEMO_COMMENTS);
	const [commentCount, setCommentCount] = useState(0);
	const [username, setUsername] = useState("");

	const getReplyCount = comment => {
		if (!comment.replies.length) {
			return 0;
		}
		let replies = comment.replies.length;
		for (let reply of comment.replies) {
			replies += getReplyCount(reply);
		}
		return replies;
	};

	const addReply = (parents, cmmts, body) => {
		let comment = cmmts[parents[0]];
		for (let i = 1; i < parents.length; i++) {
			comment = comment.replies.find(cmmt => +cmmt.id === +parents[i]);
		}
		comment.replies.push(body);
		return cmmts;
	};

	useEffect(() => {
		if (comments) {
			let count = Object.keys(comments).length;
			for (let comment in comments) {
				count = count + getReplyCount(comments[comment]);
			}
			setCommentCount(count);
		}
	}, [comments]);

	const handleNewComment = (newId, commentBody) => {
		const cmmt = { ...comments };
		if (commentBody.parents?.length) {
			const newComments = addReply(commentBody.parents, cmmt, commentBody);
			setComments(newComments);
		} else {
			cmmt[newId] = commentBody;
			setComments(cmmt);
		}
	};

	const store = {
		comments,
		handleNewComment,
		commentCount,
		username,
		setUsername,
	};

	return (
		<CommentsContext.Provider value={store}>
			<div className="App">{username.length ? <Main /> : <Setup />}</div>
		</CommentsContext.Provider>
	);
}

export default App;
