import "./App.css";
import Main from "./screens/Main";
import { createContext, useState } from "react";

const DEMO_COMMENTS = {
	0: {
		text: "Hello, this is the first comment!",
		date: "Jul 12, 2021",
		id: 0,
		replies: [
			{
				text: "Hi, this is my first reply.",
				date: "Jul 13, 2021",
			},
			{
				text: "Hi, this is our second reply.",
				date: "Jul 14, 2021",
			},
		],
	},
	1: {
		text: "Hello, this is the second main comment!",
		replies: [],
		date: "Jul 14, 2021",
		id: 1,
	},
};

export const CommentsContext = createContext();

function App() {
	const [comments, setComments] = useState(DEMO_COMMENTS);

	const handleNewComment = (newId, commentBody, addTo) => {
		const cmmt = { ...comments };
		if (addTo) {
			cmmt[addTo].replies.push(commentBody);
			setComments(cmmt);
		} else {
			cmmt[newId] = commentBody;
			setComments(cmmt);
		}
	};
	return (
		<CommentsContext.Provider value={{ comments, handleNewComment }}>
			<div className="App">
				<Main />
			</div>
		</CommentsContext.Provider>
	);
}

export default App;
