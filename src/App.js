import "./App.css";
import Main from "./screens/Main";
import { createContext, useState } from "react";

function App() {
	const [comments, setComments] = useState({});
	const CommentsContext = createContext({});
	return (
		<CommentsContext.Provider value={(comments, setComments)}>
			<div className="App">
				<Main />
			</div>
		</CommentsContext.Provider>
	);
}

export default App;
